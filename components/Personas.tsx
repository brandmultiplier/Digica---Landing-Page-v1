import React from 'react';
import { Code2, Gauge, Network } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Personas: React.FC = () => {
  return (
    <section className="py-24 bg-digica-dark text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 grid-bg-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <SectionHeading dark>
            Built for Decision-Makers Who've Seen Pilots Fail
          </SectionHeading>
          <p className="text-xl text-gray-400 font-light max-w-3xl mt-2">
            CTOs, plant directors, and transformation leads who need AI that actually works
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* CTO Card */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm hover:border-digica-red/50 transition-colors group">
            <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center mb-8 text-gray-300 group-hover:text-digica-red group-hover:border-digica-red transition-colors">
               <Code2 className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">CTO / Head of Engineering</h3>
            <p className="text-xs font-bold text-digica-red tracking-widest uppercase mb-6">
              INTEGRATION WITHOUT DISRUPTION
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              You need AI that doesn't break your stack. We build on top of legacy systems—PLCs, SCADA, ERP—without rip-and-replace. Scalable architecture. Zero production risk.
            </p>
          </div>

          {/* VP Ops Card */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm hover:border-digica-red/50 transition-colors group">
            <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center mb-8 text-gray-300 group-hover:text-digica-red group-hover:border-digica-red transition-colors">
               <Gauge className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">VP Operations / Plant Director</h3>
            <p className="text-xs font-bold text-digica-red tracking-widest uppercase mb-6">
              UPTIME, YIELD, THROUGHPUT
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              You're judged on uptime and output. We deliver predictive alerts that prevent unplanned downtime, improve yield, and stabilize throughput—without disrupting operations.
            </p>
          </div>

          {/* Digital Transform Card */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm hover:border-digica-red/50 transition-colors group">
             <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center mb-8 text-gray-300 group-hover:text-digica-red group-hover:border-digica-red transition-colors">
               <Network className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Head of Digital Transformation</h3>
            <p className="text-xs font-bold text-digica-red tracking-widest uppercase mb-6">
              ROADMAP & ROI
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              You're building the future—but pilots keep dying. We deliver cross-system orchestration, unified data layers, and 90-day ROI so your transformation roadmap survives executive scrutiny.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};