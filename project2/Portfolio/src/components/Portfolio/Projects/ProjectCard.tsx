import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} className="mr-1" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="flex items-center text-gray-600 hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}