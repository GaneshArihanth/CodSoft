import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ProfileInfo() {
  return (
    <div className="text-center">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
      />
      <h1 className="text-4xl font-bold text-white mb-2">ABC</h1>
      <p className="text-xl text-gray-200 mb-6">Full Stack Developer</p>
      <div className="flex justify-center space-x-4">
        <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
        <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
        <SocialLink href="mailto:john@example.com" icon={<Mail />} label="Email" />
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="text-white hover:text-yellow-300 transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}