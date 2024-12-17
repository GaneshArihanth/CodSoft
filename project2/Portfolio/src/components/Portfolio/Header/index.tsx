import React from 'react';
import { ProfileInfo } from './ProfileInfo';

export function Header() {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative z-10">
        <ProfileInfo />
      </div>
    </header>
  );
}