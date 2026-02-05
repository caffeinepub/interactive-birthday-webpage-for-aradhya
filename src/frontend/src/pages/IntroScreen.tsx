import { Gift } from 'lucide-react';
import PrimaryCtaButton from '@/components/PrimaryCtaButton';

interface IntroScreenProps {
  onNext: () => void;
}

export default function IntroScreen({ onNext }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
      
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 text-center relative z-10 border border-white/50">
        <div className="flex justify-center">
          <img 
            src="/assets/generated/cute-panda-character.dim_300x300.png" 
            alt="Cute character" 
            className="w-48 h-48 animate-bounce drop-shadow-2xl"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display text-birthday-purple leading-tight drop-shadow-md">
            A Cutiepie was born today, 15 years ago!
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-birthday-pink drop-shadow-sm">
            Yes, it's YOU, Aradhya!
          </p>
          <p className="text-xl text-gray-600 font-medium">
            A little surprise awaits...
          </p>
        </div>

        <PrimaryCtaButton 
          onClick={onNext}
          variant="pink"
          className="text-xl px-8 py-6"
        >
          <Gift className="mr-2 h-6 w-6" />
          Start the surprise
        </PrimaryCtaButton>
      </div>
    </div>
  );
}
