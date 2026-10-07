import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompetenciasComponent } from '../../components/competencias/competencias.component';
import { MetodologiaComponent } from '../../components/metodologia/metodologia.component';
import { SimuladorComponent } from '../../components/simulador/simulador.component';
import { PublicoObjetivoComponent } from '../../components/publico-objetivo/publico-objetivo.component';
import { FaqComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-edlo-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CompetenciasComponent,
    MetodologiaComponent,
    SimuladorComponent,
    PublicoObjetivoComponent,
    FaqComponent
  ],
  templateUrl: './edlo.component.html',
  styleUrl: './edlo.component.scss'
})
export class EdloComponent {
  whatsappNumber = '51934772764';
  displayPhone = '+51 934 772 764';

  enrollForm = {
    fullName: '',
    phone: '',
    email: '',
    currentLevel: 'Básico',
    targetLevel: 'Avanzado',
    region: 'Apurímac'
  };

  get edloWhatsAppUrl(): string {
    const text = encodeURIComponent(
      '¡Hola! Solicito información e inscripción para el programa de Preparación EDLO (Evaluación de Dominio de la Lengua Originaria - MINEDU / RND-Bilingües).'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  submitEnrollForm(event: Event) {
    event.preventDefault();
    const msg = `¡Hola! Deseo inscribirme en la Capacitación EDLO Quechua Sureño.\n` +
      `*Nombre:* ${this.enrollForm.fullName || 'Docente'}\n` +
      `*Celular:* ${this.enrollForm.phone}\n` +
      `*Región/UGEL:* ${this.enrollForm.region}\n` +
      `*Nivel Actual:* ${this.enrollForm.currentLevel}\n` +
      `*Nivel al que postulo:* ${this.enrollForm.targetLevel}`;
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
