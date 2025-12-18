import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ArrowRight, Cpu, Eye, Activity, Wifi } from 'lucide-react';

const projects = [
  {
    client: "TOY FACTORY",
    title: "Detection of printing errors",
    desc: "A Toy Factory needs to identify printing errors and assess whether they render the whole brick unsellable. We trained a CNN for detecting three kinds of printing errors with per-pixel probability heatmaps.",
    tech: "PyTorch, OpenCV, Docker, FastAPI",
    icon: <Eye className="w-6 h-6" />,
    result: "Automated QA threshold established for accept/reject decisions."
  },
  {
    client: "BAE Systems",
    title: "Process Optimisation",
    desc: "Developed a machine learning model to recommend optimisations to the process as the factory is operating to reduce energy and resource consumption.",
    tech: "Python, PyQT6, ORTools",
    icon: <Activity className="w-6 h-6" />,
    result: "Desktop app visualising optimal component arrangement and scheduling."
  },
  {
    client: "Anybotics",
    title: "Robotic console analysis",
    desc: "Intelligent computer vision inspection solution for robots operating in hostile environments. Inspects gauges, liquid levels, and thermal anomalies.",
    tech: "TensorFlow 2, C++, OpenCV, ROS",
    icon: <Cpu className="w-6 h-6" />,
    result: "Works offline in hazardous situations with synthetic data training."
  },
  {
    client: "Ayla Networks",
    title: "Predicting device reboots",
    desc: "Predict router poor performance and prevent it using Machine Learning. Indicate reboot probability and detailed reasons for failure.",
    tech: "PySpark, XGBoost, Amazon SageMaker",
    icon: <Wifi className="w-6 h-6" />,
    result: "Model predicts reboots 12-hours in advance with >85% accuracy."
  },
  {
    client: "Medical Imaging Silicon",
    title: "Structural defects in silicon",
    desc: "Reduce the amount of faulty silicon assembled into equipment. Identify defective regions (slices) in silicon wafers from scans and test data.",
    tech: "XGBoost, SHAP, Scikit-image",
    icon: <Activity className="w-6 h-6" />,
    result: "Accurately identified all slices in test data provided."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>Case Studies</SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 hover:border-digica-red hover:shadow-md transition-all group flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-gray-100 rounded-sm text-digica-dark group-hover:bg-digica-red group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{project.client}</span>
              </div>
              
              <h3 className="text-xl font-bold text-digica-dark mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              <div className="border-t border-gray-100 pt-4 mt-auto">
                 <div className="mb-3">
                   <span className="text-xs font-bold text-digica-red uppercase">Results:</span>
                   <p className="text-xs text-gray-700 mt-1">{project.result}</p>
                 </div>
                 <div className="text-xs text-gray-400 font-mono">
                   {project.tech}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
