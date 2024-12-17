import React from 'react';

export function Bio() {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-lg text-gray-600 leading-relaxed">
        I'm a passionate Full Stack Developer with 5+ years of experience building web
        applications. I specialize in React, Node.js, and cloud technologies. My approach
        combines technical expertise with a keen eye for design to create exceptional
        user experiences.
      </p>
      <a
        href="/resume.pdf"
        className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Download Resume
      </a>
    </div>
  );
}