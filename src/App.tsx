/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { HomeView } from './components/HomeView';
import { ProgramView } from './components/ProgramView';
import { LandingView } from './components/LandingView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'program':
        return <ProgramView onBack={() => setCurrentView('home')} />;
      case 'landing':
        return <LandingView />;
      case 'home':
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900">
      {renderView()}

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
