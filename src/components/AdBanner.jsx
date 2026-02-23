import React from 'react';

const AdBanner = () => {
  return (
    /* Change 'my-12' or 'mt-12' to 'mb-12' to pull the banner up */
    <div className="w-full max-w-6xl mx-auto px-4 mb-12">
      <div className="w-full bg-[#f2f2f2] h-[90px] flex items-center justify-center border border-gray-100">
        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#cccccc]">
          970x90 Ad
        </span>
      </div>
    </div>
  );
};

export default AdBanner;