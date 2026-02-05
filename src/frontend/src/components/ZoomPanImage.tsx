import { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useZoomPan } from '@/hooks/useZoomPan';

interface ZoomPanImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function ZoomPanImage({ src, alt, className = '', containerClassName = '' }: ZoomPanImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { containerRef, state, isDragging, zoomIn, zoomOut, reset, canZoomIn, canZoomOut } = useZoomPan({
    minScale: 1,
    maxScale: 4,
    initialScale: 1,
  });

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8 ${containerClassName}`}>
        <div className="text-center space-y-2">
          <p className="text-red-800 font-semibold text-lg">Failed to load image</p>
          <p className="text-red-600 text-sm">Please check your connection and try again</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Zoom controls */}
      <div className="absolute top-2 right-2 z-20 flex flex-col gap-1 bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-lg">
        <Button
          size="icon"
          variant="ghost"
          onClick={zoomIn}
          disabled={!canZoomIn}
          className="h-8 w-8 hover:bg-amber-100"
          title="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={zoomOut}
          disabled={!canZoomOut}
          className="h-8 w-8 hover:bg-amber-100"
          title="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={reset}
          disabled={state.scale === 1}
          className="h-8 w-8 hover:bg-amber-100"
          title="Reset zoom"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Image viewport */}
      <div
        ref={containerRef}
        className={`relative overflow-hidden rounded-lg ${isDragging ? 'cursor-grabbing' : state.scale > 1 ? 'cursor-grab' : 'cursor-default'}`}
        style={{ touchAction: 'none' }}
      >
        {!imageLoaded && (
          <div className="w-full aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg animate-pulse" />
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-700 select-none ${className} ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
          style={{
            transform: `scale(${state.scale}) translate(${state.translateX / state.scale}px, ${state.translateY / state.scale}px)`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            objectFit: 'contain',
            maxHeight: '70vh',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          draggable={false}
        />
      </div>

      {/* Zoom hint */}
      {imageLoaded && state.scale === 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-amber-900/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm animate-fade-in">
          Pinch or scroll to zoom
        </div>
      )}
    </div>
  );
}
