import React from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

interface ControlsProps {
  isRunning: boolean;
  onStartStop: () => void;
  onReset: () => void;
  onLap: () => void;
}

export function Controls({ isRunning, onStartStop, onReset, onLap }: ControlsProps) {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={onStartStop}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
          ${
            isRunning
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
      >
        {isRunning ? <Pause size={20} /> : <Play size={20} />}
        {isRunning ? 'Stop' : 'Start'}
      </button>
      
      <button
        onClick={onLap}
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-indigo-500 hover:bg-indigo-600 text-white transition-all"
        disabled={!isRunning}
      >
        <Timer size={20} />
        Lap
      </button>

      <button
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gray-500 hover:bg-gray-600 text-white transition-all"
      >
        <RotateCcw size={20} />
        Reset
      </button>
    </div>
  );
}