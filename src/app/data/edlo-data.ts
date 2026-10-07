import { Competencia, EtapaMetodologia, LenguaOriginaria, TestimonioDocente, FaqItem, PreguntaSimulador } from '../models/edlo.model';

export const COMPETENCIAS_DATA: Competencia[] = [
  {
    id: 'comunicacion-oral',
    number: '01',
    title: 'Comunicación Oral en Lengua Originaria',
    shortDesc: 'Fluidez, pronunciación y coherencia en situaciones comunicativas reales dentro y fuera del aula.',
    fullDesc: 'Desarrollo de habilidades de expresión oral según las normas socioculturales de la lengua. Se entrena la soltura discursiva, el uso de conectores propios de la variedad lingüística, la entonación y la capacidad de sostener diálogos pedagógicos y comunitarios fluidos.',
    focusArea: 'Oral',
    topics: [
      'Presentación personal y descripción de contextos comunitarios',
      'Desarrollo de secuencias didácticas y sesiones de aprendizaje orales',
      'Argumentación y resolución de situaciones problemáticas en aula',
      'Manejo de registros formales y cotidianos según el interlocutor'
    ],
    evaluationCriteria: 'Evalúa fluidez, riqueza léxica, coherencia discursiva y precisión fonética en la entrevista oral EDLO.',
    iconName: 'mic'
  },
  {
    id: 'comprension-oral',
    number: '02',
    title: 'Comprensión Oral',
    shortDesc: 'Decodificación e interpretación profunda de relatos, instrucciones pedagógicas y diálogos orales.',
    fullDesc: 'Entrenamiento sistemático con muestras de audio auténticas de hablantes nativos, discursos pedagógicos y narraciones tradicionales. Identificación de ideas principales, detalles implícitos, intencionalidad del hablante y deducción de significados en contexto.',
    focusArea: 'Oral',
    topics: [
      'Escucha activa de textos narrativos, explicativos y descriptivos',
      'Identificación de ideas centrales e inferencias contextuales',
      'Comprensión de instrucciones complejas en situaciones de evaluación',
      'Diferenciación de matices dialectales y variaciones regionales'
    ],
    evaluationCriteria: 'Mide la capacidad de responder asertivamente a preguntas directas e inferenciales tras escuchar estímulos auditivos.',
    iconName: 'headphones'
  },
  {
    id: 'comprension-textos',
    number: '03',
    title: 'Comprensión de Textos Escritos',
    shortDesc: 'Lectura analítica, crítica e inferencial de textos pedagógicos y culturales en la lengua meta.',
    fullDesc: 'Estrategias de lectura aplicadas a la tipología textual normada por el MINEDU: textos informativos, cuentos tradicionales, guías metodológicas y normativas curriculares. Desarrollo de los tres niveles de comprensión: literal, inferencial y reflexivo-crítico.',
    focusArea: 'Escrito',
    topics: [
      'Lectura de textos pedagógicos y culturales normalizados',
      'Extracción de información explícita y deducción de causas/efectos',
      'Reflexión sobre el contenido, la forma y la intención comunicativa',
      'Análisis de preguntas tipo prueba estandarizada EDLO'
    ],
    evaluationCriteria: 'Evalúa la resolución de reactivos de lectura con rúbricas de corrección oficiales de la prueba escrita.',
    iconName: 'book-open'
  },
  {
    id: 'produccion-escrita',
    number: '04',
    title: 'Producción Escrita',
    shortDesc: 'Redacción de textos con ortografía estandarizada, cohesión, coherencia y adecuación textual.',
    fullDesc: 'Taller intensivo de escritura aplicando el alfabeto oficial normado y las reglas de ortografía y puntuación aprobadas por el MINEDU. Redacción de cartas, planificaciones curriculares, relatos y ensayos breves con propiedad morfosintáctica.',
    focusArea: 'Escrito',
    topics: [
      'Aplicación del alfabeto y normas ortográficas oficiales vigentes',
      'Uso de sufijos de concordancia, evidencialidad y caso',
      'Estructuración de párrafos y uso de conectores textuales originarios',
      'Redacción de textos pedagógicos orientados a la práctica docente'
    ],
    evaluationCriteria: 'Califica la adecuación al tema, coherencia discursiva, cohesión gramatical y corrección ortográfica oficial.',
    iconName: 'edit-3'
  },
  {
    id: 'vocabulario-estructuras',
    number: '05',
    title: 'Vocabulario y Estructuras de la Lengua',
    shortDesc: 'Dominio de la morfología aglutinante, sufijación y vocabulario pedagógico e institucional.',
    fullDesc: 'Estudio funcional de las raíces léxicas, mecanismos de derivación y flexión verbal, sufijos nominales y morfología propia de cada familia lingüística. Enriquecimiento del léxico con terminología curricular y pedagógica contemporánea.',
    focusArea: 'Integral',
    topics: [
      'Léxico pedagógico, disciplinar y de saberes locales / comunitarios',
      'Mecanismos de sufijación, derivación y flexión gramatical',
      'Sistemas de evidenciales, posesivos y marcas de persona',
      'Neologismos y préstamos lingüísticos normados en la educación intercultural'
    ],
    evaluationCriteria: 'Asegura precisión en el uso de estructuras gramaticales complejas requeridas para niveles Intermedio y Avanzado.',
    iconName: 'layers'
  },
  {
    id: 'preparacion-evaluacion',
    number: '06',
    title: 'Práctica y Preparación para Situaciones de Evaluación',
    shortDesc: 'Simulacros reales con rúbricas oficiales MINEDU, gestión del tiempo y superación de la ansiedad evaluativa.',
    fullDesc: 'Simulaciones intensivas tanto de la fase oral (entrevista individual con evaluador bilingüe) como de la fase escrita. Retroalimentación personalizada por formadores expertos con sugerencias directas para alcanzar el nivel Avanzado o Intermedio en el RNDBLO.',
    focusArea: 'Integral',
    topics: [
      'Simulacros de entrevista oral individualizada con rúbrica MINEDU',
      'Resolución cronometrada de cuadernillos de prueba escrita',
      'Análisis de rúbricas de calificación y niveles de logro (Básico, Intermedio, Avanzado)',
      'Estrategias de argumentación rápida y seguridad comunicativa'
    ],
    evaluationCriteria: 'Proporciona reportes diagnósticos individuales de desempeño previo a la postulación oficial.',
    iconName: 'award'
  }
];

