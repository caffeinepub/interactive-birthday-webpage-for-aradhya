import { ArrowRight } from 'lucide-react';
import ZoomPanImage from '@/components/ZoomPanImage';
import PrimaryCtaButton from '@/components/PrimaryCtaButton';

interface HandwrittenNoteScreenProps {
  onNext: () => void;
}

export default function HandwrittenNoteScreen({ onNext }: HandwrittenNoteScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4 md:p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent" />
      
      {/* Subtle sparkle decorations */}
      <div className="absolute top-10 left-10 w-8 h-8 opacity-40">
        <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" />
      </div>
      <div className="absolute top-20 right-16 w-6 h-6 opacity-30">
        <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-16 left-20 w-7 h-7 opacity-35">
        <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-24 right-12 w-8 h-8 opacity-40">
        <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-4xl w-full space-y-6 relative z-10">
        <div className="text-center space-y-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-display text-amber-900 drop-shadow-md">
            A Personal Note for You
          </h2>
          <p className="text-lg text-amber-700 font-medium">
            From my heart to yours
          </p>
        </div>

        {/* Handwritten note card with premium decoration */}
        <div className="relative group">
          {/* Glow effect behind the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 via-orange-300/40 to-amber-400/40 rounded-2xl blur-2xl scale-105 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Main card container */}
          <div className="relative bg-gradient-to-br from-white via-amber-50/50 to-white rounded-2xl shadow-2xl p-3 md:p-6 border-4 border-amber-200/60 backdrop-blur-sm">
            {/* Inner shadow frame */}
            <div className="relative rounded-xl overflow-hidden shadow-inner bg-gradient-to-br from-amber-50/30 to-white/30 p-2 md:p-4">
              {/* Corner sparkles */}
              <div className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 opacity-70 z-10 pointer-events-none">
                <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" />
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 opacity-70 z-10 pointer-events-none">
                <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
              <div className="absolute bottom-2 left-2 w-6 h-6 md:w-8 md:h-8 opacity-70 z-10 pointer-events-none">
                <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 opacity-70 z-10 pointer-events-none">
                <img src="/assets/generated/stars-sparkles-transparent.dim_200x200.png" alt="" className="w-full h-full animate-pulse" style={{ animationDelay: '0.9s' }} />
              </div>

              {/* The handwritten note image with zoom/pan */}
              <ZoomPanImage
                src="/assets/file_000000003bac71fabf4ac73b0cc4e88f.png"
                alt="Handwritten birthday note for Aradhya"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in pt-4">
          <PrimaryCtaButton 
            onClick={onNext}
            variant="amber"
            className="text-xl px-8 py-6"
          >
            Continue <ArrowRight className="ml-2 h-6 w-6" />
          </PrimaryCtaButton>
        </div>
      </div>
    </div>
  );
}
