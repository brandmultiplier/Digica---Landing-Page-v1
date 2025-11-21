import React from 'react';
import { AlertTriangle, Database, Unplug } from 'lucide-react';

export const PilotGraveyard: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-digica-dark text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 grid-bg-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-digica-red font-mono font-bold mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span>THE PROBLEM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              The Pilot Graveyard: <br/>
              Where demos succeed, but production kills them.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Mismatched PLCs. Fragmented data. "Green dashboards" that lie. 
              Vendors show you a pristine demo on clean data, but real factories are messy.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-digica-red pl-4">
              The reason 85% of industrial AI projects fail isn't the algorithm. 
              It's that they can't survive "Thursday"—a busy, messy day on a live production line.
            </p>
          </div>

          {/* Right Column: The Signals */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-8">Signals You’re in the Pilot Graveyard</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 text-digica-red">
                  <Unplug className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Isolation Failure</h4>
                  <p className="text-gray-400 text-sm">Pilots run fine in an isolated sandbox but crash immediately when connected to legacy OT networks or real-time SCADA feeds.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 text-digica-red">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">The "Data Cleaning" Trap</h4>
                  <p className="text-gray-400 text-sm">Your team spends 90% of their time cleaning CSVs manually because the solution lacks automated data harmonization pipelines.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 text-digica-red">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">The Phantom Green Light</h4>
                  <p className="text-gray-400 text-sm">Dashboards show all systems "Green" and optimized, yet operators on the floor are reporting jams, stops, and quality defects.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};