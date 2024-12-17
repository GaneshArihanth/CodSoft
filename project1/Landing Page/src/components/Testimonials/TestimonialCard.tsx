import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({ content, author, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center mb-6">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={image}
          alt={author}
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">{content}</p>
    </div>
  );
}