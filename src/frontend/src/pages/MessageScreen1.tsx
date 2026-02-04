import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface MessageScreen1Props {
  onNext: () => void;
}

export default function MessageScreen1({ onNext }: MessageScreen1Props) {
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
          <h2 className="text-3xl md:text-4xl font-bold text-birthday-purple mb-2 drop-shadow-md">
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
          <div className={`space-y-4 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <p className="text-lg md:text-xl text-birthday-purple leading-relaxed drop-shadow-sm">
              Happy Birthday to you! 🎉
            </p>
            <p className="text-lg md:text-xl text-birthday-purple leading-relaxed drop-shadow-sm">
              May this special day bring you endless joy and make your heart happy. You're truly one of a kind, and I just want you to know how special you are. Keep being the amazing person you are, spreading joy wherever you go. Wishing you endless happiness, success, and all the sweet things life has to offer. 💖
            </p>
          </div>
        </div>

        {isOpen && (
          <div className="flex justify-center mt-8 animate-fade-in">
            <Button 
              onClick={onNext}
              size="lg"
              className="bg-birthday-purple hover:bg-birthday-purple/90 text-white text-xl px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30"
            >
              Next <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
