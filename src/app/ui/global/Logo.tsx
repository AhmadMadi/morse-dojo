// src/components/Logo.tsx
import React from 'react';

interface LogoProps {
  theme: string; // Accept the current theme as a prop
}

export default function Logo({ theme }: LogoProps) {
  // Determine the logo color based on the theme
  const fillColor = theme === 'night' ? '#FFFFFF' : '#000000'; // White for dark mode, black for light mode

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="116pt"
      height="117pt"
      viewBox="0 0 116 117"
      preserveAspectRatio="xMidYMid meet"
      fill={fillColor} // Apply dynamic fill color based on the theme
    >
      <g transform="translate(0.000000,117.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M30 580 l0 -550 550 0 550 0 0 550 0 550 -550 0 -550 0 0 -550z m1080 0 l0 -530 -530 0 -530 0 0 530 0 530 530 0 530 0 0 -530z" />
        <path d="M330 805 l0 -35 50 0 50 0 0 35 0 35 -50 0 -50 0 0 -35z" />
        <path d="M530 805 l0 -35 50 0 50 0 0 35 0 35 -50 0 -50 0 0 -35z" />
        <path d="M730 805 l0 -35 50 0 50 0 0 35 0 35 -50 0 -50 0 0 -35z" />
        <path d="M140 580 l0 -40 115 0 115 0 0 40 0 40 -115 0 -115 0 0 -40z" />
        <path d="M470 580 l0 -40 110 0 110 0 0 40 0 40 -110 0 -110 0 0 -40z" />
        <path d="M790 580 l0 -40 115 0 115 0 0 40 0 40 -115 0 -115 0 0 -40z" />
        <path d="M330 355 l0 -35 50 0 50 0 0 35 0 35 -50 0 -50 0 0 -35z" />
        <path d="M530 355 l0 -35 50 0 50 0 0 35 0 35 -50 0 -50 0 0 -35z" />
        <path d="M730 355 l0 -35 50 0 50 0 0 35 0 35 -50 0 -50 0 0 -35z" />
      </g>
    </svg>
  );
}
