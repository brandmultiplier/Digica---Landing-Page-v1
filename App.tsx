import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Customers } from './components/Customers';
import { PilotGraveyard } from './components/PilotGraveyard';
import { Difference } from './components/Difference';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { Personas } from './components/Personas';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-digica-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Customers />
        <PilotGraveyard />
        <Process />
        <Difference />
        <Personas />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;