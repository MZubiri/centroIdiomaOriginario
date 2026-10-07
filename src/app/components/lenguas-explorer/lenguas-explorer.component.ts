import { Component, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface LanguageCard {
  id: string;
  name: string;
  tagline: string;
  image: string;
  speakers: string;
  region: string;
  family: string;
  description: string;
  nextStart: string;
}

@Component({
  selector: 'app-lenguas-explorer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lenguas-explorer.component.html',
  styleUrl: './lenguas-explorer.component.scss'
})
export class LenguasExplorerComponent {
  openEnrollment = output<string>();

  languages: LanguageCard[] = [
    {
      id: 'quechua',
      name: 'Quechua Sureño',
      tagline: 'SABIDURÍA VIVA',
      image: '/images/lang_quechua.jpg',
      speakers: '+3.8 Millones de hablantes',
      region: 'Cusco, Ayacucho, Apurímac, Puno, Huancavelica, Arequipa',
      family: 'Familia Lingüística Quechua II-C (Chanka y Collao)',
      description: 'La variedad quechua más hablada en los Andes peruanos, normalizada con el alfabeto oficial trivocálico para la evaluación EDLO y el RND-Bilingües.',
      nextStart: 'Inicios mensuales - Modalidad Sincrónica y Asincrónica'
    },
    {
      id: 'aymara',
      name: 'Aymara',
      tagline: 'FUERZA DE NUESTROS PUEBLOS',
      image: '/images/lang_aymara.jpg',
      speakers: '+450 Mil hablantes',
      region: 'Puno, Moquegua, Tacna',
      family: 'Familia Lingüística Aru',
      description: 'Milenaria lengua del altiplano andino y el lago sagrado Titicaca, estructurada con lógica trivalente única en el mundo.',
      nextStart: 'Próximo grupo: 1ro de cada mes'
    },
    {
      id: 'ashaninka',
      name: 'Asháninka',
      tagline: 'BOSQUES QUE HABLAN',
      image: '/images/lang_ashaninka.jpg',
      speakers: '+120 Mil hablantes',
      region: 'Junín, Pasco, Ucayali, Cusco, Huánuco',
      family: 'Familia Arawak',
      description: 'La lengua indígena amazónica con mayor número de hablantes del Perú, con una rica tradición oral y comunitaria.',
      nextStart: 'Grupos regulares y preparación docente'
    },
    {
      id: 'shipibo',
      name: 'Shipibo-Konibo',
      tagline: 'ARTE EN PALABRAS',
      image: '/images/lang_shipibo.jpg',
      speakers: '+35 Mil hablantes',
      region: 'Ucayali, Loreto, Madre de Dios',
      family: 'Familia Pano',
      description: 'Reconocida internacionalmente por sus diseños geométricos sagrados (Kené) y su profundo conocimiento de la botánica medicinal.',
      nextStart: 'Talleres culturales y cursos bilingües'
    },
    {
      id: 'awajun',
      name: 'Awajún',
      tagline: 'RAÍCES AMAZÓNICAS',
      image: '/images/lang_awajun.jpg',
      speakers: '+56 Mil hablantes',
      region: 'Amazonas, Loreto, San Martín, Cajamarca',
      family: 'Familia Jíbaro',
      description: 'Pueblo guardián de los bosques y ríos amazónicos. Su lengua posee una fuerza identitaria y liderazgo comunal sobresaliente.',
      nextStart: 'Inscripción abierta todo el año'
    }
  ];

  selectedModalLang = signal<LanguageCard | null>(null);

  openLanguageModal(lang: LanguageCard, event?: Event) {
    if (event) event.stopPropagation();
    this.selectedModalLang.set(lang);
  }

  closeLanguageModal() {
    this.selectedModalLang.set(null);
  }

  enrollInLang(langName: string) {
    this.closeLanguageModal();
    this.openEnrollment.emit(langName);
  }
}
