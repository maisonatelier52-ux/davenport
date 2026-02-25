import React from 'react';

const AdBanner = () => {
  return (
    /* 1. SEO: <aside> indicates content tangentially related to the main content (like ads).
      2. A11y: aria-label helps screen readers identify this region.
    */
    <aside className="w-full max-w-6xl mx-auto px-4 mb-8" aria-label="Advertisement">
      {/* 3. PERFORMANCE: 'h-[90px]' is crucial here. It prevents 'Cumulative Layout Shift' (CLS)
         by reserving space before the ad image/script loads.
      */}
      <div className="w-full bg-[#d0d3e5a8] h-[90px] flex items-center justify-center border border-gray-100">
        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#cccccc]">
          970x90 Ad
        </span>
      </div>
    </aside>
  );
};

export default AdBanner;