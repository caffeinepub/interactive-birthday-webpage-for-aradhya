import { useState } from 'react';

interface BalloonProps {
  color: string;
  isPopped: boolean;
  onPop: () => void;
}

export default function Balloon({ color, isPopped, onPop }: BalloonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isPopped && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        onPop();
      }, 100);
    }
  };

  if (isPopped) {
    return (
      <div className="flex items-center justify-center h-32">
        <span className="text-4xl animate-ping">💥</span>
      </div>
    );
  }

  return (
    <div 
      className={`cursor-pointer transition-transform duration-200 hover:scale-110 ${
        isAnimating ? 'animate-pop' : 'animate-float'
      }`}
      onClick={handleClick}
      style={{ animationDelay: `${Math.random() * 0.5}s` }}
    >
      <svg
        viewBox="0 0 100 140"
        className="w-full h-32"
      >
        {/* Balloon */}
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="45"
          fill={color}
          className="drop-shadow-lg"
        />
        {/* Highlight */}
        <ellipse
          cx="40"
          cy="40"
          rx="12"
          ry="18"
          fill="white"
          opacity="0.4"
        />
        {/* String */}
        <line
          x1="50"
          y1="95"
          x2="50"
          y2="130"
          stroke={color}
          strokeWidth="1.5"
          className="opacity-70"
        />
        {/* Knot */}
        <circle
          cx="50"
          cy="95"
          r="3"
          fill={color}
          className="opacity-80"
        />
      </svg>
    </div>
  );
}
