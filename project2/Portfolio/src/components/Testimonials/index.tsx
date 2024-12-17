import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    content: "Working with this team has been an absolute pleasure. They delivered beyond our expectations.",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The attention to detail and professional approach made all the difference in our project.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}