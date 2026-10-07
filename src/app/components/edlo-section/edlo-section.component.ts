import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edlo-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edlo-section.component.html',
  styleUrl: './edlo-section.component.scss'
})
export class EdloSectionComponent {
  openEnrollment = output<void>();

  whatsappNumber = '51934772764';

  get whatsappUrl(): string {
    const text = encodeURIComponent(
      '¡Hola! Deseo más información e inscribirme en la Capacitación en Quechua Sureño para la EDLO (Evaluación de Dominio de la Lengua Originaria).'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  onEnrollClick(event?: Event) {
    if (event) event.preventDefault();
    this.openEnrollment.emit();
  }
}
