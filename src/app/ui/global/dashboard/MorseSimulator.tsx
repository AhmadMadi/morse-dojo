'use client';

import React, { useState, useEffect, useRef } from 'react';
import { morseCodeMap } from '@/app/config/data/morseCode';

// Define the Morse Code type, for mapping characters to their Morse equivalent
type MorseCodeMap = { [key: string]: string };

// Ensure morseCodeMap is correctly typed
const morseCode: MorseCodeMap = morseCodeMap;

export default function Encode() {
  const [currentChar, setCurrentChar] = useState<string>(''); // Current random character
  const [userInput, setUserInput] = useState<string>(''); // User's Morse input (dots and dashes)
  const [message, setMessage] = useState<string>(''); // Feedback message (correct/incorrect)
  const [startTime, setStartTime] = useState<number | null>(null); // Track start time for spacebar press
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false); // Whether the key is currently pressed

  // Audio context and oscillator refs for sound feedback
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  // Fetch a random character on component mount
  useEffect(() => {
    getRandomCharacter();
  }, []);

  // Function to get the selected characters from localStorage (or use default)
  const getSelectedCharacters = (): string[] => {
    return JSON.parse(localStorage.getItem('selectedChars') || '[]') || Object.keys(morseCode);
  };

  // Function to get a random character
  const getRandomCharacter = () => {
    const chars = getSelectedCharacters();
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    setCurrentChar(randomChar);
    setUserInput(''); // Reset user input
    setMessage(''); // Clear message
  };

  // Handle spacebar press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Space' && !startTime) {
      event.preventDefault();
      setStartTime(Date.now()); // Store the time the spacebar was pressed
      setIsKeyPressed(true); // Indicate the key is pressed

      // Initialize the AudioContext if not already done
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const audioCtx = audioCtxRef.current;

      // Resume audio context if it's suspended
      if (audioCtx?.state === 'suspended') {
        audioCtx.resume();
      }

      // Create and start the oscillator
      const oscillator = audioCtx?.createOscillator();
      if (oscillator) {
        oscillator.frequency.value = 600; // Set frequency for the sound
        const gainNode = audioCtx.createGain(); // Create a gain node for volume control
        gainNode.gain.setValueAtTime(1, audioCtx.currentTime); // Set volume
        oscillator.connect(gainNode).connect(audioCtx.destination); // Connect oscillator to audio output
        oscillator.start();
        oscillatorRef.current = oscillator; // Store the oscillator in ref
      }
    }
  };

  // Handle spacebar release
  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Space' && startTime) {
      event.preventDefault();
      setIsKeyPressed(false); // Indicate the key is no longer pressed
      const duration = Date.now() - startTime; // Calculate press duration
      setStartTime(null); // Reset start time

      // Stop and disconnect the oscillator
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }

      // Determine if it's a dot or dash based on press duration
      const unit = 50; // Base unit for Morse code (50ms)
      const symbol = duration > unit * 2 ? '-' : '.'; // Determine dot or dash
      setUserInput((prev) => prev + symbol); // Append the symbol to user input
    }
  };

  // Handle the user's submission
  const handleSubmit = () => {
    if (userInput === morseCode[currentChar]) {
      setMessage('✅ Correct!');
      updateProgress('encodeProgress');
      getRandomCharacter(); // Move to the next random character
    } else {
      setMessage('❌ Incorrect. Try again!');
    }
  };

  // Reset user input and message
  const handleReset = () => {
    setUserInput('');
    setMessage('');
  };

  // Update the progress in localStorage
  const updateProgress = (key: string) => {
    const progress = parseInt(localStorage.getItem(key) || '0', 10) + 1;
    localStorage.setItem(key, progress.toString());
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      className="flex flex-col items-center outline-none"
    >
      <h1 className="text-2xl mb-4">Press Spacebar to Simulate Morse Code</h1>
      <div className="text-6xl font-bold mb-4">{currentChar}</div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Your Input:</span>
        </label>
        <input
          type="text"
          value={userInput}
          disabled
          className="input input-bordered w-full max-w-xs text-center font-mono text-xl"
        />
      </div>
      <div className="flex space-x-2">
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
        <button onClick={handleReset} className="btn btn-secondary">
          Reset
        </button>
      </div>
      <div className={`mt-4 text-xl ${isKeyPressed ? 'text-green-500' : ''}`}>
        {isKeyPressed ? 'Key Pressed' : message}
      </div>
    </div>
  );
}
