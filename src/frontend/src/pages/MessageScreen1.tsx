import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FramedPhoto from '@/components/FramedPhoto';
import PrimaryCtaButton from '@/components/PrimaryCtaButton';

interface MessageScreen1Props {
  onNext: () => void;
}

export default function MessageScreen1({ onNext }: MessageScreen1Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-3 sm:p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
      
      <img 
        src="/assets/generated/bunting-banner.dim_800x100.png" 
        alt="Bunting banner" 
        className="absolute top-0 left-0 w-full h-16 sm:h-24 object-cover drop-shadow-lg"
      />

      <div className="max-w-2xl w-full mt-12 sm:mt-16 relative z-10">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-birthday-purple mb-2 drop-shadow-md px-2">
            A Special Message
          </h2>
          {!isOpen && (
            <p className="text-base sm:text-lg text-birthday-pink font-medium animate-pulse">Tap to open</p>
          )}
        </div>

        <div 
          className={`bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-12 cursor-pointer transition-all duration-500 border-2 border-white/50 overflow-hidden ${
            isOpen ? 'scale-100' : 'scale-95 hover:scale-100 hover:shadow-3xl'
          }`}
          onClick={() => setIsOpen(true)}
        >
          <div className={`space-y-4 sm:space-y-6 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <div className="flex justify-center mb-4 sm:mb-6">
              <FramedPhoto 
                src="/assets/IMG-20260205-WA0000.jpg" 
                alt="Special memory"
                className="animate-fade-in"
              />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-birthday-purple leading-relaxed drop-shadow-sm">
              Happy Birthday to you! 🎉
            </p>
            <p className="text-base sm:text-lg md:text-xl text-birthday-purple leading-relaxed drop-shadow-sm">
              May this special day bring you endless joy and make your heart happy. You're truly one of a kind, and I just want you to know how special you are. Keep being the amazing person you are, spreading joy wherever you go. Wishing you endless happiness, success, and all the sweet things life has to offer. 💖
            </p>
          </div>
        </div>

        {isOpen && (
          <div className="flex justify-center mt-6 sm:mt-8 animate-fade-in px-2">
            <PrimaryCtaButton 
              onClick={onNext}
              variant="purple"
              className="text-lg sm:text-xl px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto"
            >
              Next <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </PrimaryCtaButton>
          </div>
        )}
      </div>
    </div>
  );
}
