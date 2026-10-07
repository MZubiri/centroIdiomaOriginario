import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LenguasExplorerComponent } from '../../components/lenguas-explorer/lenguas-explorer.component';

@Component({
  selector: 'app-lenguas-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LenguasExplorerComponent],
  templateUrl: './lenguas.component.html',
  styleUrl: './lenguas.component.scss'
})
export class LenguasComponent {
  whatsappNumber = '51934772764';

  languagesDetail = [
    {
      name: 'Quechua Sureño (Qhichwa)',
      family: 'Familia Quechua',
      speakers: '+3,700,000 hablantes',
      regions: 'Cusco, Ayacucho, Puno, Apurímac, Huancavelica, Arequipa, Moquegua',
      description: 'Es la lengua originaria con mayor número de hablantes del Perú y Sudamérica. Presenta dos variantes principales de gran vitalidad: el Quechua Chanka (Ayacucho, Huancavelica, Apurímac) y el Quechua Collao (Cusco, Puno, Arequipa). Es lengua oficial normada por el Estado peruano.',
      writingSystem: 'Alfabeto trivocálico oficial (a, i, u) aprobado por R.M. N° 1218-85-ED.',
      image: '/images/lang_quechua.jpg'
    },
    {
      name: 'Aymara',
      family: 'Familia Aru',
      speakers: '+450,000 hablantes',
      regions: 'Puno (Altiplano), Tacna, Moquegua',
      description: 'Lengua andina de una profunda riqueza morfológica aglutinante. Posee un sistema fonológico con cuatro consonantes oclusivas distintivas (simples, aspiradas y glotalizadas) y una cosmovisión estrechamente vinculada al tiempo cíclico y la complementariedad.',
      writingSystem: 'Alfabeto oficial unificado normado por R.M. N° 1218-85-ED.',
      image: '/images/lang_aymara.jpg'
    },
    {
      name: 'Asháninka',
      family: 'Familia Arawak',
      speakers: '+73,000 hablantes',
      regions: 'Junín, Ucayali, Pasco, Cusco, Huánuco, Ayacucho',
      description: 'El pueblo indígena más numeroso de la Amazonía peruana. Su lengua expresa el equilibrio con la selva (Kametsa Asaiki / El Buen Vivir). Es la lengua amazónica con mayor número de instituciones educativas EIB en el Perú.',
      writingSystem: 'Alfabeto oficial normalizado por R.M. N° 056-2008-ED.',
      image: '/images/lang_ashaninka.jpg'
    },
    {
      name: 'Shipibo-Konibo',
      family: 'Familia Pano',
      speakers: '+34,000 hablantes',
      regions: 'Ucayali, Loreto, Madre de Dios, Huánuco',
      description: 'Célebre por el arte del Kené (diseños geométricos sagrados que representan cantos, caminos y visiones ancestrales). Su lengua posee una estructura tonal y sintaxis refinada que transmite relatos míticos y saberes curativos.',
      writingSystem: 'Alfabeto oficial normalizado por R.M. N° 0200-2008-ED.',
      image: '/images/lang_shipibo.jpg'
    },
    {
      name: 'Awajún',
      family: 'Familia Jíbaro',
      speakers: '+56,000 hablantes',
      regions: 'Amazonas, San Martín, Loreto, Cajamarca',
      description: 'Lengua hablada por guerreros y guardianes de los bosques del Alto Marañón. Destaca por su fonología rica y el concepto del «Tajimat Pujut» (vida plena comunitaria), con activa presencia en la educación bilingüe intercultural.',
      writingSystem: 'Alfabeto oficial normalizado por R.M. N° 0451-2008-ED.',
      image: '/images/lang_awajun.jpg'
    }
  ];

  getLangWhatsAppUrl(langName: string): string {
    const msg = `¡Hola! Solicito información sobre los cursos y talleres de la lengua *${langName}*.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
}
