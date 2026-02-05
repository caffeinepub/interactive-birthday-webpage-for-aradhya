import { Button } from '@/components/ui/button';
import { RotateCcw, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FinalScreenProps {
  onRestart: () => void;
}

export default function FinalScreen({ onRestart }: FinalScreenProps) {
  const [showHearts, setShowHearts] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowHearts(true);
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
      
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-birthday-pink animate-float drop-shadow-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6,
                fontSize: `${20 + Math.random() * 30}px`
              }}
              fill="currentColor"
            />
          ))}
        </div>
      )}

      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 text-center relative z-10 border border-white/50">
        <div className="space-y-4">
          <div className="text-7xl animate-bounce drop-shadow-2xl">🎉</div>
          <h1 className="text-4xl md:text-5xl font-display text-birthday-purple drop-shadow-md">
            Happy 15th Birthday, Aradhya!
          </h1>
          <p className="text-xl md:text-2xl text-birthday-pink font-semibold drop-shadow-sm">
            May your day be filled with love, laughter, and endless joy! 💖
          </p>
          <div className="flex justify-center space-x-4 text-4xl py-4">
            <span className="animate-bounce drop-shadow-lg" style={{ animationDelay: '0s' }}>🎂</span>
            <span className="animate-bounce drop-shadow-lg" style={{ animationDelay: '0.1s' }}>🎈</span>
            <span className="animate-bounce drop-shadow-lg" style={{ animationDelay: '0.2s' }}>🎁</span>
            <span className="animate-bounce drop-shadow-lg" style={{ animationDelay: '0.3s' }}>✨</span>
          </div>
        </div>

        <div 
          className={`transition-all duration-1000 ${
            showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border-2 border-birthday-pink/20 shadow-inner backdrop-blur-sm">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-serif italic drop-shadow-sm">
              Today the world feels gentler because you arrived in it.
              <br />
              <br />
              May this new year hold you softly, return your kindness to you in quiet ways, and remind you—again and again—that your existence is a gift time itself celebrates.
            </p>
          </div>
        </div>

        <Button 
          onClick={onRestart}
          size="lg"
          variant="outline"
          className="border-2 border-birthday-purple text-birthday-purple hover:bg-birthday-purple hover:text-white text-lg px-6 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          Experience Again
        </Button>

        <footer className="pt-8 border-t border-birthday-pink/20">
          <p className="text-sm text-gray-600">
            © 2026. Built with <Heart className="inline h-4 w-4 text-birthday-pink fill-current" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-birthday-purple hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
