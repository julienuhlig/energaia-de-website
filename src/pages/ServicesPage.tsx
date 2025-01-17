import React from 'react';
import { Globe, Zap, BarChart3, ArrowRight, Workflow, FileCheck, Users, Trophy, Lightbulb, Globe2 } from 'lucide-react';

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CounterItem({ icon, number, label }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-green-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/services.jpg"
            alt="Solar Panel Grid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Comprehensive renewable energy and carbon capture solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterItem
              icon={<Trophy className="w-8 h-8 text-green-600" />}
              number="150+"
              label="Projects Completed"
            />
            <CounterItem
              icon={<Globe2 className="w-8 h-8 text-green-600" />}
              number="30+"
              label="Countries Served"
            />
            <CounterItem
              icon={<Users className="w-8 h-8 text-green-600" />}
              number="500+"
              label="Satisfied Clients"
            />
            <CounterItem
              icon={<Lightbulb className="w-8 h-8 text-green-600" />}
              number="25+"
              label="Years Experience"
            />
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ServiceCard
              icon={<Globe className="w-12 h-12 text-green-500" />}
              title="Consulting Services"
              description="Expert guidance for renewable energy projects from concept to implementation."
              features={[
                "Policy and regulatory advisory",
                "Feasibility studies",
                "Environmental impact analysis",
                "Risk assessments",
                "Project planning"
              ]}
            />
            <ServiceCard
              icon={<Zap className="w-12 h-12 text-green-500" />}
              title="System Development"
              description="Cutting-edge renewable energy system design and implementation."
              features={[
                "Biomass conversion systems",
                "Waste-to-energy solutions",
                "Hybrid energy systems",
                "Energy storage integration",
                "System optimization"
              ]}
            />
            <ServiceCard
              icon={<BarChart3 className="w-12 h-12 text-green-500" />}
              title="Carbon Credit Management"
              description="Comprehensive carbon offset solutions and trading strategies."
              features={[
                "Project certification",
                "Carbon trading advisory",
                "MRV services",
                "Compliance management",
                "Market analysis"
              ]}
            />
            <ServiceCard
              icon={<Workflow className="w-12 h-12 text-green-500" />}
              title="Project Management"
              description="End-to-end project management for renewable energy initiatives."
              features={[
                "Timeline management",
                "Resource allocation",
                "Stakeholder coordination",
                "Quality assurance",
                "Progress monitoring"
              ]}
            />
            <ServiceCard
              icon={<FileCheck className="w-12 h-12 text-green-500" />}
              title="Compliance & Certification"
              description="Ensuring projects meet all regulatory requirements and standards."
              features={[
                "Regulatory compliance",
                "Environmental permits",
                "Safety certifications",
                "Quality standards",
                "Documentation"
              ]}
            />
            <ServiceCard
              icon={<Users className="w-12 h-12 text-green-500" />}
              title="Training & Capacity Building"
              description="Knowledge transfer and skill development for sustainable operations."
              features={[
                "Technical training",
                "Operational procedures",
                "Safety protocols",
                "Best practices",
                "Ongoing support"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}