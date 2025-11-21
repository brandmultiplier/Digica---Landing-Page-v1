import React, { useState, useEffect } from 'react';
export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState('/logo-footer.png');
  useEffect(() => {
    // Debug: Log the image path being used
    console.log('Attempting to load image from:', imgSrc);
  }, [imgSrc]);
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Failed to load footer logo from:', e.currentTarget.src);
    console.error('Current href:', window.location.href);
    console.error('Expected image URL:', window.location.origin + '/logo-footer.png');
    setImgError(true);
  };
  const handleImageLoad = () => {
    console.log('Footer logo loaded successfully from:', imgSrc);
  };
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo Section */}
        <a href="#" className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
          {!imgError ? (
            <img
              src={imgSrc}
              alt="Digica Industrial AI"
              width="150"
              height="50"
              className="h-9 w-auto object-contain brightness-0 invert"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : (
            // Fallback Text Logo (White for Footer)
            <div className="flex items-center gap-1">
               <span className="font-slab font-bold text-2xl tracking-tight text-white">
                 digica<span className="text-digica-red text-3xl leading-[0]">.</span>
               </span>
            </div>
          )}
        </a>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Digica Industrial AI. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};