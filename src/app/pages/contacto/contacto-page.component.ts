import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from '../../components/contacto/contacto.component';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactoComponent],
  templateUrl: './contacto-page.component.html',
  styleUrl: './contacto-page.component.scss'
})
export class ContactoPageComponent {
  whatsappNumber = '51934772764';
  displayPhone = '+51 934 772 764';

  contactChannels = [
    {
      title: 'Capacitación y Preparación EDLO',
      badge: 'DOCENTES BILINGÜES',
      desc: 'Consulta por vacantes, simulacros individuales y asesoría para la evaluación oral y escrita del MINEDU.',
      msg: 'Hola, deseo información sobre la Capacitación EDLO Quechua Sureño para docentes bilingües.'
    },
    {
      title: 'Cursos por Niveles (Básico, Intermedio, Avanzado)',
      badge: 'PÚBLICO GENERAL & DOCENTES',
      desc: 'Aprende quechua desde cero o perfecciona tu fluidez con certificación de 220 horas lectivas.',
      msg: 'Hola, deseo inscribirme en los cursos de Quechua por niveles (Básico / Intermedio / Avanzado).'
    },
    {
      title: 'Programa Especial Quechua Médico',
      badge: 'SECTOR SALUD',
      desc: 'Vocabulario clínico, anamnesis y diálogo médico-paciente para personal asistencial.',
      msg: 'Hola, deseo información sobre el programa de Quechua Médico para el sector salud.'
    },
    {
      title: 'Consultas Académicas y Matrícula',
      badge: 'ATENCIÓN ADMINISTRATIVA',
      desc: 'Información sobre inicios de clases, formas de pago, convenios institucionales y constancias de estudio.',
      msg: 'Hola, deseo comunicarme con administración para realizar consultas sobre matrícula y trámites académicos.'
    }
  ];

  getWhatsAppUrl(customText: string): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(customText)}`;
  }
}
