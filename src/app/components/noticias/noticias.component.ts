import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NewsItem {
  id: string;
  badge: string;
  tagColor: string;
  title: string;
  description: string;
  link: string;
  btnText: string;
  icon: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  newsItems: NewsItem[] = [
    {
      id: 'premio',
      badge: 'Reconocimiento Internacional',
      tagColor: 'amber',
      title: 'Premio Quechua a la Trayectoria',
      description: 'Difusión e impacto del idioma quechua en The Quechua Alliance, reconociendo el liderazgo en preservación y revitalización lingüística.',
      link: 'https://thequechua.org/lifetime-awardees/',
      btnText: 'Ver Galardonados',
      icon: 'award'
    },
    {
      id: 'youtube-video',
      badge: 'Producción Audiovisual',
      tagColor: 'red',
      title: 'Video Didáctico: Enseñanza y Difusión',
      description: 'Clases demostrativas y cápsulas pedagógicas sobre pronunciación, gramática y cosmovisión quechua disponibles en YouTube.',
      link: 'https://youtu.be/uQ10b7QpN2Y?si=MS5mMnaScA_cN0pj',
      btnText: 'Ver en YouTube',
      icon: 'play-circle'
    },
    {
      id: 'asociacion-video',
      badge: 'Comunidad & Redes',
      tagColor: 'blue',
      title: 'Talleres Comunitarios y Experiencias',
      description: 'Encuentros interculturales, talleres vivenciales y testimonios de docentes quechuahablantes compartidos en nuestras redes.',
      link: 'https://www.facebook.com/reel/5653248411471117',
      btnText: 'Ver en Facebook',
      icon: 'share-2'
    },
    {
      id: 'diccionario',
      badge: 'Herramienta de Estudio',
      tagColor: 'emerald',
      title: 'Diccionario Español - Quechua Glosbe',
      description: 'Consulta rápida de términos, ejemplos reales en oraciones y conjugaciones contextuales para enriquecer tu aprendizaje diario.',
      link: 'https://es.glosbe.com/es/qu',
      btnText: 'Abrir Diccionario',
      icon: 'book-open'
    }
  ];
}
