import { useState } from 'react';

interface FramedPhotoProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function FramedPhoto({ src, alt = "Personal photo", className = "" }: FramedPhotoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`framed-photo-container ${className}`}>
      <div className="framed-photo-wrapper">
        <div className="framed-photo-inner">
          {!imageLoaded && !imageError && (
            <div className="framed-photo-skeleton" />
          )}
          {imageError ? (
            <div className="flex items-center justify-center h-full text-center p-4">
              <span className="text-sm text-gray-500">Photo unavailable</span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              className={`framed-photo-image ${imageLoaded ? 'loaded' : ''}`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </div>
        <div className="framed-photo-sparkle framed-photo-sparkle-1" />
        <div className="framed-photo-sparkle framed-photo-sparkle-2" />
        <div className="framed-photo-sparkle framed-photo-sparkle-3" />
        <div className="framed-photo-sparkle framed-photo-sparkle-4" />
      </div>
    </div>
  );
}
