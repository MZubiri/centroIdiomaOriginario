import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  openEnrollment = output<void>();

  whatsappNumber = '51934772764';

  get whatsappNosotrosUrl(): string {
    const text = encodeURIComponent(
      '¡Hola! Vengo de la sección Nosotros de la web. Deseo conocer más sobre el equipo docente, la metodología y la Capacitación en Quechua Sureño para la EDLO.'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  scrollToSection(selector: string, event?: Event) {
    if (event) event.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
