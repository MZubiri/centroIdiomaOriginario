import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface VerifiedCertificate {
  code: string;
  recipient: string;
  module: string;
  program: string;
  hours: number;
  grade: string;
  modality: string;
  dateRange: string;
  issueDate: string;
  location: string;
}

export interface TestQuestion {
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    points: number;
  }[];
}

@Component({
  selector: 'app-cursos-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  whatsappNumber = '51934772764';
  displayPhone = '+51 934 772 764';

  // Test de Nivel Interactivo
  currentTestStep = signal<number>(0);
  testTotalPoints = signal<number>(0);

  testQuestions: TestQuestion[] = [
    {
      title: 'Comprensión Auditiva (Uyarikuspa)',
      subtitle: '¿Qué tan bien comprendes cuando dos hablantes nativos conversan en quechua?',
      options: [
        { label: 'Palabras aisladas y saludos', description: 'Entiendo frases básicas como «Allillanchu», «Añay» y palabras comunes.', points: 1 },
        { label: 'Conversaciones cotidianas y relatos', description: 'Comprendo la idea general de narraciones, preguntas y diálogos habituales.', points: 2 },
        { label: 'Discursos complejos y matices dialectales', description: 'Entiendo con total naturalidad argumentos, debates y contextos pedagógicos.', points: 3 }
      ]
    },
    {
      title: 'Expresión Oral (Rimay)',
      subtitle: '¿Con qué grado de fluidez te comunicas en lengua originaria?',
      options: [
        { label: 'Respondo con frases cortas y vocabulario básico', description: 'Puedo presentarme y decir dónde vivo, pero me cuesta hilar oraciones complejas.', points: 1 },
        { label: 'Sostengo una conversación fluida en situaciones habituales', description: 'Puedo explicar una clase, narrar hechos cotidianos y dar instrucciones.', points: 2 },
        { label: 'Fluidez total y argumentación pedagógica', description: 'Me desenvuelvo con espontaneidad, uso conectores propios y modismos.', points: 3 }
      ]
    },
    {
      title: 'Escritura y Ortografía Normalizada (Qillqay)',
      subtitle: '¿Conoces y aplicas el alfabeto oficial normado (Achahala)?',
      options: [
        { label: 'Desconozco las reglas ortográficas oficiales', description: 'No sé distinguir entre vocales trivocálicas (a, i, u) o sufijos normados.', points: 1 },
        { label: 'Redacto oraciones simples con ciertas dudas', description: 'Conozco el alfabeto pero me confundo en la sufijación compuesta y concordancia.', points: 2 },
        { label: 'Redacto textos pedagógicos y narraciones completas', description: 'Aplico con seguridad la normativa oficial aprobada por el MINEDU.', points: 3 }
      ]
    }
  ];

  get recommendedLevel(): { name: string; tag: string; desc: string; advice: string } {
    const pts = this.testTotalPoints();
    if (pts <= 4) {
      return {
        name: 'Quechua Sureño - Nivel Básico (220 Horas)',
        tag: 'Sugerido: Nivel Básico',
        desc: 'Recomendado para docentes y personas que están iniciando o que entienden palabras sueltas pero necesitan bases sólidas de fonética, pronunciación y alfabeto oficial.',
        advice: 'Comenzarás desde la fonética básica, saludos, expresión de cortesía, morfología nominal y primeros textos guiados.'
      };
    } else if (pts <= 7) {
      return {
        name: 'Quechua Sureño - Nivel Intermedio (220 Horas)',
        tag: 'Sugerido: Nivel Intermedio',
        desc: 'Tienes buen oído y vocabulario. Es el momento perfecto para dominar la sufijación compleja, soltura discursiva y redacción con normativa oficial.',
        advice: 'Avanzarás hacia la fluidez comunicativa espontánea, producción escrita pedagógica y simulacros tipo MINEDU.'
      };
    } else {
      return {
        name: 'Quechua Sureño - Avanzado / Especialización EDLO',
        tag: 'Sugerido: Nivel Avanzado o EDLO',
        desc: 'Tienes un alto dominio de la lengua. Tu meta principal debe ser perfeccionar la producción escrita formal y prepararte para acreditar nivel Avanzado en el RND-Bilingües.',
        advice: 'Te conviene el programa de Preparación EDLO o Quechua Avanzado con simulacros reales de evaluación oral y escrita.'
      };
    }
  }

  selectTestOption(points: number) {
    this.testTotalPoints.update(p => p + points);
    this.currentTestStep.update(s => s + 1);
  }

  restartTest() {
    this.currentTestStep.set(0);
    this.testTotalPoints.set(0);
  }

  getTestWhatsAppUrl(): string {
    const msg = `¡Hola! Realicé el test de nivel en su página web y mi resultado es: *${this.recommendedLevel.name}*. Deseo información para matricularme.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  // Verificador de Certificados Oficiales
  searchCertCode = signal('CIO-APU-2026-0814');
  activeCertificate: VerifiedCertificate | null = {
    code: 'CIO-APU-2026-0814',
    recipient: 'LUZ MICAELA SANDOVAL GOMEZ',
    module: 'Quechua Básico (Lectura y Escritura)',
    program: 'Lectura y escritura de la lengua Quechua',
    hours: 220,
    grade: '18 (Dieciocho) - Sobresaliente',
    modality: 'Mixta (sincrónica / asincrónica)',
    dateRange: 'del 11 de abril al 18 de Julio de 2026',
    issueDate: '5 de agosto del 2026',
    location: 'Chincheros, Apurímac'
  };

  searchCertificate() {
    const code = this.searchCertCode().trim().toUpperCase();
    if (code.includes('CIO') || code.length > 5) {
      this.activeCertificate = {
        code: code,
        recipient: 'LUZ MICAELA SANDOVAL GOMEZ',
        module: 'Quechua Básico (Lectura y Escritura)',
        program: 'Lectura y escritura de la lengua Quechua',
        hours: 220,
        grade: '18 (Dieciocho) - Sobresaliente',
        modality: 'Mixta (sincrónica / asincrónica)',
        dateRange: 'del 11 de abril al 18 de Julio de 2026',
        issueDate: '5 de agosto del 2026',
        location: 'Chincheros, Apurímac'
      };
    } else {
      this.activeCertificate = null;
    }
  }

  getCourseWhatsAppUrl(courseName: string): string {
    const msg = `¡Hola! Solicito información de costos, horarios y matrícula para el curso: *${courseName}*.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
}
