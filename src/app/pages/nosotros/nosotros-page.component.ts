import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';

@Component({
  selector: 'app-nosotros-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NosotrosComponent],
  templateUrl: './nosotros-page.component.html',
  styleUrl: './nosotros-page.component.scss'
})
export class NosotrosPageComponent {
  whatsappNumber = '51934772764';

  get whatsappUrl(): string {
    const text = encodeURIComponent(
      '¡Hola! Deseo más información sobre el CENTRO DE IDIOMA ORIGINARIO y su equipo académico.'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }
}
