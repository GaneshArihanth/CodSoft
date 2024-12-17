import React from 'react';
import { Bio } from './Bio';
import { Skills } from './Skills';

export function About() {
  return (
    <section className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <Bio />
        <Skills />
      </div>
    </section>
  );
}