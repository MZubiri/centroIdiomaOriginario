import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoticiasComponent } from '../../components/noticias/noticias.component';

@Component({
  selector: 'app-noticias-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NoticiasComponent],
  templateUrl: './noticias-page.component.html',
  styleUrl: './noticias-page.component.scss'
})
export class NoticiasPageComponent {
  resources = [
    {
      title: 'Diccionario Glosbe Quechua - Castellano',
      badge: 'HERRAMIENTA DIGITAL',
      desc: 'Consulta en línea más de 50,000 términos, frases y ejemplos contextuales de Quechua Chanka y Collao.',
      link: 'https://es.glosbe.com/qu/es',
      icon: '📖'
    },
    {
      title: 'Premio Nacional de Literatura en Lenguas Indígenas',
      badge: 'CULTURA & RECONOCIMIENTO',
      desc: 'Convocatorias del Ministerio de Cultura para producción literaria en quechua, aimara y lenguas amazónicas.',
      link: 'https://www.gob.pe/cultura',
      icon: '🏆'
    },
    {
      title: 'Alfabetos y Normas Oficiales (MINEDU)',
      badge: 'NORMATIVA OFICIAL',
      desc: 'Descarga las resoluciones ministeriales y manuales de escritura normalizada para cada lengua.',
      link: 'https://www.gob.pe/minedu',
      icon: '📜'
    },
    {
      title: 'Cuentos y Relatos Tradicionales en Audio',
      badge: 'MULTIMEDIA EDUCATIVO',
      desc: 'Audios auténticos narrados por hablantes sabios de comunidades andinas para entrenamiento auditivo.',
      link: 'https://wa.me/51934772764?text=Hola,%20solicito%20acceso%20a%20los%20audios%20y%20relatos%20en%20Quechua.',
      icon: '🎧'
    }
  ];
}