export const METODOLOGIA_STEPS: EtapaMetodologia[] = [
  {
    stepNumber: 1,
    name: 'Explicación',
    tagline: 'Fundamentación teórica y pautas lingüísticas',
    description: 'El docente formador expone de manera clara las estructuras gramaticales, normas sociolingüísticas y reglas ortográficas oficiales. Se analizan ejemplos auténticos y los criterios clave de evaluación.',
    activities: [
      'Presentación de patrones gramaticales y reglas del alfabeto oficial',
      'Análisis de modelos discursivos y situaciones contextualizadas',
      'Revisión de rúbricas oficiales y pautas de puntuación'
    ],
    keyTools: ['Guías metodológicas descargables', 'Pizarras interactivas', 'Cuadros de sufijación'],
    deliverable: 'Comprensión conceptual de las reglas y estructura de la sesión.',
    iconName: 'presentation'
  },
  {
    stepNumber: 2,
    name: 'Práctica Oral',
    tagline: 'Interacción guiada, fluidez y pronunciación',
    description: 'Espacios dinámicos de diálogo guiado entre docentes y con el formador bilingüe. Se entrenan respuestas espontáneas, narración de hechos cotidianos y descripciones pedagógicas.',
    activities: [
      'Dinámicas de pares y grupos reducidos para conversación activa',
      'Juegos de rol en escenarios de aula y comunidad',
      'Corrección fonética y modelado en tiempo real por el formador'
    ],
    keyTools: ['Salas de práctica oral', 'Grabaciones diagnósticas', 'Banco de preguntas orales'],
    deliverable: 'Mayor soltura, precisión tonal y eliminación del bloqueo al hablar.',
    iconName: 'users'
  },
  {
    stepNumber: 3,
    name: 'Lectura',
    tagline: 'Análisis de textos auténticos y pedagógicos',
    description: 'Lectura comprensiva de textos en la lengua meta normalizada. Se trabajan técnicas de escaneo, inferencia de vocabulario desconocido y análisis crítico de la intencionalidad del autor.',
    activities: [
      'Lectura guiada de textos narrativos, descriptivos y curriculares',
      'Identificación de conectores lógicos y marcas textuales',
      'Preguntas de nivel literal, inferencial y de juicio crítico'
    ],
    keyTools: ['Textos auténticos digitalizados', 'Glosarios interactivos', 'Fichas de comprensión'],
    deliverable: 'Capacidad de responder reactivos de comprensión con alta precisión.',
    iconName: 'file-text'
  },
  {
    stepNumber: 4,
    name: 'Escritura',
    tagline: 'Producción textual con normativa oficial',
    description: 'Taller de producción guiada donde el docente redacta textos con coherencia, cohesión y correcta ortografía oficial. Se corrigen errores comunes de hipercorrección o interferencia del castellano.',
    activities: [
      'Redacción de secuencias didácticas y mensajes comunitarios',
      'Aplicación rigurosa de sufijos gramaticales correspondientes',
      'Técnicas de revisión y autoedición de borradores'
    ],
    keyTools: ['Plantillas de redacción', 'Manual ortográfico oficial', 'Ejercicios de micro-redacción'],
    deliverable: 'Textos coherentes, sin errores de puntuación ni desajustes sufijales.',
    iconName: 'edit'
  },
  {
    stepNumber: 5,
    name: 'Ejercicios',
    tagline: 'Consolidación práctica y afianzamiento',
    description: 'Resolución de baterías de reactivos de opción múltiple, completamiento de oraciones, emparejamiento conceptual y discriminación gramatical para fijar el aprendizaje.',
    activities: [
      'Banco de más de 400 ejercicios interactivos autocalificados',
      'Ejercicios de transformación y análisis sintáctico',
      'Reforzamiento focalizado en áreas de mayor dificultad'
    ],
    keyTools: ['Plataforma de ejercicios 24/7', 'Solucionarios explicados', 'Estadísticas de acierto'],
    deliverable: 'Dominio automatizado de las estructuras frecuentes en la evaluación.',
    iconName: 'check-square'
  },
  {
    stepNumber: 6,
    name: 'Simulacros',
    tagline: 'Entrenamiento en condiciones reales de examen',
    description: 'Evaluaciones integrales con límite de tiempo idéntico al proceso EDLO real. Incluye entrevista oral 1 a 1 y prueba escrita con rúbricas MINEDU y entrega de informe de nivel proyectado.',
    activities: [
      'Entrevista oral individual con evaluador especialista',
      'Prueba escrita cronometrada con control de tiempo',
      'Devolución de resultados con desglose de fortalezas y mejoras'
    ],
    keyTools: ['Cuadernillos tipo EDLO', 'Rúbrica oficial RNDBLO', 'Reporte individual de desempeño'],
    deliverable: 'Reporte de diagnóstico final y nivel proyectado (Básico, Intermedio o Avanzado).',
    iconName: 'trophy'
  }
];

