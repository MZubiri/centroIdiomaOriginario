import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publico-objetivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publico-objetivo.component.html',
  styleUrl: './publico-objetivo.component.scss'
})
export class PublicoObjetivoComponent {
  perfiles = [
    {
      title: 'Docentes Nombrados en Servicio',
      desc: 'Para ascender en la escala magisterial, participar en reasignaciones y acceder a plazas en II.EE. EIB de fortalecimiento y revitalización.',
      badge: 'Escala & Reasignación',
      icon: 'user-check'
    },
    {
      title: 'Docentes Contratados',
      desc: 'Para calificar a los cuadros de mérito del proceso anual de contratación docente con bonificación especial por lengua originaria.',
      badge: 'Contrato Docente',
      icon: 'file-text'
    },
    {
      title: 'Aspirantes al RNDBLO',
      desc: 'Docentes que ingresan por primera vez o desean elevar su nivel registrado (de Básico a Intermedio o Avanzado) ante el MINEDU.',
      badge: 'Registro Nacional',
      icon: 'award'
    },
    {
      title: 'Directivos y Especialistas',
      desc: 'Directores de II.EE., coordinadores pedagógicos y especialistas de UGEL/DRE en ámbitos interculturales bilingües.',
      badge: 'Gestión EIB',
      icon: 'briefcase'
    }
  ];

  objetivoPilares = [
    {
      title: 'Competencia Comunicativa Integral',
      desc: 'Fluidez oral y corrección escrita en situaciones comunicativas pedagógicas y comunitarias.'
    },
    {
      title: 'Seguridad en la Evaluación EDLO',
      desc: 'Manejo de tiempos, estructura discursiva y resolución de reactivos estandarizados.'
    },
    {
      title: 'Respaldo para la Carrera Pública',
      desc: 'Acceso a mayores oportunidades laborales, estabilidad y bonificaciones normadas por ley.'
    },
    {
      title: 'Preservación y Valoración Cultural',
      desc: 'Transmisión pedagógica respetuosa de los saberes ancestrales y la cosmovisión originaria.'
    }
  ];
}
