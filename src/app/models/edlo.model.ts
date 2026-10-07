export interface Competencia {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  focusArea: 'Oral' | 'Escrito' | 'Integral';
  topics: string[];
  evaluationCriteria: string;
  iconName: string;
}

export interface EtapaMetodologia {
  stepNumber: number;
  name: string;
  tagline: string;
  description: string;
  activities: string[];
  keyTools: string[];
  deliverable: string;
  iconName: string;
}

export interface LenguaOriginaria {
  id: string;
  name: string;
  variety: string;
  family: string;
  regions: string[];
  ugelsCount: string;
  speakersPeru: string;
  mineduCode: string;
  sampleGreeting: string;
  sampleMeaning: string;
  oralRequirements: string;
  writtenRequirements: string;
  description: string;
  badgeColor: string;
}

export interface TestimonioDocente {
  id: string;
  name: string;
  specialty: string;
  region: string;
  ugel: string;
  lengua: string;
  levelAchieved: string;
  quote: string;
  avatarInitial: string;
  avatarBg: string;
  year: string;
  statusBadge: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'evaluacion' | 'metodologia' | 'matricula';
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface OpcionSimulador {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface PreguntaSimulador {
  id: number;
  modality: 'oral' | 'escrito';
  language: string;
  levelTarget: 'Básico' | 'Intermedio' | 'Avanzado';
  title: string;
  situationContext: string;
  stimulusText?: string;
  prompt: string;
  options: OpcionSimulador[];
  pedagogicalTip: string;
}

export interface RegistroDocente {
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  email: string;
  region: string;
  ugel: string;
  lenguaInteres: string;
  nivelActualOral: string;
  nivelActualEscrito: string;
  modalidad: 'Sincrónica Virtual' | 'Asincrónica con Tutoría' | 'Intensivo Fines de Semana';
  comentario?: string;
}
