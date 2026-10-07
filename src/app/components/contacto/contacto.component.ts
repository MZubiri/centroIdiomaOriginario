import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface QuickWhatsappOption {
  id: string;
  badge: string;
  title: string;
  desc: string;
  messageText: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  whatsappNumber = '51934772764';
  displayPhone = '+51 934 772 764';

  contactName = '';
  contactTopic = 'Inscripción EDLO Quechua Sureño';
  contactCustomMsg = '';

  quickOptions: QuickWhatsappOption[] = [
    {
      id: 'inscripcion',
      badge: 'Matrícula Rápida',
      title: 'Inscripción a Capacitación Quechua Sureño',
      desc: 'Reserva tu vacante y solicita los horarios para la próxima convocatoria.',
      messageText: '¡Hola! Deseo inscribirme en la Capacitación en Quechua Sureño para la EDLO y asegurar mi vacante.'
    },
    {
      id: 'evaluacion',
      badge: 'Simulacros & Módulos',
      title: 'Consulta sobre Evaluación Oral y Escrita',
      desc: 'Información sobre la prueba oral, rúbricas MINEDU y redacción oficial.',
      messageText: '¡Hola! Quisiera recibir información detallada sobre los simulacros de la prueba oral y escrita de la EDLO.'
    },
    {
      id: 'perueduca',
      badge: 'Guía de Trámite',
      title: 'Asistencia para Inscripción en PerúEduca',
      desc: 'Acompañamiento paso a paso en el registro y postulación oficial.',
      messageText: '¡Hola! Necesito orientación y acompañamiento para el proceso de inscripción a través de PerúEduca.'
    }
  ];

  getWhatsappUrl(customText: string): string {
    const encoded = encodeURIComponent(customText);
    return `https://wa.me/${this.whatsappNumber}?text=${encoded}`;
  }

  sendCustomWhatsapp(event?: Event) {
    if (event) event.preventDefault();
    let text = `👋 *¡Hola! Consulta desde la sección Contacto de la web*\n\n`;
    if (this.contactName.trim()) {
      text += `👤 *Nombre:* ${this.contactName.trim()}\n`;
    }
    text += `📌 *Asunto:* ${this.contactTopic}\n`;
    if (this.contactCustomMsg.trim()) {
      text += `💬 *Consulta:* ${this.contactCustomMsg.trim()}\n`;
    } else {
      text += `💬 *Consulta:* Deseo recibir asesoría personalizada para la Capacitación en Quechua Sureño EDLO.\n`;
    }

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
