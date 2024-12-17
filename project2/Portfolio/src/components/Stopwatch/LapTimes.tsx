import React from 'react';
import { formatTime } from '../../utils/timeFormatter';

interface LapTimesProps {
  laps: number[];
}

export function LapTimes({ laps }: LapTimesProps) {
  if (laps.length === 0) return null;

  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Lap Times</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="max-h-64 overflow-y-auto">
          {laps.map((time, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
            >
              <span className="text-gray-600">Lap {laps.length - index}</span>
              <span className="font-mono text-indigo-600">{formatTime(time)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}