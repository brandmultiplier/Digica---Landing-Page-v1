import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-digica-dark text-white relative overflow-hidden">
      {/* Abstract BG */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to escape the Pilot Graveyard?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Stop building demos. Start building systems that survive the factory floor.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex items-center justify-center gap-2 bg-digica-red text-white px-8 py-4 font-bold text-lg hover:bg-red-600 transition-all rounded-sm">
            Book a Strategic Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500 font-mono">
          No sales pitch. Just engineering discussion.
        </p>
      </div>
    </section>
  );
};