export const LENGUAS_ORIGINARIAS_DATA: LenguaOriginaria[] = [
  {
    id: 'quechua-chanka',
    name: 'Quechua Chanka',
    variety: 'Variedad Ayacucho - Chanca (Quechua II-C)',
    family: 'Familia Lingüística Quechua',
    regions: ['Ayacucho', 'Huancavelica', 'Apurímac', 'Ica (zonas altas)'],
    ugelsCount: '28 UGELs con plazas EIB',
    speakersPeru: '+1,000,000 hablantes',
    mineduCode: 'QUE-CH',
    sampleGreeting: 'Allillanchu yachachiq masiykuna, kusisqam qamkunawan kani.',
    sampleMeaning: '¿Cómo están, colegas docentes? Estoy muy contento de estar con ustedes.',
    oralRequirements: 'Fluidez narrativa, uso de sufijos de evidencialidad (-mi, -si) y partículas de cortesía.',
    writtenRequirements: 'Escritura trivocálica oficial (a, i, u), normas de sufijación y concordancia verbal.',
    description: 'Una de las variedades más demandadas en el sur-centro andino, fundamental para plazas EIB en Ayacucho, Apurímac y Huancavelica.',
    badgeColor: '#c2410c'
  },
  {
    id: 'quechua-cusco-collao',
    name: 'Quechua Cusco - Collao',
    variety: 'Variedad Cusco - Puno - Collao (Quechua II-C)',
    family: 'Familia Lingüística Quechua',
    regions: ['Cusco', 'Puno', 'Arequipa', 'Moquegua', 'Madre de Dios'],
    ugelsCount: '34 UGELs con plazas EIB',
    speakersPeru: '+1,500,000 hablantes',
    mineduCode: 'QUE-CC',
    sampleGreeting: 'Allillanchu sumaq yachachiqkuna, llapanchis kuskachasqa yachasunchis.',
    sampleMeaning: '¿Están bien, estimados docentes? Todos juntos aprenderemos.',
    oralRequirements: 'Dominio de consonantes oclusivas simples, aspiradas (ph, th, kh, ch, qh) y glotalizadas (p\', t\', k\', ch\', q\').',
    writtenRequirements: 'Alfabeto oficial trivocálico con sistema pentavocálico histórico contextualizado y morfología verbal.',
    description: 'Variedad con presencia en el sur del país, caracterizada por su riqueza fonológica con oclusivas aspiradas y glotalizadas.',
    badgeColor: '#b45309'
  },
  {
    id: 'quechua-central',
    name: 'Quechua Áncash / Central',
    variety: 'Quechua Huaylas - Conchucos (Quechua I)',
    family: 'Familia Lingüística Quechua',
    regions: ['Áncash', 'Huánuco', 'Pasco', 'Junín', 'Lima Provincias'],
    ugelsCount: '22 UGELs con plazas EIB',
    speakersPeru: '+600,000 hablantes',
    mineduCode: 'QUE-AN',
    sampleGreeting: 'Allillaku kaykanki yachatsikuq masiikuna, shamuy yachakushun.',
    sampleMeaning: '¿Cómo están, compañeros docentes? Vengan, aprendamos juntos.',
    oralRequirements: 'Manejo del alargamiento vocálico fonémico (marcado con diéresis o vocal doble) y sufijo reflexivo.',
    writtenRequirements: 'Alfabeto normado para Quechua Central según R.M. MINEDU, distinción de alargamiento vocálico.',
    description: 'Esencial para docentes de la sierra central y norte de Lima, con una estructura morfológica fascinante y particular.',
    badgeColor: '#047857'
  },
  {
    id: 'aymara',
    name: 'Aymara',
    variety: 'Aymara Central y Sureño',
    family: 'Familia Lingüística Aru / Jaqi',
    regions: ['Puno', 'Tacna', 'Moquegua', 'Arequipa'],
    ugelsCount: '19 UGELs con plazas EIB',
    speakersPeru: '+450,000 hablantes',
    mineduCode: 'AYM',
    sampleGreeting: 'Kamisaraki yatichiri masinaka, wali kusisitaw jumanakampi jikist\'xta.',
    sampleMeaning: '¿Cómo están, colegas docentes? Estoy muy contento de encontrarme con ustedes.',
    oralRequirements: 'Distinción fonética de consonantes simples, aspiradas y glotalizadas, y elisión vocálica sintáctica.',
    writtenRequirements: 'Alfabeto oficial de 30 grafías, reglas estrictas de elisión vocálica y sufijos oracionales.',
    description: 'Lengua del altiplano con amplia trayectoria pedagógica y gran cantidad de instituciones educativas EIB en el sur.',
    badgeColor: '#1d4ed8'
  },
  {
    id: 'shipibo-konibo',
    name: 'Shipibo-Konibo',
    variety: 'Shipibo-Konibo Amazónico',
    family: 'Familia Lingüística Pano',
    regions: ['Ucayali', 'Loreto', 'Madre de Dios', 'Huánuco'],
    ugelsCount: '12 UGELs con plazas EIB',
    speakersPeru: '+35,000 hablantes',
    mineduCode: 'SHI-KO',
    sampleGreeting: 'Jakon bakebo jaskara axonra mato axetawe jaweki jakonbo.',
    sampleMeaning: 'Estimados docentes, aprendamos juntos todo lo bueno y valioso.',
    oralRequirements: 'Entonación amazónica, fluidez en relatos tradicionales y lenguaje respetuoso de la naturaleza.',
    writtenRequirements: 'Alfabeto oficial Shipibo-Konibo aprobado por el MINEDU y estructura de sufijación aglutinante.',
    description: 'Una de las lenguas originarias amazónicas con mayor producción literaria y presencia en centros educativos de la selva central.',
    badgeColor: '#059669'
  },
  {
    id: 'ashaninka',
    name: 'Ashaninka',
    variety: 'Ashaninka Selva Central y VRAEM',
    family: 'Familia Lingüística Arawak',
    regions: ['Junín (Satipo)', 'Pasco (Oxapampa)', 'Ucayali', 'Cusco (La Convención)', 'Ayacucho'],
    ugelsCount: '14 UGELs con plazas EIB',
    speakersPeru: '+70,000 hablantes',
    mineduCode: 'ASH',
    sampleGreeting: 'Kitaiteribake iyotaantsi apaiteriri, arisanori akantapairi.',
    sampleMeaning: 'Buenos días, colegas maestros, trabajemos con dedicación y alegría.',
    oralRequirements: 'Pronunciación de prefijos pronominales de concordancia y entonación comunitaria ashaninka.',
    writtenRequirements: 'Normas del alfabeto Ashaninka oficial, morfología verbal compleja y prefijos clasificadores.',
    description: 'La lengua indígena amazónica más hablada en el Perú, con alta demanda en escuelas bilingües de la selva central y cuenca del VRAEM.',
    badgeColor: '#7c3aed'
  },
  {
    id: 'awajun',
    name: 'Awajún',
    variety: 'Awajún Nororiental',
    family: 'Familia Lingüística Jíbaro / Chicham',
    regions: ['Amazonas', 'San Martín', 'Loreto', 'Cajamarca'],
    ugelsCount: '11 UGELs con plazas EIB',
    speakersPeru: '+55,000 hablantes',
    mineduCode: 'AWJ',
    sampleGreeting: 'Puma jintinkatbau aidau, dekatai iina chichame etsegbaunum.',
    sampleMeaning: 'Saludos maestros educadores, conozcamos la fuerza de nuestra lengua.',
    oralRequirements: 'Morfofonología de elisión de vocales y consonantes nasales según el contexto oracional.',
    writtenRequirements: 'Escritura normalizada de acuerdo al manual oficial de ortografía del pueblo Awajún.',
    description: 'Fundamental en la zona nororiental amazónica del país (ríos Marañón, Cenepa, Nieva y Mayo).',
    badgeColor: '#be185d'
  }
];

