import { useState, useEffect, useCallback } from 'react';

export function useStopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  }, []);

  const addLap = useCallback(() => {
    setLaps(prevLaps => [time, ...prevLaps]);
  }, [time]);

  return {
    time,
    isRunning,
    start,
    stop,
    reset,
    addLap,
    laps
  };
}