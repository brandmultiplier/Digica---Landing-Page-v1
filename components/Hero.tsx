import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-digica-dark min-h-[85vh] flex items-center">
      
      {/* Abstract Background Elements similar to PDF Slide 1 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-digica-dark via-digica-dark/95 to-digica-dark/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6">
             <div className="w-2 h-2 rounded-full bg-digica-red animate-pulse"></div>
             <span className="text-digica-red font-mono text-sm tracking-widest uppercase">Smart Manufacturing</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            85% of AI pilots fail. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-digica-red to-red-400">We build the 15% that scale.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
            Pioneering the use of advanced AI technology in real-world projects. If your AI dies when it touches real systems, you don’t have a model problem — you have an integration problem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
               className="inline-flex items-center justify-center gap-2 bg-digica-red text-white px-8 py-4 font-semibold hover:bg-red-600 transition-all rounded-sm shadow-lg shadow-red-900/20"
            >
              Book a Strategic Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-400 font-mono">
             <span>PROVEN IMPACT IN:</span>
             <span className="text-white">DEFENCE</span>
             <span className="w-1 h-1 bg-digica-red rounded-full"></span>
             <span className="text-white">MEDICAL</span>
             <span className="w-1 h-1 bg-digica-red rounded-full"></span>
             <span className="text-white">IOT</span>
          </div>
        </div>

        {/* Visual Content - Abstract Tech Representation */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md">
             {/* Decorative glowing lines simulating the 'wires' from PDF */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-digica-red/20 blur-[100px] rounded-full"></div>
             <div className="relative z-10 border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <div className="text-white font-mono text-sm">SYSTEM_STATUS</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="text-green-500 text-xs font-bold">LIVE PRODUCTION</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/40 p-4 rounded border-l-2 border-digica-red">
                    <div className="text-xs text-gray-400 mb-1">UNPLANNED DOWNTIME</div>
                    <div className="text-2xl font-bold text-white">-22% <span className="text-sm font-normal text-gray-400">/ Month</span></div>
                  </div>
                  <div className="bg-black/40 p-4 rounded border-l-2 border-digica-red">
                    <div className="text-xs text-gray-400 mb-1">PRODUCTION YIELD</div>
                    <div className="text-2xl font-bold text-white">+14% <span className="text-sm font-normal text-gray-400">/ Year</span></div>
                  </div>
                  <div className="bg-black/40 p-4 rounded border-l-2 border-digica-red">
                    <div className="text-xs text-gray-400 mb-1">DETECTION LEAD TIME</div>
                    <div className="text-2xl font-bold text-white">+27% <span className="text-sm font-normal text-gray-400">Faster</span></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};