"use client";

import { useEffect, useRef } from "react";

export default function StickyAd() {
  const adRef = useRef(null);

  useEffect(() => {
    const sentinel = document.getElementById("ad-sentinel");
    const ad = adRef.current;
    if (!sentinel || !ad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          // sentinel scrolled above viewport — release sticky
          ad.style.position = "relative";
          ad.style.top = "auto";
        } else {
          // sentinel still in/below viewport — stay sticky
          ad.style.position = "sticky";
          ad.style.top = "-120px";
        }
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={adRef} className="sticky top-32">
      <div className="bg-indigo-100 px-6 py-12 flex flex-col items-center text-center mb-6">
        <p className="font-serif text-4xl font-black text-gray-900 tracking-tight mb-2">
          Davenport
        </p>
        <p className="text-sm text-gray-600 mb-8 font-medium">Follow the News</p>
        <div className="w-full h-px bg-gray-300 mb-8" />
        <p className="text-base text-gray-700 font-semibold mb-1">Blog and Magazine</p>
        <p className="text-base text-gray-700 font-semibold mb-10">WordPress Theme</p>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          Readers in Europe<br />Subscribe for $1 a week
        </p>
        <button className="bg-[#2196f3] hover:bg-blue-600 text-white text-sm font-bold px-8 py-3 rounded-full w-full transition-colors">
          BUY NOW
        </button>
      </div>
    </div>
  );
}