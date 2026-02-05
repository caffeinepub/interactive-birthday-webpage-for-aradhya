import { useEffect, useState } from 'react';
import Confetti from '@/components/Confetti';
import PrimaryCtaButton from '@/components/PrimaryCtaButton';

interface CakeScreenProps {
  onNext: () => void;
}

export default function CakeScreen({ onNext }: CakeScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 relative overflow-hidden">
      {showConfetti && <Confetti />}
      
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
      
      <img 
        src="/assets/generated/bunting-banner.dim_800x100.png" 
        alt="Bunting banner" 
        className="absolute top-0 left-0 w-full h-24 object-cover drop-shadow-lg"
      />

      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 text-center mt-16 relative z-10 border border-white/50">
        <h1 className="text-4xl md:text-5xl font-display text-birthday-purple drop-shadow-md">
          Happy Birthday, Aradhya!
        </h1>

        <div className="relative group">
          <img 
            src="/assets/generated/pink-birthday-cake.dim_400x400.png" 
            alt="Birthday cake" 
            className="w-64 h-64 mx-auto animate-pulse-gentle group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-6xl animate-bounce drop-shadow-lg">🎉</div>
          </div>
        </div>

        <PrimaryCtaButton 
          onClick={onNext}
          variant="purple"
          className="text-xl px-8 py-6"
        >
          Pop the Balloons →
        </PrimaryCtaButton>
      </div>
    </div>
  );
}
