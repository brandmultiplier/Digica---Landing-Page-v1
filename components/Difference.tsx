import React from 'react';
import { Network, ShieldCheck, LineChart, Timer } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Difference: React.FC = () => {
  const differences = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Integration That Scales",
      text: "AI that adapts to your legacy systems—not the other way around. We build bridges to existing PLCs and historians without forcing a rip-and-replace."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Production-Grade AI",
      text: "Built for real machines, mixed vendors, and strict OT constraints. Our systems are designed to fail safely and recover automatically."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Predictive > Reactive",
      text: "Shift from putting out fires to preventing them. Detect subtle vibration or temperature anomalies hours before a bearing fails."
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Proof, Not Promise",
      text: "Measurable results in weeks, not quarters. We define success by OEE impact and yield improvement, not by successful model training."
    }
  ];

  return (
    <section id="solution" className="pt-8 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeading>Engineering Out The Risk</SectionHeading>
          <p className="text-gray-600 text-lg max-w-3xl mt-2">
            We don't just deliver code. We deliver resilient industrial systems that respect the reality of your factory floor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differences.map((item, idx) => (
            <div key={idx} className="group p-8 border border-gray-200 hover:border-digica-red/30 rounded-sm transition-all hover:shadow-lg bg-gray-50 hover:bg-white">
              <div className="text-digica-dark mb-6 group-hover:text-digica-red transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-digica-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};