/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Original Geometric Monogram (Brain + Puzzle + JDH)
 * Owner: Janjua Digital Hub (JDH)
 */

import React from 'react';

interface JdhMonogramProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export const JdhMonogram: React.FC<JdhMonogramProps> = ({
  size = 64,
  className = '',
  animate = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="JDH Janjua Digital Hub Brand Symbol"
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animate ? 'animate-pulse' : ''}
      >
        <defs>
          <linearGradient id="jdhNavyGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B192C" />
            <stop offset="1" stopColor="#1E3E62" />
          </linearGradient>
          <linearGradient id="jdhCyanGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="jdhGoldGrad" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#FBBF24" />
          </linearGradient>
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Rounded Geometric Shield */}
        <rect
          x="6"
          y="6"
          width="108"
          height="108"
          rx="28"
          fill="url(#jdhNavyGrad)"
          stroke="#06B6D4"
          strokeWidth="2.5"
          strokeOpacity="0.4"
        />

        {/* Interlocking Brain Lobes / Puzzle Interlock Lines */}
        {/* Left Hemisphere Lobe */}
        <path
          d="M60 22 C42 22 30 36 30 52 C30 68 40 76 46 80 C48 88 54 98 60 98"
          stroke="url(#jdhCyanGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Hemisphere Lobe */}
        <path
          d="M60 22 C78 22 90 36 90 52 C90 68 80 76 74 80 C72 88 66 98 60 98"
          stroke="url(#jdhCyanGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Interlocking Puzzle Key Node */}
        <path
          d="M60 32 L60 50 C54 50 50 54 50 60 C50 66 54 70 60 70 L60 88"
          stroke="url(#jdhGoldGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Neural Synapse Nodes (Points of Intellect) */}
        <circle cx="38" cy="46" r="3" fill="#38BDF8" />
        <circle cx="82" cy="46" r="3" fill="#38BDF8" />
        <circle cx="36" cy="64" r="3" fill="#38BDF8" />
        <circle cx="84" cy="64" r="3" fill="#38BDF8" />
        <circle cx="60" cy="60" r="4.5" fill="url(#jdhGoldGrad)" filter="url(#glowEffect)" />

        {/* Modern Geometric J-D-H Typography Monogram */}
        <text
          x="60"
          y="108"
          textAnchor="middle"
          fill="#E2E8F0"
          fontSize="10"
          fontWeight="800"
          letterSpacing="2.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          JDH
        </text>
      </svg>
    </div>
  );
};
