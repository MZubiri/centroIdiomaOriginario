import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProgramsComponent } from '../../components/programs/programs.component';
import { LenguasExplorerComponent } from '../../components/lenguas-explorer/lenguas-explorer.component';
import { NoticeBannerComponent } from '../../components/notice-banner/notice-banner.component';
import { NoticiasComponent } from '../../components/noticias/noticias.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    ProgramsComponent,
    LenguasExplorerComponent,
    NoticeBannerComponent,
    NoticiasComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  whatsappNumber = '51934772764';

  get whatsappUrl(): string {
    const text = encodeURIComponent(
      '¡Hola! Deseo más información sobre los cursos y capacitaciones del CENTRO DE IDIOMA ORIGINARIO.'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }
}
