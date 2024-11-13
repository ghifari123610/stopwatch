import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0); // Menghitung waktu dalam detik
  const [running, setRunning] = useState(false); // Status timer (running atau berhenti)
  const [intervalId, setIntervalId] = useState(null); // Untuk menyimpan id interval
  const [history, setHistory] = useState([]); // Riwayat waktu yang tercatat
  
  // Stopwatch
  const [stopwatchTime, setStopwatchTime] = useState(0); // Stopwatch time in seconds
  const [stopwatchRunning, setStopwatchRunning] = useState(false); // Status stopwatch (running atau berhenti)

  // Fungsi untuk mulai timer
  const startTimer = () => {
    if (!running) {
      setRunning(true);
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  // Fungsi untuk menghentikan timer
  const stopTimer = () => {
    setRunning(false);
    clearInterval(intervalId);
  };

  // Fungsi untuk mereset timer
  const resetTimer = () => {
    setRunning(false);
    setTime(0);
    clearInterval(intervalId);
  };

  // Fungsi untuk mencatat waktu dan menyimpan ke riwayat
  const recordTime = () => {
    if (time > 0) {
      setHistory([...history, time]);
      setTime(0);
      clearInterval(intervalId);
      setRunning(false);
    }
  };

  // Stopwatch: Mulai, hentikan, dan reset stopwatch
  const startStopwatch = () => {
    if (!stopwatchRunning) {
      setStopwatchRunning(true);
      const id = setInterval(() => {
        setStopwatchTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopStopwatch = () => {
    setStopwatchRunning(false);
    clearInterval(intervalId);
  };

  const resetStopwatch = () => {
    setStopwatchTime(0);
    clearInterval(intervalId);
    setStopwatchRunning(false);
  };

  return (
    <div className="App">
      <h1>Timer & Stopwatch</h1>
      
      <div className="timer-section">
        <h2>Timer</h2>
        <p>Time: {time}s</p>
        <button onClick={startTimer} disabled={running}>Start Timer</button>
        <button onClick={stopTimer} disabled={!running}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
        <button onClick={recordTime} disabled={time === 0}>Record Time</button>
        <h3>Time History:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}s</li>
          ))}
        </ul>
      </div>
      
      <div className="stopwatch-section">
        <h2>Stopwatch</h2>
        <p>Stopwatch Time: {stopwatchTime}s</p>
        <button onClick={startStopwatch} disabled={stopwatchRunning}>Start Stopwatch</button>
        <button onClick={stopStopwatch} disabled={!stopwatchRunning}>Stop Stopwatch</button>
        <button onClick={resetStopwatch}>Reset Stopwatch</button>
      </div>
    </div>
  );
}

export default App;
