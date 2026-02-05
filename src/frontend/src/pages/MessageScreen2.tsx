import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FramedPhoto from '@/components/FramedPhoto';
import PrimaryCtaButton from '@/components/PrimaryCtaButton';

interface MessageScreen2Props {
  onNext: () => void;
}

export default function MessageScreen2({ onNext }: MessageScreen2Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
      
      <img 
        src="/assets/generated/bunting-banner.dim_800x100.png" 
        alt="Bunting banner" 
        className="absolute top-0 left-0 w-full h-24 object-cover drop-shadow-lg"
      />

      <div className="max-w-2xl w-full mt-16 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-display text-birthday-purple mb-2 drop-shadow-md">
            A Special Message
          </h2>
          {!isOpen && (
            <p className="text-lg text-birthday-pink font-medium animate-pulse">Tap to open</p>
          )}
        </div>

        <div 
          className={`bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl shadow-2xl p-8 md:p-12 cursor-pointer transition-all duration-500 border-2 border-white/50 ${
            isOpen ? 'scale-100' : 'scale-95 hover:scale-100 hover:shadow-3xl'
          }`}
          onClick={() => setIsOpen(true)}
        >
          <div className={`space-y-6 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <div className="flex justify-center mb-6">
              <FramedPhoto 
                src="/assets/IMG-20260205-WA0000.jpg" 
                alt="Special memory"
                className="animate-fade-in"
              />
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-5xl drop-shadow-lg">🎈</div>
                <div className="text-5xl drop-shadow-lg">🎈</div>
                <div className="text-5xl drop-shadow-lg">🎈</div>
                <div className="text-5xl drop-shadow-lg">🎈</div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-birthday-purple text-center font-bold leading-relaxed drop-shadow-md">
              Happy Birthday to you
            </p>
            <div className="flex justify-center space-x-2 text-3xl">
              <span className="drop-shadow-lg">⭐</span>
              <span className="drop-shadow-lg">💖</span>
              <span className="drop-shadow-lg">⭐</span>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="flex justify-center mt-8 animate-fade-in">
            <PrimaryCtaButton 
              onClick={onNext}
              variant="purple"
              className="text-xl px-8 py-6"
            >
              Next <ArrowRight className="ml-2 h-6 w-6" />
            </PrimaryCtaButton>
          </div>
        )}
      </div>
    </div>
  );
}
