
import { Category, Operator, Project, ProjectType, Review, ClientProfile } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'PROJ_001',
    name: 'Progetto "Nonni a Casa"',
    type: ProjectType.HOME_CARE,
    description: 'Assistenza domiciliare per anziani non autosufficienti. Include igiene personale, preparazione pasti e compagnia.',
    targetCategory: [Category.ELDERLY],
    costPerHour: 22
  },
  {
    id: 'PROJ_002',
    name: 'Progetto "Crescere Insieme"',
    type: ProjectType.EDUCATIONAL,
    description: 'Supporto educativo per minori con difficoltà scolastiche o comportamentali.',
    targetCategory: [Category.MINORS, Category.FAMILY_SUPPORT],
    costPerHour: 25
  },
  {
    id: 'PROJ_003',
    name: 'Mobilità Solidale',
    type: ProjectType.TRANSPORT,
    description: 'Accompagnamento verso presidi sanitari o centri diurni per persone con mobilità ridotta.',
    targetCategory: [Category.ELDERLY, Category.DISABILITY],
    costPerHour: 15
  },
  {
    id: 'PROJ_004',
    name: 'Autonomia e Lavoro',
    type: ProjectType.JOB_PLACEMENT,
    description: 'Percorsi di inserimento lavorativo per persone svantaggiate.',
    targetCategory: [Category.SOCIAL_EXCLUSION, Category.DISABILITY],
    costPerHour: 30
  },
  {
    id: 'PROJ_005',
    name: 'Riabilitazione Attiva',
    type: ProjectType.REHABILITATION,
    description: 'Fisioterapia e mantenimento motorio a domicilio.',
    targetCategory: [Category.ELDERLY, Category.DISABILITY],
    costPerHour: 40
  }
];

export const MOCK_OPERATORS: Operator[] = [
  {
    id: 'OP_001',
    name: 'Maria Rossi',
    specialization: ['OSS', 'Assistenza Anziani'],
    availableHoursPerWeek: 20,
    activeCases: 3,
    rating: 4.8
  },
  {
    id: 'OP_002',
    name: 'Luca Bianchi',
    specialization: ['Educatore', 'Pedagogia'],
    availableHoursPerWeek: 15,
    activeCases: 2,
    rating: 4.5
  },
  {
    id: 'OP_003',
    name: 'Giulia Verdi',
    specialization: ['Fisioterapista'],
    availableHoursPerWeek: 10,
    activeCases: 5,
    rating: 4.9
  },
  {
    id: 'OP_004',
    name: 'Ahmed Karim',
    specialization: ['Autista', 'Primo Soccorso'],
    availableHoursPerWeek: 30,
    activeCases: 1,
    rating: 4.7
  },
  {
    id: 'OP_005',
    name: 'Elena Neri',
    specialization: ['Psicologa', 'Orientamento al Lavoro'],
    availableHoursPerWeek: 12,
    activeCases: 4,
    rating: 5.0
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'REV_001',
    authorName: 'Giuseppe M.',
    relation: 'Familiare',
    rating: 5,
    text: 'Maria è stata un angelo per mia madre. Molto professionale e umana, non potremmo chiedere di meglio.',
    date: '2023-10-15',
    target: 'Maria Rossi'
  },
  {
    id: 'REV_002',
    authorName: 'Luisa F.',
    relation: 'Utente',
    rating: 4,
    text: 'Il servizio di trasporto è puntuale. I mezzi sono puliti. Sarebbe utile avere più flessibilità sugli orari nel weekend.',
    date: '2023-11-02',
    target: 'Mobilità Solidale'
  },
  {
    id: 'REV_003',
    authorName: 'Famiglia Esposito',
    relation: 'Familiare',
    rating: 5,
    text: 'Luca ha fatto miracoli con nostro figlio. I progressi a scuola sono evidenti dopo soli 3 mesi.',
    date: '2023-11-20',
    target: 'Luca Bianchi'
  },
  {
    id: 'REV_004',
    authorName: 'Antonio R.',
    relation: 'Tutore',
    rating: 3,
    text: 'Buon servizio generale, ma la comunicazione con la cooperativa a volte è lenta.',
    date: '2023-12-05'
  }
];

export const MOCK_CLIENTS: ClientProfile[] = [
  {
    id: 'CL_001',
    firstName: 'Anna',
    lastName: 'Moretti',
    age: 82,
    category: Category.ELDERLY,
    urgency: 'Media',
    address: 'Via Garibaldi 12, Torino',
    needsDescription: 'Necessita supporto per la spesa e igiene personale leggera.'
  },
  {
    id: 'CL_002',
    firstName: 'Marco',
    lastName: 'Filippi',
    age: 14,
    category: Category.MINORS,
    urgency: 'Alta',
    address: 'Corso Francia 45, Torino',
    needsDescription: 'Difficoltà scolastiche e rischio dispersione.'
  },
  {
    id: 'CL_003',
    firstName: 'Giovanna',
    lastName: 'Ricci',
    age: 65,
    category: Category.DISABILITY,
    urgency: 'Bassa',
    address: 'Piazza Castello 1, Torino',
    needsDescription: 'Riabilitazione post-operatoria anca.'
  }
];