export const PREGUNTAS_SIMULADOR_DATA: PreguntaSimulador[] = [
  {
    id: 1,
    modality: 'oral',
    language: 'Quechua Chanka',
    levelTarget: 'Intermedio',
    title: 'Situación Oral 1: Diálogo Pedagógico en la Comunidad',
    situationContext: 'En la entrevista oral de la EDLO, el evaluador te plantea la siguiente situación: "Yachachiq, rimaripuy imaynatam warmakunawan kawsaykuna yachayta wasipi ruranki" (Profesor, explique cómo trabaja los saberes de la comunidad en la escuela con sus estudiantes).',
    prompt: '¿Cuál de las siguientes respuestas demuestra un nivel discursivo Intermedio/Avanzado con conectores adecuados y sufijos evidenciales correctos?',
    options: [
      {
        id: 'A',
        text: 'Ñoqa warmakunawan yachaykuna rurani. Tayta mamakunawan rimani. Chaymi allin.',
        isCorrect: false,
        feedback: 'Nivel Básico: Oraciones muy cortas, yuxtapuestas y sin conectores ni sufijos de desarrollo discursivo complejo.'
      },
      {
        id: 'B',
        text: 'Ñoqam warmakunawan kuska chakra llamk\'ayta qhawarispa yachachini; chaymantapas tayta mamakunatam tapukuni kawsaykunamanta, chaynapi yachayninchik mana chinkananpaq.',
        isCorrect: true,
        feedback: '¡Excelente! Nivel Intermedio/Avanzado: Emplea gerundio (-spa), conectores discursivos (chaymantapas, chaynapi) y sufijo de finalidad (-paq) con alta coherencia.'
      },
      {
        id: 'C',
        text: 'Warmakuna kusi kusi pukllanku yachaywasipi. Mana imapas kanchu.',
        isCorrect: false,
        feedback: 'No responde adecuadamente a la situación pedagógica solicitada por el evaluador.'
      }
    ],
    pedagogicalTip: 'En la evaluación oral EDLO, el evaluador busca que uses oraciones complejas con conectores subordinantes y sufijos de finalidad, causa o consecuencia.'
  },
  {
    id: 2,
    modality: 'escrito',
    language: 'Quechua General / Normativa',
    levelTarget: 'Avanzado',
    title: 'Situación Escrita 2: Ortografía Oficial y Sufijación',
    situationContext: 'Un docente debe redactar una comunicación para los padres de familia indicando que "Todos los profesores nos reuniremos el viernes para planificar el festival de saberes ancestrales".',
    prompt: 'Según el alfabeto oficial trivocálico y las reglas de sufijación del MINEDU, ¿cuál es la escritura normada correcta?',
    options: [
      {
        id: 'A',
        text: 'Llapanchik yachachiqkuna viernes punchawpi huñunakusun ñawpaq kawsaykunamanta ruranapaq.',
        isCorrect: true,
        feedback: '¡Correcto! Uso correcto de vocales normadas (u/i en lugar de o/e no normadas), sufijo de futuro inclusivo (-sun) y sufijo de propósito (-napaq).'
      },
      {
        id: 'B',
        text: 'Llapanchis yachachegkuna vernes punchaupi hoñonakuson nawpag kausaykunamanta.',
        isCorrect: false,
        feedback: 'Incorrecto: Presenta grafías no normadas (e, o, g, au) que contravienen el alfabeto oficial estandarizado por el MINEDU.'
      },
      {
        id: 'C',
        text: 'Llapayku yachatsikoq masi vierneschaw juntakasha kawaypita ruranapaaq.',
        isCorrect: false,
        feedback: 'Inconsistente: Mezcla morfemas de distintas familias lingüísticas sin mantener el estándar de la variedad evaluada.'
      }
    ],
    pedagogicalTip: 'El MINEDU sanciona severamente en la prueba escrita el uso de pentavocalismo en quechuas trivocálicos (como escribir "hoñonakuy" en vez de "huñunakuy").'
  },
  {
    id: 3,
    modality: 'oral',
    language: 'Aymara',
    levelTarget: 'Intermedio',
    title: 'Situación Oral 3: Justificación de una Sesión de Aprendizaje',
    situationContext: 'El evaluador te pregunta en lengua Aymara: "¿Kunjamatsa yatiqañ utana aymar aru yatichäw luräta?" (¿Cómo desarrollarás la enseñanza de la lengua aymara en la institución educativa?).',
    prompt: 'Selecciona la respuesta que evidencia dominio de los sufijos de elisión vocálica y concordancia modal en Aymara:',
    options: [
      {
        id: 'A',
        text: 'Nayax aymara parlta, jupanakax aymara yatiqapxi. Ukhamakiw.',
        isCorrect: false,
        feedback: 'Nivel Básico: Oraciones muy elementales con escaso desarrollo argumentativo.'
      },
      {
        id: 'B',
        text: 'Nayax wawanakampix sarnaqäwinak sarayasa aymar arut aruskipäw lurapxä, ukatx tayka tatampi parlkasaw suma yatxatawinak apsü.',
        isCorrect: true,
        feedback: '¡Excelente! Uso correcto de elisiones vocálicas condicionadas, sufijos de gerundio (-sa) y sufijo continuativo (-kasa).'
      },
      {
        id: 'C',
        text: 'Aymara arux wali askiwa, jisa, nayaw yatichä.',
        isCorrect: false,
        feedback: 'Respuesta incompleta que no detalla la metodología pedagógica requerida.'
      }
    ],
    pedagogicalTip: 'En la entrevista de Aymara se valora especialmente la aplicación correcta de la caída o elisión de vocales en frontera de palabra.'
  }
];

