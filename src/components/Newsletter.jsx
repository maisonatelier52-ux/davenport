import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="w-full bg-[#f4f4f4] pt-10 pb-10 px-4 mt-20 mb-8 relative overflow-visible">
      {/* Floating Mail Icon Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#222] text-white p-5 rounded-full shadow-lg z-10">
        <Mail size={32} strokeWidth={1.5} />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Header Text */}
        <div className="space-y-4">
          <h4 className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#222]">
            Newsletter
          </h4>
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight">
            Become a Trendsetter
          </h2>
          <p className="text-[16px] md:text-[18px] font-serif italic text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Sign up for Davenport’s Daily Digest and get the best of Davenport, tailored for you.
          </p>
        </div>

        {/* Responsive Subscription Form */}
        <div className="mt-10 flex flex-col sm:flex-row w-full max-w-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
          <input 
            type="email" 
            placeholder="Please enter your e-mail" 
            className="flex-1 px-6 py-4 text-[14px] text-gray-700 bg-white focus:outline-none placeholder:text-gray-400 placeholder:italic min-w-0"
          />
          <button className="bg-[#2196f3] text-white px-10 py-4 text-[13px] font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;