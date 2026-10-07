import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es' | 'en';

export interface LevelItem {
  id: string;
  badge: string;
  title: string;
  duration: string;
  image: string;
  highlights: string[];
  ctaText: string;
  isEdloSpecial?: boolean;
}

export interface TranslationDictionary {
  brand: {
    name: string;
    sub: string;
  };
  topBar: {
    tag: string;
    text: string;
    phone: string;
    schedule: string;
  };
  nav: {
    home: string;
    programs: string;
    edlo: string;
    methodology: string;
    languages: string;
    contact: string;
    enrollBtn: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    mottoPills: string[];
    btnEnroll: string;
    btnLearnMore: string;
    photoBadge1: string;
    photoBadge2: string;
  };
  notice: {
    tag: string;
    title: string;
    text: string;
  };
  programs: {
    badge: string;
    title: string;
    subtitle: string;
    levels: LevelItem[];
  };
  edloSection: {
    badge: string;
    title: string;
    subtitle: string;
    oralTitle: string;
    oralSubtitle: string;
    writtenTitle: string;
    writtenSubtitle: string;
    rubricTag: string;
    rubricText: string;
    btnCta: string;
  };
  methodology: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      num: number;
      name: string;
      tag: string;
    }[];
  };
  languages: {
    badge: string;
    title: string;
    subtitle: string;
    list: {
      id: string;
      code: string;
      name: string;
      family: string;
      regions: string;
      greeting: string;
      greetingTrans: string;
    }[];
  };
  enrollment: {
    badge: string;
    title: string;
    subtitle: string;
    includesTitle: string;
    includes: string[];
    whatsappQuick: string;
    whatsappQuickBtn: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    lastnameLabel: string;
    dniLabel: string;
    phoneLabel: string;
    emailLabel: string;
    programLabel: string;
    languageLabel: string;
    modalityLabel: string;
    messageLabel: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMsg: string;
    confirmBtn: string;
    closeBtn: string;
  };
  footer: {
    about: string;
    programsTitle: string;
    contactTitle: string;
    central: string;
    email: string;
    hours: string;
    disclaimerTitle: string;
    disclaimerText: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  es: {
    brand: {
      name: 'CENTRO DE IDIOMA ORIGINARIO',
      sub: 'Básico • Intermedio • Avanzado • Preparación EDLO'
    },
    topBar: {
      tag: 'CENTRO ESPECIALIZADO',
      text: 'Formación Lingüística por Niveles y Preparación EDLO (MINEDU)',
      phone: '+51 987 654 321',
      schedule: 'Lun - Sáb 8:00am - 8:00pm'
    },
    nav: {
      home: 'Inicio',
      programs: 'Niveles',
      edlo: 'Preparación EDLO',
      methodology: 'Metodología',
      languages: 'Lenguas',
      contact: 'Matrícula',
      enrollBtn: 'Inscribirme'
    },
    hero: {
      badge: 'CENTRO DE IDIOMA ORIGINARIO',
      titleStart: 'Aprende y Domina una',
      titleHighlight: 'Lengua Originaria',
      subtitle: 'Programas estructurados por niveles y preparación especializada para la Evaluación de Dominio (EDLO / MINEDU).',
      mottoPills: ['Aprende', 'Practica', 'Fortalece', 'Prepárate'],
      btnEnroll: 'Ver los 4 Programas',
      btnLearnMore: 'Preparación EDLO',
      photoBadge1: 'Clases Virtuales en Vivo',
      photoBadge2: 'Acreditación MINEDU / RNDBLO'
    },
    notice: {
      tag: 'IMPORTANTE',
      title: 'Transparencia Institucional',
      text: 'La capacitación constituye un proceso formativo y de preparación. La evaluación y acreditación del dominio corresponden al proceso oficial del Ministerio de Educación (MINEDU).'
    },
    programs: {
      badge: 'OFERTA ACADÉMICA',
      title: 'PROGRAMAS Y NIVELES',
      subtitle: 'Elige tu nivel de formación o prepárate para la evaluación oficial EDLO.',
      levels: [
        {
          id: 'basico',
          badge: 'Nivel Inicial',
          title: 'Nivel Básico',
          duration: '3 Meses (120 Horas)',
          image: '/images/level_basic.jpg',
          highlights: [
            'Fonética, pronunciación y alfabeto oficial',
            'Saludos, presentaciones y vocabulario cotidiano',
            'Frases comunicativas de aula y comunidad',
            'Estructuras morfosintácticas elementales'
          ],
          ctaText: 'Elegir Nivel Básico'
        },
        {
          id: 'intermedio',
          badge: 'Nivel Medio',
          title: 'Nivel Intermedio',
          duration: '3 Meses (120 Horas)',
          image: '/images/level_intermediate.jpg',
          highlights: [
            'Conversación fluida y diálogo activo',
            'Tiempos verbales y sufijación compleja',
            'Comprensión auditiva y de lectura',
            'Redacción de párrafos y textos breves'
          ],
          ctaText: 'Elegir Nivel Intermedio'
        },
        {
          id: 'avanzado',
          badge: 'Nivel Superior',
          title: 'Nivel Avanzado',
          duration: '3 Meses (120 Horas)',
          image: '/images/level_advanced.jpg',
          highlights: [
            'Discurso formal, oratoria y sustentación',
            'Ortografía oficial estandarizada y normalizada',
            'Comprensión crítica e inferencial',
            'Redacción académica y literaria'
          ],
          ctaText: 'Elegir Nivel Avanzado'
        },
        {
          id: 'edlo',
          badge: 'Especialización MINEDU',
          title: 'Preparación Especializada EDLO',
          duration: '2 Meses Intensivo (220 Horas)',
          image: '/images/level_edlo.jpg',
          highlights: [
            'Simulacros de Entrevista Oral 1 a 1',
            'Pruebas escritas con rúbricas MINEDU',
            'Corrección ortográfica y sufijos normados',
            'Estrategias para alcanzar Intermedio / Avanzado'
          ],
          ctaText: 'Prepararme para EDLO',
          isEdloSpecial: true
        }
      ]
    },
    edloSection: {
      badge: 'EVALUACIÓN OFICIAL MINEDU',
      title: 'PREPARACIÓN ESPECIALIZADA EDLO',
      subtitle: 'Entrenamiento intensivo para la Evaluación de Dominio de Lengua Originaria y registro en el RNDBLO.',
      oralTitle: 'Fase Oral (Entrevista Individual)',
      oralSubtitle: 'Práctica intensiva 1 a 1 de fluidez, pronunciación y diálogo pedagógico.',
      writtenTitle: 'Fase Escrita (Prueba Normada)',
      writtenSubtitle: 'Comprensión de lectura y redacción con el alfabeto normado oficial.',
      rubricTag: 'Rúbricas Oficiales',
      rubricText: 'Simulacros evaluados con los mismos criterios del Ministerio de Educación.',
      btnCta: 'Inscribirme en Preparación EDLO'
    },
    methodology: {
      badge: 'PROCESO DE APRENDIZAJE',
      title: 'METODOLOGÍA EN 6 PASOS',
      subtitle: 'Ruta práctica y progresiva orientada al dominio de la lengua.',
      steps: [
        { num: 1, name: 'Explicación', tag: 'Pautas y teoría lingüística' },
        { num: 2, name: 'Práctica Oral', tag: 'Diálogo y pronunciación' },
        { num: 3, name: 'Lectura', tag: 'Textos auténticos' },
        { num: 4, name: 'Escritura', tag: 'Ortografía oficial' },
        { num: 5, name: 'Ejercicios', tag: 'Consolidación práctica' },
        { num: 6, name: 'Simulacros', tag: 'Prueba tipo examen' }
      ]
    },
    languages: {
      badge: 'VARIEDADES LINGÜÍSTICAS',
      title: 'LENGUAS ORIGINARIAS ATENDIDAS',
      subtitle: 'Cursos disponibles para las principales lenguas andinas y amazónicas.',
      list: [
        {
          id: 'quechua-chanka',
          code: 'QUE-CH',
          name: 'Quechua Chanka',
          family: 'Familia Quechua II-C',
          regions: 'Ayacucho, Huancavelica, Apurímac',
          greeting: 'Allillanchu yachachiq masiykuna.',
          greetingTrans: '¿Cómo están, estimados colegas docentes?'
        },
        {
          id: 'quechua-cusco',
          code: 'QUE-CC',
          name: 'Quechua Cusco - Collao',
          family: 'Familia Quechua II-C',
          regions: 'Cusco, Puno, Arequipa, Moquegua',
          greeting: 'Allillanchu sumaq yachachiqkuna.',
          greetingTrans: '¿Están bien, apreciados maestros?'
        },
        {
          id: 'quechua-central',
          code: 'QUE-AN',
          name: 'Quechua Áncash / Central',
          family: 'Familia Quechua I',
          regions: 'Áncash, Huánuco, Pasco, Junín',
          greeting: 'Allillaku kaykanki yachatsikuq masiikuna.',
          greetingTrans: '¿Cómo están, compañeros docentes?'
        },
        {
          id: 'aymara',
          code: 'AYM',
          name: 'Aymara',
          family: 'Familia Aru / Jaqi',
          regions: 'Puno, Tacna, Moquegua',
          greeting: 'Kamisaraki yatichiri masinaka.',
          greetingTrans: '¿Cómo están, estimados colegas profesores?'
        },
        {
          id: 'shipibo',
          code: 'SHI-KO',
          name: 'Shipibo-Konibo',
          family: 'Familia Pano',
          regions: 'Ucayali, Loreto, Madre de Dios',
          greeting: 'Jakon bakebo jaskara axonra mato axetawe.',
          greetingTrans: 'Estimados maestros, aprendamos juntos con alegría.'
        },
        {
          id: 'ashaninka',
          code: 'ASH',
          name: 'Ashaninka',
          family: 'Familia Arawak',
          regions: 'Junín, Pasco, Ucayali, Cusco, Ayacucho',
          greeting: 'Kitaiteribake iyotaantsi apaiteriri.',
          greetingTrans: 'Buenos días, colegas maestros, trabajemos juntos.'
        },
        {
          id: 'awajun',
          code: 'AWJ',
          name: 'Awajún',
          family: 'Familia Jíbaro',
          regions: 'Amazonas, San Martín, Loreto, Cajamarca',
          greeting: 'Puma jintinkatbau aidau, dekatai.',
          greetingTrans: 'Saludos educadores, aprendamos nuestra lengua.'
        }
      ]
    },
    enrollment: {
      badge: 'RESERVA TU VACANTE',
      title: 'MATRÍCULA E INFORMES',
      subtitle: 'Elige tu nivel o preparación EDLO y asegura tu vacante para este ciclo.',
      includesTitle: 'Beneficios incluidos en tu matrícula:',
      includes: [
        'Acceso a plataforma virtual 24/7 con clases grabadas',
        'Sesiones de práctica oral y conversación en vivo',
        'Material pedagógico y cuadernillos de ejercicios descargables',
        'Simulacros tipo EDLO con rúbricas MINEDU (según programa)',
        'Certificación Institucional de hasta 220 horas pedagógicas'
      ],
      whatsappQuick: 'Atención Directa por WhatsApp:',
      whatsappQuickBtn: 'Consultar por WhatsApp (+51 987 654 321)',
      formTitle: 'Formulario Rápido de Matrícula',
      formSub: 'Te enviaremos los costos, horarios y temario oficial de inmediato.',
      nameLabel: 'Nombres',
      lastnameLabel: 'Apellidos',
      dniLabel: 'DNI / Documento',
      phoneLabel: 'Celular / WhatsApp',
      emailLabel: 'Correo Electrónico',
      programLabel: 'Programa o Nivel',
      languageLabel: 'Lengua Originaria',
      modalityLabel: 'Modalidad de Estudio',
      messageLabel: 'Consultas Adicionales (Opcional)',
      submitBtn: 'Enviar Solicitud de Vacante',
      submitting: 'Enviando...',
      successTitle: '¡Solicitud Recibida!',
      successMsg: 'Hemos registrado tu información correctamente. Un asesor se comunicará contigo de inmediato.',
      confirmBtn: 'Confirmar Vacante por WhatsApp',
      closeBtn: 'Cerrar'
    },
    footer: {
      about: 'Centro de Idioma Originario - Especialistas en la enseñanza de lenguas originarias y preparación para la Evaluación EDLO.',
      programsTitle: 'Nuestros Programas',
      contactTitle: 'Contacto Directo',
      central: 'Teléfono / WhatsApp:',
      email: 'Correo de Informes:',
      hours: 'Horario: Lun a Sáb 8:00 am - 8:00 pm',
      disclaimerTitle: 'Descargo Institucional:',
      disclaimerText: 'La capacitación constituye un proceso formativo. La evaluación y acreditación del dominio corresponden al proceso establecido por el MINEDU.',
      rights: 'Centro de Idioma Originario. Todos los derechos reservados.'
    }
  },
  en: {
    brand: {
      name: 'INDIGENOUS LANGUAGE CENTER',
      sub: 'Basic • Intermediate • Advanced • EDLO Exam Prep'
    },
    topBar: {
      tag: 'SPECIALIZED CENTER',
      text: 'Language Training by Levels and Official EDLO Preparation (MINEDU)',
      phone: '+51 987 654 321',
      schedule: 'Mon - Sat 8:00am - 8:00pm'
    },
    nav: {
      home: 'Home',
      programs: 'Levels',
      edlo: 'EDLO Prep',
      methodology: 'Methodology',
      languages: 'Languages',
      contact: 'Enrollment',
      enrollBtn: 'Enroll Now'
    },
    hero: {
      badge: 'INDIGENOUS LANGUAGE CENTER',
      titleStart: 'Learn and Master an',
      titleHighlight: 'Indigenous Language',
      subtitle: 'Structured programs by levels and specialized preparation for the Official Language Assessment (EDLO / MINEDU).',
      mottoPills: ['Learn', 'Practice', 'Strengthen', 'Prepare'],
      btnEnroll: 'View the 4 Programs',
      btnLearnMore: 'EDLO Preparation',
      photoBadge1: 'Live Virtual Classes',
      photoBadge2: 'MINEDU / RNDBLO Accreditation'
    },
    notice: {
      tag: 'IMPORTANT',
      title: 'Institutional Transparency',
      text: 'Our training provides pedagogical preparation. The official evaluation and certification of language proficiency are solely managed by the Ministry of Education (MINEDU).'
    },
    programs: {
      badge: 'ACADEMIC PROGRAMS',
      title: 'PROGRAMS & LEVELS',
      subtitle: 'Choose your learning level or prepare for the official EDLO assessment.',
      levels: [
        {
          id: 'basico',
          badge: 'Introductory Level',
          title: 'Basic Level',
          duration: '3 Months (120 Hours)',
          image: '/images/level_basic.jpg',
          highlights: [
            'Phonetics, pronunciation, and official alphabet',
            'Greetings, introductions, and daily vocabulary',
            'Classroom and community communicative phrases',
            'Essential morphosyntactic structures'
          ],
          ctaText: 'Choose Basic Level'
        },
        {
          id: 'intermedio',
          badge: 'Intermediate Level',
          title: 'Intermediate Level',
          duration: '3 Months (120 Hours)',
          image: '/images/level_intermediate.jpg',
          highlights: [
            'Active conversation and speaking fluency',
            'Verb tenses and complex suffixation',
            'Listening and reading comprehension',
            'Composition of cohesive paragraphs and short texts'
          ],
          ctaText: 'Choose Intermediate Level'
        },
        {
          id: 'avanzado',
          badge: 'Advanced Level',
          title: 'Advanced Level',
          duration: '3 Months (120 Hours)',
          image: '/images/level_advanced.jpg',
          highlights: [
            'Formal speech, presentation, and public speaking',
            'Official standardized orthography and spelling',
            'Critical and inferential text analysis',
            'Academic and literary writing production'
          ],
          ctaText: 'Choose Advanced Level'
        },
        {
          id: 'edlo',
          badge: 'MINEDU Specialized Track',
          title: 'Specialized EDLO Preparation',
          duration: '2 Months Intensive (220 Hours)',
          image: '/images/level_edlo.jpg',
          highlights: [
            '1-on-1 Oral Interview Simulations',
            'Written mock exams with official MINEDU rubrics',
            'Official spelling correction and suffix mastery',
            'Proven strategies to achieve Intermediate / Advanced rank'
          ],
          ctaText: 'Prepare for EDLO',
          isEdloSpecial: true
        }
      ]
    },
    edloSection: {
      badge: 'OFFICIAL MINEDU PROCESS',
      title: 'SPECIALIZED EDLO PREPARATION',
      subtitle: 'Intensive training for the Indigenous Language Proficiency Assessment and RNDBLO registry.',
      oralTitle: 'Oral Phase (Individual Interview)',
      oralSubtitle: 'Intensive 1-on-1 coaching for fluency, pronunciation, and classroom dialogue.',
      writtenTitle: 'Written Phase (Standardized Exam)',
      writtenSubtitle: 'Reading comprehension and composition applying the official alphabet.',
      rubricTag: 'Official Rubrics',
      rubricText: 'Mock exams evaluated with the exact criteria of the Ministry of Education.',
      btnCta: 'Enroll in EDLO Preparation'
    },
    methodology: {
      badge: 'LEARNING PROCESS',
      title: '6-STEP METHODOLOGY',
      subtitle: 'A practical, progressive pathway designed for real language mastery.',
      steps: [
        { num: 1, name: 'Explanation', tag: 'Linguistic rules & theory' },
        { num: 2, name: 'Oral Practice', tag: 'Dialogue & pronunciation' },
        { num: 3, name: 'Reading', tag: 'Authentic cultural texts' },
        { num: 4, name: 'Writing', tag: 'Official orthography' },
        { num: 5, name: 'Exercises', tag: 'Practical reinforcement' },
        { num: 6, name: 'Simulations', tag: 'Mock exam conditions' }
      ]
    },
    languages: {
      badge: 'LINGUISTIC VARIETIES',
      title: 'LANGUAGES OFFERED',
      subtitle: 'Courses available for major Andean and Amazonian languages.',
      list: [
        {
          id: 'quechua-chanka',
          code: 'QUE-CH',
          name: 'Quechua Chanka',
          family: 'Quechua II-C Family',
          regions: 'Ayacucho, Huancavelica, Apurímac',
          greeting: 'Allillanchu yachachiq masiykuna.',
          greetingTrans: 'How are you, dear teacher colleagues?'
        },
        {
          id: 'quechua-cusco',
          code: 'QUE-CC',
          name: 'Quechua Cusco - Collao',
          family: 'Quechua II-C Family',
          regions: 'Cusco, Puno, Arequipa, Moquegua',
          greeting: 'Allillanchu sumaq yachachiqkuna.',
          greetingTrans: 'Are you doing well, esteemed educators?'
        },
        {
          id: 'quechua-central',
          code: 'QUE-AN',
          name: 'Quechua Áncash / Central',
          family: 'Quechua I Family',
          regions: 'Áncash, Huánuco, Pasco, Junín',
          greeting: 'Allillaku kaykanki yachatsikuq masiikuna.',
          greetingTrans: 'How are you, fellow teachers?'
        },
        {
          id: 'aymara',
          code: 'AYM',
          name: 'Aymara',
          family: 'Aru / Jaqi Family',
          regions: 'Puno, Tacna, Moquegua',
          greeting: 'Kamisaraki yatichiri masinaka.',
          greetingTrans: 'How are you, dear teacher colleagues?'
        },
        {
          id: 'shipibo',
          code: 'SHI-KO',
          name: 'Shipibo-Konibo',
          family: 'Pano Family',
          regions: 'Ucayali, Loreto, Madre de Dios',
          greeting: 'Jakon bakebo jaskara axonra mato axetawe.',
          greetingTrans: 'Dear teachers, let us learn together with joy.'
        },
        {
          id: 'ashaninka',
          code: 'ASH',
          name: 'Ashaninka',
          family: 'Arawak Family',
          regions: 'Junín, Pasco, Ucayali, Cusco, Ayacucho',
          greeting: 'Kitaiteribake iyotaantsi apaiteriri.',
          greetingTrans: 'Good morning, fellow teachers, let us work together.'
        },
        {
          id: 'awajun',
          code: 'AWJ',
          name: 'Awajún',
          family: 'Jíbaro Family',
          regions: 'Amazonas, San Martín, Loreto, Cajamarca',
          greeting: 'Puma jintinkatbau aidau, dekatai.',
          greetingTrans: 'Greetings educators, let us learn our language.'
        }
      ]
    },
    enrollment: {
      badge: 'SECURE YOUR SPOT',
      title: 'ENROLLMENT & INQUIRIES',
      subtitle: 'Select your level or EDLO track and reserve your spot today.',
      includesTitle: 'Benefits included in your enrollment:',
      includes: [
        '24/7 access to our virtual classroom with HD recorded sessions',
        'Live 1-on-1 oral practice and conversation coaching',
        'Downloadable pedagogical books, guides, and exercise sheets',
        'EDLO mock exams with official MINEDU grading rubrics',
        'Institutional Certificate for up to 220 pedagogical hours'
      ],
      whatsappQuick: 'Direct Assistance via WhatsApp:',
      whatsappQuickBtn: 'Chat on WhatsApp (+51 987 654 321)',
      formTitle: 'Fast Enrollment Form',
      formSub: 'We will send you pricing, schedules, and the syllabus immediately.',
      nameLabel: 'First Name',
      lastnameLabel: 'Last Name',
      dniLabel: 'ID / National Document',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email Address',
      programLabel: 'Program or Level',
      languageLabel: 'Indigenous Language',
      modalityLabel: 'Study Modality',
      messageLabel: 'Additional Inquiries (Optional)',
      submitBtn: 'Submit Application',
      submitting: 'Submitting...',
      successTitle: 'Application Received!',
      successMsg: 'We have recorded your details. An academic advisor will reach out to you immediately.',
      confirmBtn: 'Confirm via WhatsApp',
      closeBtn: 'Close'
    },
    footer: {
      about: 'Indigenous Language Center - Specialists in indigenous language education and EDLO assessment preparation.',
      programsTitle: 'Our Programs',
      contactTitle: 'Direct Contact',
      central: 'Phone / WhatsApp:',
      email: 'Inquiries Email:',
      hours: 'Hours: Mon to Sat 8:00 am - 8:00 pm',
      disclaimerTitle: 'Institutional Disclaimer:',
      disclaimerText: 'Our training constitutes an educational preparation process. Evaluation and accreditation are managed by MINEDU.',
      rights: 'Indigenous Language Center. All rights reserved.'
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Language>('es');
  t = computed(() => TRANSLATIONS[this.currentLang()]);

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    document.documentElement.lang = lang;
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'es' ? 'en' : 'es');
  }
}
