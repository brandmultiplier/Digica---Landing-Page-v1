import React, { useState } from 'react';
import { FileText, Search, FlaskConical, Rocket } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Process: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      title: "NDA",
      desc: "Signing NDA if required to protect your IP.",
      icon: <FileText className="w-6 h-6" />,
      detail: "Legal framework setup."
    },
    {
      title: "Review Data",
      desc: "We analyse your sample data for 2-3 days free of charge.",
      icon: <Search className="w-6 h-6" />,
      detail: "Overview of potential project & indicative budgets."
    },
    {
      title: "PoC",
      desc: "Proof of Concept phase to demonstrate value.",
      icon: <FlaskConical className="w-6 h-6" />,
      detail: "Validate feasibility before full investment."
    },
    {
      title: "Full Solution",
      desc: "Delivery of robust, scalable operational solution.",
      icon: <Rocket className="w-6 h-6" />,
      detail: "Deployment, testing, and support."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>How We Work</SectionHeading>
        <p className="text-gray-600 max-w-none mb-20 text-lg">
          Digica’s cooperation model is flexible. Consistency and transparency are key to our delivery process.
        </p>

        <div className="relative">
          {/* Connector Track (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            {/* Animated Signal Pulse */}
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-digica-red to-transparent animate-signal-flow opacity-80"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const isActive = hoveredStep === i;
              return (
                <div 
                  key={i} 
                  className="bg-transparent pt-0 flex flex-col relative group cursor-default items-center lg:items-start"
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step Marker */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border-4 transition-all duration-300 z-10 relative bg-white
                    ${isActive ? 'border-digica-red text-digica-red scale-110 shadow-lg shadow-red-100/50' : 'border-gray-200 text-gray-400 group-hover:border-gray-300'}
                  `}>
                    {step.icon}
                    {/* Pulse Ring on Hover */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-digica-red animate-ping opacity-20"></span>
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 text-center lg:text-left transition-colors ${isActive ? 'text-digica-red' : 'text-digica-dark'}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-center lg:text-left font-medium">
                    {step.desc}
                  </p>
                  <p className="text-sm text-gray-400 text-center lg:text-left">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes signal-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-signal-flow {
          animation: signal-flow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};