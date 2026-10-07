# Multi-stage Dockerfile for Angular 21 + Nginx (Coolify / Oracle VPS)
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production Server
FROM nginx:alpine

# Copy built app to nginx html directory
COPY --from=build /app/dist/edlo-app/browser /usr/share/nginx/html

# Copy custom nginx configuration with SPA routing support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Support multiple ports for any Coolify reverse proxy routing (80, 3000, 8080)
EXPOSE 80
EXPOSE 3000
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
