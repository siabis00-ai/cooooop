
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import IntakeForm from './components/IntakeForm';
import ProposalView from './components/ProposalView';
import Reviews from './components/Reviews';
import OperatorList from './components/OperatorList';
import { MOCK_OPERATORS, MOCK_PROJECTS, MOCK_REVIEWS, MOCK_CLIENTS } from './constants';
import { ClientProfile, AssistanceProposal, Review, Operator, Project } from './types';
import { generateProposal } from './services/geminiService';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'intake' | 'reviews' | 'operators'>('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [currentProposal, setCurrentProposal] = useState<AssistanceProposal | null>(null);
  const [currentClient, setCurrentClient] = useState<ClientProfile | null>(null);
  
  // State Management for Database
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [operators, setOperators] = useState<Operator[]>(MOCK_OPERATORS);
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [clients, setClients] = useState<ClientProfile[]>(MOCK_CLIENTS);

  const handleIntakeSubmit = async (profile: ClientProfile) => {
    setIsLoading(true);
    setCurrentClient(profile);
    try {
      const proposal = await generateProposal(profile, projects, operators);
      setCurrentProposal(proposal);
      // Opzionale: Aggiungi automaticamente alla lista clienti se si vuole salvare lo storico
    } catch (error) {
      console.error("Failed to generate proposal", error);
      alert("Si è verificato un errore durante la generazione del piano. Assicurati di avere configurato correttamente l'API Key.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddReview = (newReview: Review) => {
    setReviews([newReview, ...reviews]);
  };

  const handleAddOperator = (newOperator: Operator) => {
    setOperators([newOperator, ...operators]);
  };

  const handleAddClient = (newClient: ClientProfile) => {
    setClients([newClient, ...clients]);
  };

  const handleAddProject = (newProject: Project) => {
    setProjects([newProject, ...projects]);
  };

  const handleReset = () => {
    setCurrentProposal(null);
    setCurrentClient(null);
  };

  const getProjectById = (id: string) => projects.find(p => p.id === id);
  const getOperatorById = (id: string) => operators.find(o => o.id === id);

  const getPageTitle = () => {
    switch(activeTab) {
      case 'dashboard': return 'Panoramica Cooperativa';
      case 'intake': return 'Gestione Nuova Utenza';
      case 'reviews': return 'Feedback e Recensioni';
      case 'operators': return 'Database e Risorse';
      default: return 'CoopSoc';
    }
  };

  const getPageDescription = () => {
    switch(activeTab) {
      case 'dashboard': return 'Monitoraggio risorse, progetti e operatori in tempo reale.';
      case 'intake': return 'Compila i dati per attivare un nuovo percorso di assistenza.';
      case 'reviews': return 'Le opinioni delle famiglie e degli utenti sui nostri servizi.';
      case 'operators': return 'Gestione centralizzata di Operatori, Utenti e Servizi.';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 p-8 h-screen overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">
                    {getPageTitle()}
                </h1>
                <p className="text-slate-500 mt-1">
                    {getPageDescription()}
                </p>
            </div>
            <div className="text-right text-sm text-slate-400">
                {new Date().toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
        </header>

        <div className="max-w-6xl mx-auto pb-12">
            {activeTab === 'dashboard' && (
                <Dashboard operators={operators} projects={projects} />
            )}

            {activeTab === 'reviews' && (
                <Reviews reviews={reviews} onAddReview={handleAddReview} />
            )}

            {activeTab === 'operators' && (
                <OperatorList 
                  operators={operators} 
                  onAddOperator={handleAddOperator}
                  clients={clients}
                  onAddClient={handleAddClient}
                  projects={projects}
                  onAddProject={handleAddProject}
                />
            )}

            {activeTab === 'intake' && (
                <>
                    {(!currentProposal || !currentClient) ? (
                        <IntakeForm onSubmit={handleIntakeSubmit} isLoading={isLoading} />
                    ) : (
                        <ProposalView 
                            proposal={currentProposal} 
                            client={currentClient} 
                            project={getProjectById(currentProposal.recommendedProjectId)}
                            operator={getOperatorById(currentProposal.assignedOperatorId)}
                            onReset={handleReset}
                        />
                    )}
                </>
            )}
        </div>
      </main>
    </div>
  );
}

export default App;
