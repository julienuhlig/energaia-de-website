import React from 'react';
import { Flame, Recycle, Factory, Power, Network, Lightbulb } from 'lucide-react';

function ExpertiseCard({ icon, title, description, capabilities }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      {icon}
      <h3 className="text-xl font-bold mt-6 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {capabilities.map((capability, index) => (
          <li key={index} className="text-gray-700 flex items-start space-x-2">
            <span className="text-green-500 font-bold">•</span>
            <span>{capability}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExpertisePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/expertise.jpg"
            alt="Solar Panel Grid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Expertise</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Cutting-edge technologies and innovative solutions in renewable energy and carbon capture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ExpertiseCard
              icon={<Flame className="w-12 h-12 text-green-500" />}
              title="High-Temperature Biomass Gasification"
              description="Advanced thermal conversion technology for clean energy production."
              capabilities={[
                "Synthetic gas production",
                "Biochar generation",
                "Renewable hydrogen",
                "Process optimization",
                "Emissions control"
              ]}
            />
            <ExpertiseCard
              icon={<Recycle className="w-12 h-12 text-green-500" />}
              title="Waste-to-Energy Conversion"
              description="Transforming waste materials into valuable energy resources."
              capabilities={[
                "Municipal solid waste processing",
                "Agricultural residue conversion",
                "Energy recovery systems",
                "Thermal treatment",
                "Resource efficiency"
              ]}
            />
            <ExpertiseCard
              icon={<Factory className="w-12 h-12 text-green-500" />}
              title="Carbon Capture & Utilization"
              description="Innovative CO2 capture and reuse technologies."
              capabilities={[
                "Industrial emissions capture",
                "CO2 conversion processes",
                "Sustainable products",
                "Process integration",
                "Efficiency optimization"
              ]}
            />
            <ExpertiseCard
              icon={<Power className="w-12 h-12 text-green-500" />}
              title="Integrated Energy Systems"
              description="Comprehensive energy solutions for diverse applications."
              capabilities={[
                "Hybrid power systems",
                "Grid integration",
                "Energy storage",
                "Smart controls",
                "System optimization"
              ]}
            />
            <ExpertiseCard
              icon={<Network className="w-12 h-12 text-green-500" />}
              title="Smart Grid Technologies"
              description="Advanced grid management and integration solutions."
              capabilities={[
                "Grid stability",
                "Demand response",
                "Energy management",
                "Data analytics",
                "Remote monitoring"
              ]}
            />
            <ExpertiseCard
              icon={<Lightbulb className="w-12 h-12 text-green-500" />}
              title="Research & Innovation"
              description="Continuous advancement in sustainable technologies."
              capabilities={[
                "Technology development",
                "Process improvement",
                "Efficiency enhancement",
                "New applications",
                "Collaborative research"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}