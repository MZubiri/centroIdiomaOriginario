import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'CENTRO DE IDIOMA ORIGINARIO · Capacitación Docente & EDLO';

  // Teléfono oficial para WhatsApp
  whatsappNumber = '51934772764';
  displayPhone = '+51 934 772 764';

  // Modales Globales
  isEnrollmentModalOpen = signal(false);
  isSearchModalOpen = signal(false);
  enrollmentSuccess = signal(false);

  // Formulario Rápido de Inscripción
  enrollForm = {
    fullName: '',
    email: '',
    phone: '',
    language: 'Quechua Sureño',
    level: 'Preparación EDLO - MINEDU',
    modality: 'Mixta (Sincrónica / Asincrónica)'
  };

  // Búsqueda rápida general
  searchQuery = signal('');

  openEnrollment(language?: string, level?: string) {
    if (language) this.enrollForm.language = language;
    if (level) this.enrollForm.level = level;
    this.enrollmentSuccess.set(false);
    this.isEnrollmentModalOpen.set(true);
  }

  closeEnrollment() {
    this.isEnrollmentModalOpen.set(false);
    this.enrollmentSuccess.set(false);
  }

  submitEnrollment() {
    const message = 
      `🏛️ *NUEVA INSCRIPCIÓN - CENTRO DE IDIOMA ORIGINARIO*\n\n` +
      `👤 *Docente / Participante:* ${this.enrollForm.fullName}\n` +
      `📱 *Celular / WhatsApp:* ${this.enrollForm.phone}\n` +
      `📧 *Correo:* ${this.enrollForm.email ? this.enrollForm.email : 'No especificado'}\n` +
      `🗣️ *Lengua Originaria:* ${this.enrollForm.language}\n` +
      `📚 *Nivel / Módulo:* ${this.enrollForm.level}\n` +
      `💻 *Modalidad:* ${this.enrollForm.modality}\n\n` +
      `_Solicito información sobre vacantes disponibles, fecha de inicio y proceso de matrícula._`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encoded}`;

    this.enrollmentSuccess.set(true);
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      if (this.enrollmentSuccess()) {
        this.closeEnrollment();
      }
    }, 3500);
  }

  openSearch() {
    this.isSearchModalOpen.set(true);
  }

  closeSearch() {
    this.isSearchModalOpen.set(false);
    this.searchQuery.set('');
  }
}
