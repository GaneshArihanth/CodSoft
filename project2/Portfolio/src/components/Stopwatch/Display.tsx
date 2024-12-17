import React from 'react';
import { formatTime } from '../../utils/timeFormatter';

interface DisplayProps {
  time: number;
}

export function Display({ time }: DisplayProps) {
  return (
    <div className="text-6xl font-mono font-bold text-indigo-600 mb-8">
      {formatTime(time)}
    </div>
  );
}