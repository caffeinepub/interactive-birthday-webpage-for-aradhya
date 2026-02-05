import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

interface PreFinalLoadingScreenProps {
  onComplete: () => void;
}

export default function PreFinalLoadingScreen({ onComplete }: PreFinalLoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center space-y-4">
          <div className="text-6xl animate-pulse drop-shadow-2xl">✨</div>
          <h2 className="text-3xl md:text-4xl font-bold text-birthday-purple drop-shadow-md">
            Something special awaits...
          </h2>
          <p className="text-lg text-birthday-pink font-medium">
            Preparing your surprise
          </p>
        </div>

        <div className="space-y-3">
          <Progress 
            value={progress} 
            className="h-3 bg-white/50 shadow-inner"
          />
          <p className="text-center text-sm text-birthday-purple/70 font-medium">
            {Math.round(progress)}%
          </p>
        </div>

        <div className="flex justify-center space-x-2 text-3xl animate-bounce">
          <span className="drop-shadow-lg" style={{ animationDelay: '0s' }}>💝</span>
          <span className="drop-shadow-lg" style={{ animationDelay: '0.2s' }}>💖</span>
          <span className="drop-shadow-lg" style={{ animationDelay: '0.4s' }}>💝</span>
        </div>
      </div>
    </div>
  );
}
