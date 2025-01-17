import React from 'react';
import { Target, Users, Globe2, Award } from 'lucide-react';

function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/about.jpg"
            alt="Renewable Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Energaia</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Leading the global transition to sustainable energy through innovation and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To advance global sustainability by developing innovative renewable energy solutions
                and promoting carbon-neutral practices that create lasting positive impact for our
                planet and future generations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To be a leading force in the global shift toward a carbon-neutral economy,
                delivering impactful projects that balance economic viability with environmental
                stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Target className="w-12 h-12 text-green-500" />}
              title="Innovation"
              description="Continuously pushing boundaries to develop cutting-edge sustainable solutions."
            />
            <ValueCard
              icon={<Users className="w-12 h-12 text-green-500" />}
              title="Collaboration"
              description="Working together with partners and communities to achieve shared goals."
            />
            <ValueCard
              icon={<Globe2 className="w-12 h-12 text-green-500" />}
              title="Sustainability"
              description="Committed to environmental stewardship and long-term positive impact."
            />
            <ValueCard
              icon={<Award className="w-12 h-12 text-green-500" />}
              title="Excellence"
              description="Maintaining the highest standards in all our projects and operations."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-gray-600">Head of Engineering</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Emily Brown</h3>
              <p className="text-gray-600">Head of Research</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}