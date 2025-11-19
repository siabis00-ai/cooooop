
export enum Category {
  ELDERLY = 'Anziani',
  DISABILITY = 'Disabilità',
  MINORS = 'Minori',
  SOCIAL_EXCLUSION = 'Esclusione Sociale',
  FAMILY_SUPPORT = 'Supporto Familiare'
}

export enum ProjectType {
  HOME_CARE = 'Assistenza Domiciliare (SAD)',
  EDUCATIONAL = 'Assistenza Educativa',
  TRANSPORT = 'Trasporto Sociale',
  REHABILITATION = 'Riabilitazione',
  JOB_PLACEMENT = 'Inserimento Lavorativo'
}

export interface Operator {
  id: string;
  name: string;
  specialization: string[];
  availableHoursPerWeek: number;
  activeCases: number;
  rating: number;
}

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  description: string;
  targetCategory: Category[];
  costPerHour: number;
}

export interface ClientProfile {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  category: Category;
  needsDescription: string;
  urgency: 'Bassa' | 'Media' | 'Alta';
  address: string;
}

export interface AssistanceProposal {
  summary: string;
  recommendedProjectId: string;
  assignedOperatorId: string;
  weeklyHours: number;
  monthlyCostEstimate: number;
  goals: string[];
  reasoning: string;
}

export interface Review {
  id: string;
  authorName: string;
  relation: 'Utente' | 'Familiare' | 'Tutore';
  rating: number;
  text: string;
  date: string;
  target?: string; // Optional: who/what is being reviewed
}
