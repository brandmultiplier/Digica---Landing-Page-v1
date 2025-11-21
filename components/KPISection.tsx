import React from 'react';

export const KPISection: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-white border border-gray-300 shadow-sm">
          
          {/* Card 1 */}
          <div className="p-10 text-center hover:bg-gray-50 transition-colors">
            <div className="text-4xl lg:text-5xl font-extrabold text-digica-red mb-2 tracking-tight">
              –22%
            </div>
            <h3 className="text-lg font-bold text-digica-dark mb-4 uppercase tracking-wider">Unplanned Downtime</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reduced unexpected line stops by integrating AI with real production systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-10 text-center hover:bg-gray-50 transition-colors">
            <div className="text-4xl lg:text-5xl font-extrabold text-digica-red mb-2 tracking-tight">
              +14%
            </div>
            <h3 className="text-lg font-bold text-digica-dark mb-4 uppercase tracking-wider">Production Yield</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Improved output quality by unifying data across heterogeneous factory systems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-10 text-center hover:bg-gray-50 transition-colors">
            <div className="text-4xl lg:text-5xl font-extrabold text-digica-red mb-2 tracking-tight">
              +11%
            </div>
            <h3 className="text-lg font-bold text-digica-dark mb-4 uppercase tracking-wider">Line Efficiency</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Increased throughput by eliminating blind spots caused by disconnected equipment.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-10 text-center hover:bg-gray-50 transition-colors">
            <div className="text-4xl lg:text-5xl font-extrabold text-digica-red mb-2 tracking-tight">
              +27%
            </div>
            <h3 className="text-lg font-bold text-digica-dark mb-4 uppercase tracking-wider">Detection Lead Time</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Detected anomalies earlier thanks to production-grade AI aligned with legacy stacks.
            </p>
          </div>

        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Real results from deployed production environments</p>
        </div>
      </div>
    </section>
  );
};