export const TESTIMONIOS_DOCENTES_DATA: TestimonioDocente[] = [
  {
    id: 'testimonio-1',
    name: 'Prof. Wilber Mendoza Quispe',
    specialty: 'Docente de Educación Primaria EIB',
    region: 'Ayacucho',
    ugel: 'UGEL Huamanga',
    lengua: 'Quechua Chanka',
    levelAchieved: 'Oral: Avanzado | Escrito: Avanzado',
    quote: 'Llevaba dos procesos quedándome en nivel Básico en la parte escrita por dudas con los sufijos y el alfabeto trivocálico. La metodología paso a paso y los simulacros con retroalimentación me permitieron lograr Avanzado en ambas competencias y adjudicarme una plaza nombrada en EIB.',
    avatarInitial: 'W',
    avatarBg: '#c2410c',
    year: 'Proceso EDLO 2024',
    statusBadge: 'Acreditado en RNDBLO'
  },
  {
    id: 'testimonio-2',
    name: 'Prof. Gladys Condori Mamani',
    specialty: 'Docente de Educación Inicial EIB',
    region: 'Puno',
    ugel: 'UGEL San Román - Juliaca',
    lengua: 'Aymara',
    levelAchieved: 'Oral: Avanzado | Escrito: Intermedio',
    quote: 'La preparación para la entrevista oral me dio la seguridad que necesitaba. Los formadores son hablantes nativos con alto dominio pedagógico que te enseñan cómo estructurar las respuestas según los criterios exactos que pide el MINEDU.',
    avatarInitial: 'G',
    avatarBg: '#1d4ed8',
    year: 'Proceso EDLO 2024',
    statusBadge: 'Acreditado en RNDBLO'
  },
  {
    id: 'testimonio-3',
    name: 'Prof. Edwin Huamán Ttito',
    specialty: 'Docente de Comunicación Secundaria',
    region: 'Cusco',
    ugel: 'UGEL Canchis - Sicuani',
    lengua: 'Quechua Cusco-Collao',
    levelAchieved: 'Oral: Avanzado | Escrito: Avanzado',
    quote: 'El simulador y los ejercicios de escritura con las consonantes aspiradas y glotalizadas fueron decisivos. No hay otra capacitación con este nivel de rigurosidad técnica y respeto por la lengua.',
    avatarInitial: 'E',
    avatarBg: '#047857',
    year: 'Proceso EDLO 2023',
    statusBadge: 'Acreditado en RNDBLO'
  },
  {
    id: 'testimonio-4',
    name: 'Prof. Tania López Mori',
    specialty: 'Docente Primaria Intercultural',
    region: 'Ucayali',
    ugel: 'UGEL Coronel Portillo',
    lengua: 'Shipibo-Konibo',
    levelAchieved: 'Oral: Avanzado | Escrito: Intermedio',
    quote: 'Excelente acompañamiento. Las clases sincrónicas y los materiales descargables me permitieron organizar mis tiempos después de mi jornada escolar en la comunidad.',
    avatarInitial: 'T',
    avatarBg: '#7c3aed',
    year: 'Proceso EDLO 2024',
    statusBadge: 'Acreditado en RNDBLO'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '¿Qué es la Evaluación de Dominio de Lengua Originaria (EDLO) del MINEDU?',
    answer: 'La EDLO es el proceso oficial administrado por la Dirección de Educación Intercultural Bilingüe (DEIB) del Ministerio de Educación del Perú. Permite evaluar las competencias comunicativas orales y escritas de los docentes para incorporarlos o actualizar su nivel en el Registro Nacional de Docentes Bilingües de Lenguas Originarias del Perú (RNDBLO).'
  },
  {
    id: 'faq-2',
    category: 'general',
    question: '¿Esta capacitación otorga el certificado oficial del MINEDU de dominio lingüístico?',
    answer: 'IMPORTANTE: Nuestra institución brinda una capacitación de alta especialización formativa y preparación intensiva. La evaluación oficial y la emisión de la constancia de dominio lingüístico e incorporación al RNDBLO corresponden de manera exclusiva y soberana al Ministerio de Educación (MINEDU) a través de sus cronogramas y comités de evaluación descentralizados.'
  },
  {
    id: 'faq-3',
    category: 'evaluacion',
    question: '¿Qué niveles de dominio se evalúan y cómo influyen en las plazas docentes?',
    answer: 'El MINEDU califica dos competencias independientes: Dominio Oral (Básico, Intermedio, Avanzado) y Dominio Escrito (Básico, Intermedio, Avanzado). De acuerdo al tipo de institución educativa EIB (Fortalecimiento, Revitalización o Ámbitos Urbanos), se exige un nivel mínimo en ambas competencias para postular a contratos, nombramientos, reasignaciones y bonificaciones por ruralidad y bilingüismo.'
  },
  {
    id: 'faq-4',
    category: 'metodologia',
    question: '¿Cómo son los simulacros de entrevista oral y prueba escrita?',
    answer: 'Nuestros simulacros replican con exactitud el formato oficial: la entrevista oral se realiza de forma individual 1 a 1 con un formador bilingüe evaluando fluidez, vocabulario, coherencia y adecuación sociocultural; la prueba escrita evalúa comprensión de textos y redacción según el alfabeto normado con tiempo cronometrado.'
  },
  {
    id: 'faq-5',
    category: 'matricula',
    question: '¿Cuáles son los horarios y modalidades disponibles?',
    answer: 'Ofrecemos tres modalidades flexibles para adaptarse a la labor docente: 1) Modalidad Sincrónica Virtual (clases en vivo por las noches de 7:00 pm a 9:30 pm), 2) Modalidad Fines de Semana (sábados y domingos en horarios matutinos y vespertinos), y 3) Modalidad Asincrónica con Tutoría (acceso 24/7 a grabaciones, ejercicios y sesiones semanales de práctica oral).'
  },
  {
    id: 'faq-6',
    category: 'matricula',
    question: '¿Se entrega constancia o certificación al culminar la capacitación?',
    answer: 'Sí. Al culminar satisfactoriamente el plan formativo y los simulacros, se emite una Certificación Institucional de Especialización en Fortalecimiento de Competencias Comunicativas en Lenguas Originarias por 220 horas pedagógicas, válida para enriquecer tu legajo profesional y escalafón.'
  }
];

export const REGIONES_PERU: string[] = [
  'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cusco',
  'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima Metropolitana',
  'Lima Provincias', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno',
  'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
];
