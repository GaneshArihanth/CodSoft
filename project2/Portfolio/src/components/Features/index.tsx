import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance to provide the best user experience.',
    icon: Zap
  },
  {
    title: 'Secure by Default',
    description: 'Built with security in mind, protecting your data at every step.',
    icon: Shield
  },
  {
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices.',
    icon: Smartphone
  },
  {
    title: 'Global Scale',
    description: 'Deploy worldwide with edge computing and CDN integration.',
    icon: Globe
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features that set us apart
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to succeed in the digital world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}