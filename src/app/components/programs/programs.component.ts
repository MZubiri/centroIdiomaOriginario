import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  actionText?: string;
  route?: string;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  private router = inject(Router);

  openEdloInfo = output<void>();
  openEnrollment = output<void>();
  openLevelTest = output<void>();

  services: ServiceItem[] = [
    {
      id: 'cursos',
      icon: 'graduation-cap',
      title: 'Cursos especializados',
      description: 'Programas para todos los niveles y edades con docentes nativos expertos.',
      actionText: 'Ver programas',
      route: '/cursos'
    },
    {
      id: 'intercultural',
      icon: 'users',
      title: 'Formación intercultural',
      description: 'Aprende el idioma en su contexto histórico, vivencial y comunitario.',
      actionText: 'Conocer enfoque',
      route: '/nosotros'
    },
    {
      id: 'edlo',
      icon: 'book-open',
      title: 'Preparación EDLO',
      description: 'Acredita tu dominio oral y escrito para ingresar o renovar en el Registro Nacional de Docentes Bilingües (MINEDU).',
      actionText: 'Ver página EDLO completa',
      route: '/edlo'
    },
    {
      id: 'actividades',
      icon: 'calendar',
      title: 'Actividades culturales',
      description: 'Talleres, encuentros vivenciales y eventos comunitarios en todo el país.',
      actionText: 'Ver actividades',
      route: '/noticias'
    }
  ];

  trustPillars = [
    {
      icon: 'award',
      title: 'Docente con Maestría',
      desc: 'Maestría en Educación y sólida experiencia en la enseñanza del quechua sureño'
    },
    {
      icon: 'check-circle',
      title: 'Clases Prácticas',
      desc: 'Enfocadas 100% en lo que realmente evalúa el Ministerio de Educación'
    },
    {
      icon: 'file-text',
      title: 'Material y Simulacros',
      desc: 'Material de estudio y simulacros de la evaluación oral y escrita incluidos'
    },
    {
      icon: 'users',
      title: 'Guía de Inscripción',
      desc: 'Acompañamiento paso a paso en el proceso a través de PerúEduca'
    }
  ];

  onServiceClick(serviceId: string) {
    if (serviceId === 'edlo') {
      this.router.navigate(['/edlo']);
    } else if (serviceId === 'cursos') {
      this.router.navigate(['/cursos']);
    } else if (serviceId === 'intercultural') {
      this.router.navigate(['/nosotros']);
    } else if (serviceId === 'actividades') {
      this.router.navigate(['/noticias']);
    } else {
      this.openEnrollment.emit();
    }
  }

  whatsappNumber = '51934772764';

  get whatsappMedicoUrl(): string {
    const text = encodeURIComponent(
      '¡Hola! Deseo información e inscribirme en el programa especial de Quechua Médico dirigido a profesionales de la salud.'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  onTestClick(event?: Event) {
    if (event) event.preventDefault();
    this.router.navigate(['/cursos']);
  }
}
