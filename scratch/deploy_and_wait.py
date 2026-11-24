import subprocess
import time
import json
import sys

print("[1] Queuing deployment via Coolify tinker...", flush=True)
php_code = """
$app = App\\Models\\Application::where('uuid', 'e6rmflrfddbrp4pmkps9h9ay')->first();
$deployment_uuid = new Visus\\Cuid2\\Cuid2();
$result = queue_application_deployment(
    application: $app,
    deployment_uuid: $deployment_uuid,
    force_rebuild: true
);
echo "QUEUED_DEPLOYMENT:" . $deployment_uuid . PHP_EOL;
"""

p = subprocess.run(
    ["docker", "exec", "-i", "coolify", "php", "artisan", "tinker"],
    input=php_code.encode("utf-8"),
    capture_output=True
)

output = p.stdout.decode("utf-8", errors="replace")
print(output, flush=True)

deployment_uuid = None
for line in output.splitlines():
    if "QUEUED_DEPLOYMENT:" in line:
        deployment_uuid = line.split("QUEUED_DEPLOYMENT:")[1].strip()
        break

if not deployment_uuid:
    cmd = [
        "docker", "exec", "coolify-db", "psql", "-U", "coolify", "-d", "coolify", "-t", "-A", "-c",
        "SELECT deployment_uuid FROM application_deployment_queues WHERE application_id = '30' ORDER BY id DESC LIMIT 1;"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    deployment_uuid = res.stdout.strip()

print(f"[2] Tracking deployment: {deployment_uuid}", flush=True)

# Poll status
max_wait = 240
start = time.time()
last_status = None

while time.time() - start < max_wait:
    sql = f"SELECT status, commit FROM application_deployment_queues WHERE deployment_uuid = '{deployment_uuid}';"
    res = subprocess.run(
        ["docker", "exec", "coolify-db", "psql", "-U", "coolify", "-d", "coolify", "-t", "-A", "-F", "|", "-c", sql],
        capture_output=True, text=True
    )
    parts = res.stdout.strip().split("|")
    status = parts[0] if parts else "unknown"
    commit = parts[1] if len(parts) > 1 else ""

    if status != last_status:
        print(f"Status changed: {status} (commit: {commit}) [{int(time.time() - start)}s elapsed]", flush=True)
        last_status = status

    if status in ("finished", "success"):
        print("\nDeployment finished successfully!", flush=True)
        break
    elif status in ("failed", "error", "cancelled"):
        print(f"\nDeployment ended with status: {status}", flush=True)
        sys.exit(1)

    time.sleep(3)
else:
    print("Timeout waiting for deployment.", flush=True)
    sys.exit(1)

# Check active container
print("\n[3] Checking running container for application:", flush=True)
ps_res = subprocess.run(["docker", "ps", "--filter", "name=e6rmflrfddbrp4pmkps9h9ay", "--format", "table {{.Names}}\t{{.Status}}\t{{.Ports}}"], capture_output=True, text=True)
print(ps_res.stdout, flush=True)
