import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Pointer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans text-[#222] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- MAIN FOOTER CONTENT (4 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* COLUMN 1: News */}
          <div>
            <h3 className="font-bold uppercase text-[14px] tracking-wider mb-6 border-b border-gray-200 pb-2">News</h3>
            <ul className="flex flex-col gap-3 text-[13px] font-medium text-gray-600">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Marketing</a></li>
            </ul>
          </div>

          {/* COLUMN 2: Useful Links */}
          <div>
            <h3 className="font-bold uppercase text-[14px] tracking-wider mb-6 border-b border-gray-200 pb-2">Useful Links</h3>
            <ul className="flex flex-col gap-3 text-[13px] font-medium text-gray-600">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Merch</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Help & Support</a></li>
            </ul>
          </div>

          {/* COLUMN 3: Don't miss */}
          <div>
            <h3 className="font-bold uppercase text-[14px] tracking-wider mb-6 border-b border-gray-200 pb-2">Don't miss</h3>
            <div className="flex flex-col gap-6">
{/* Article 1 */}
<div className="flex gap-4 group">
  {/* Image Container with hover zoom effect */}
  <div className="w-20 h-20 bg-gray-100 flex-shrink-0 overflow-hidden relative">
    <img 
      src="/Davenport4-2-1024x683.jpg" 
      alt="Political news coverage"
      className="w-full h-full object-cover transition-transform duration-300"
    />
  </div>
  
  <div>
    <span className="inline-block bg-pink-500 text-white text-[9px] font-bold uppercase px-2 py-0.5 mb-2">
      Celebrity
    </span>
    <h4 className="font-bold text-[13px] leading-snug mb-1">
      <a href="#" className="hover:text-blue-500 transition-colors">
        Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction
      </a>
    </h4>
    <span className="text-[11px] text-gray-400 flex items-center gap-1">
      <span role="img" aria-label="calendar">📅</span> March 26, 2019
    </span>
  </div>
</div>
              {/* Article 2 */}
              <div className="flex gap-4 group">
  {/* Replace the gray box with the image */}
  <div className="w-20 h-20 bg-gray-100 flex-shrink-0 overflow-hidden relative">
    <img 
      src="/Davenport4-2-1024x683.jpg" 
      alt="Man reading newspaper"
      className="w-full h-full object-cover transition-transform duration-300"
    />
  </div>
  
  <div>
    <div className="flex gap-2 mb-2">
      <span className="inline-block bg-blue-500 text-white text-[9px] font-bold uppercase px-2 py-0.5">Business</span>
      <span className="inline-block bg-[#00008B] text-white text-[9px] font-bold uppercase px-2 py-0.5">Politics</span>
    </div>
    <h4 className="font-bold text-[13px] leading-snug mb-1">
      <a href="#" className="hover:text-blue-500 transition-colors">
        Pinterest prices IPO at $19 a share, valuation tops $10 billion
      </a>
    </h4>
    <span className="text-[11px] text-gray-400 flex items-center gap-1">
      <span role="img" aria-label="sponsored">🔔</span> Sponsored content
    </span>
  </div>
</div>
            </div>
          </div>

          {/* COLUMN 4: Trending */}
          <div>
            <h3 className="font-bold uppercase text-[14px] tracking-wider mb-6 border-b border-gray-200 pb-2">Trending</h3>
            <div className="flex flex-col gap-6">
               {/* Article 2 */}
             {/* Article 2 */}
{/* Article 2 */}
<div className="group">
  <div className="relative w-full mb-4 overflow-hidden bg-gray-100">
    {/* h-40 on desktop (md:) 
        aspect-video on mobile (768px and below) for better proportions
    */}
    <div className="relative h-auto aspect-video md:h-40 w-full">
      <img 
        src="/Davenport4-6.jpg" 
        alt="Man reading The Daily newspaper"
        className="w-full h-full object-cover object-top transition-transform duration-500"
      />
    </div>
  </div>
  <span className="text-[11px] text-gray-400 block mb-2">📅 March 25, 2019</span>
  <h4 className="font-bold text-[15px] leading-snug mb-2">
    <a href="#" className="hover:text-blue-500 transition-colors">
      Mitch McConnell Wants to Raise Tobacco Purchasing Age From 18 to 21, Including for Vaping Devices
    </a>
  </h4>
  <span className="text-[11px] text-gray-400">By Davenport</span>
</div> 
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Powered By */}
          <div className="text-[13px] text-gray-500 flex items-center">
            Powered by 
            <span className="text-2xl ml-2 text-black" style={{ fontFamily: 'var(--font-davenport)' }}>Davenport</span>
          </div>

          {/* Center: Subscribe Form */}
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Please enter your e-mail" 
              className="border border-gray-200 bg-gray-50 px-4 py-3 text-[13px] w-full md:w-64 focus:outline-none focus:border-blue-400"
            />
            <button className="bg-[#2196f3] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-2">
            <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white hover:opacity-90 transition-opacity"><Facebook size={16} /></a>
            <a href="#" className="bg-[#c13584] p-2 rounded-full text-white hover:opacity-90 transition-opacity"><Instagram size={16} /></a>
            <a href="#" className="bg-[#1da1f2] p-2 rounded-full text-white hover:opacity-90 transition-opacity"><Twitter size={16} /></a>
            <a href="#" className="bg-[#bd081c] p-2 rounded-full text-white hover:opacity-90 transition-opacity"><Pointer size={16} /></a> {/* Using Pointer for Pinterest as in Header */}
            <a href="#" className="bg-[#ff0000] p-2 rounded-full text-white hover:opacity-90 transition-opacity"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;