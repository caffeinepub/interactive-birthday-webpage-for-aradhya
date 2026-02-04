import { useState, useEffect } from 'react';
import Balloon from '@/components/Balloon';

interface BalloonScreenProps {
  onNext: () => void;
}

export default function BalloonScreen({ onNext }: BalloonScreenProps) {
  const [poppedBalloons, setPoppedBalloons] = useState<boolean[]>([false, false, false, false]);
  const balloonColors = ['#FFB6D9', '#E8B4F0', '#FFC9E0', '#D4A5F5'];

  const handleBalloonPop = (index: number) => {
    const newPopped = [...poppedBalloons];
    newPopped[index] = true;
    setPoppedBalloons(newPopped);

    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0vBSh+zPDajzsKElyx6OyrWBQLSKDf8sFuJAUuhM/z24k2CBhku+zooVARC0yl4fG5ZRwFNo3V7859LwUofsz');
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    if (poppedBalloons.every(popped => popped)) {
      setTimeout(onNext, 1500);
    }
  }, [poppedBalloons, onNext]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
      
      <img 
        src="/assets/generated/bunting-banner.dim_800x100.png" 
        alt="Bunting banner" 
        className="absolute top-0 left-0 w-full h-24 object-cover drop-shadow-lg"
      />

      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 text-center mt-16 relative z-10 border border-white/50">
        <h2 className="text-3xl md:text-4xl font-bold text-birthday-purple drop-shadow-md">
          Pop all 4 balloons
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8">
          {balloonColors.map((color, index) => (
            <Balloon
              key={index}
              color={color}
              isPopped={poppedBalloons[index]}
              onPop={() => handleBalloonPop(index)}
            />
          ))}
        </div>

        <p className="text-lg text-gray-600 font-semibold">
          {poppedBalloons.filter(p => p).length} / 4 popped
        </p>
      </div>
    </div>
  );
}
