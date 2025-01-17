import React from 'react';
import { Building2, MapPin, Calendar, ArrowRight } from 'lucide-react';

function ProjectCard({ image, title, location, date, description, impact }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="border-t pt-6">
          <h4 className="font-bold mb-3">Project Impact:</h4>
          <ul className="space-y-2">
            {impact.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Discover how we're implementing sustainable energy solutions across the globe.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ProjectCard
              image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
              title="Energaia Paris Project"
              location="Paris, France"
              date="2023 - Present"
              description="Pre-commercial demonstration of Energaia's waste-to-energy technology using a modular system, integrated with multiple processes to generate clean energy from urban waste streams."
              impact={[
                "Reduced landfill dependency by 40%",
                "Generated 2.5 MW of clean energy",
                "Created 50+ local jobs",
                "Decreased CO2 emissions by 15,000 tons annually"
              ]}
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1497440001374-f26997328c1b"
              title="Ghana Renewable Energy Initiative"
              location="Ghana"
              date="2022 - Present"
              description="Deployment of small-scale biomass power plants to replace diesel generators in remote areas, collaborating with local stakeholders to promote sustainable energy access."
              impact={[
                "Provided clean energy to 10,000+ households",
                "Reduced diesel consumption by 75%",
                "Trained 100+ local technicians",
                "Established sustainable supply chain"
              ]}
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
              title="Owerri Biomass Energy Partnership"
              location="Owerri, Nigeria"
              date="2023 - Present"
              description="Collaboration with a local university to develop decentralized biomass energy solutions, replacing diesel generators with high-efficiency biomass systems."
              impact={[
                "Reduced operational costs by 60%",
                "Decreased carbon footprint by 8,000 tons",
                "Created research opportunities",
                "Improved air quality in campus area"
              ]}
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
              title="Southeast Asia Renewable Integration"
              location="Vietnam"
              date="2022 - Present"
              description="Implementation of integrated renewable energy systems combining solar, biomass, and energy storage technologies for industrial applications."
              impact={[
                "Achieved 85% renewable energy integration",
                "Reduced energy costs by 45%",
                "Improved grid stability",
                "Created local manufacturing capabilities"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}