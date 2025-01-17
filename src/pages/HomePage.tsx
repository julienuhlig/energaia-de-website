import React from 'react';
import { ArrowRight, Globe, Zap, BarChart3, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ image, title, location, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <Building2 className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/90">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
            alt="Renewable Energy"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-screen flex items-center">
          <div className="max-w-3xl pt-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Powering a Sustainable Future
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Global leaders in renewable energy and carbon capture innovation, delivering integrated solutions for a cleaner tomorrow.
            </p>
            <Link to="/about" className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg inline-flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <ServiceCard
              icon={<Globe className="w-12 h-12 text-green-500" />}
              title="Consulting Services"
              description="Expert guidance on policy, feasibility studies, and environmental impact analysis for renewable energy projects."
            />
            <ServiceCard
              icon={<Zap className="w-12 h-12 text-green-500" />}
              title="System Development"
              description="Design and implementation of advanced biomass, waste-to-energy, and integrated renewable systems."
            />
            <ServiceCard
              icon={<BarChart3 className="w-12 h-12 text-green-500" />}
              title="Carbon Credit Management"
              description="Comprehensive carbon offset project certification and trading strategy services."
            />
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services" className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="/paris.png"
              title="Energaia Paris Project"
              location="Paris, France"
              description="Pre-commercial demonstration of waste-to-energy technology using modular systems."
            />
            <ProjectCard
              image="/ghana.png"
              title="Ghana Renewable Energy Initiative"
              location="Ghana"
              description="Deployment of small-scale biomass power plants in remote areas."
            />
            <ProjectCard
              image="/Owerri.png"
              title="Owerri Biomass Energy Partnership"
              location="Owerri, Nigeria"
              description="Development of decentralized biomass energy solutions with local university."
            />
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/projects" className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Ready to Make an Impact?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join us in creating a sustainable future through innovative energy solutions.
            </p>
            <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg inline-flex items-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}