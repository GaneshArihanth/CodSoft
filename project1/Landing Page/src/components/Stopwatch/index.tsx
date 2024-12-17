import React, { useState, useEffect, useCallback } from 'react';
import { useStopwatch } from '../../hooks/useStopwatch';
import { Display } from './Display';
import { Controls } from './Controls';
import { LapTimes } from './LapTimes';

export function Stopwatch() {
  const { time, isRunning, start, stop, reset, addLap, laps } = useStopwatch();

  const handleStartStop = () => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl shadow-lg">
      <Display time={time} />
      <Controls
        isRunning={isRunning}
        onStartStop={handleStartStop}
        onReset={reset}
        onLap={addLap}
      />
      <LapTimes laps={laps} />
    </div>
  );
}