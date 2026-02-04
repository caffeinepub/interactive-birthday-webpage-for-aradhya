import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    const transitionTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(transitionTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent animate-pulse-slow" />
      
      <div className="text-center space-y-8 max-w-md w-full relative z-10">
        <div className="text-8xl animate-bounce drop-shadow-2xl">🎂</div>
        <h1 className="text-3xl md:text-4xl font-bold text-birthday-purple drop-shadow-lg">
          Loading your surprise...
        </h1>
        <div className="w-full px-4">
          <Progress 
            value={progress} 
            className="h-3 bg-white/50 shadow-lg backdrop-blur-sm border border-white/30" 
          />
        </div>
      </div>
    </div>
  );
}
