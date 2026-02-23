"use client";

import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, ChevronLeft, ChevronRight, Search, Mail, Youtube, Pointer, Menu, X, ChevronRight as ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Business', href: '#' },
    { name: 'Celebrity', href: '#', badge: 'NEW' },
    { name: 'Contact Us', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    // Changed the outer wrapper to a fragment or a simple div without 'relative'
    <>
      {/* 1. TOP TRENDING BAR */}
      <div className="w-full bg-[#111827] text-white text-[11px] font-bold uppercase tracking-wider">
         <div className="max-w-7xl mx-auto flex items-center h-10 px-4">
            {/* ... trending content ... */}
            <div className="bg-[#1f2937] h-full flex items-center px-4 mr-4 hidden lg:flex">
                <span className="flex items-center gap-2">📅 FRIDAY, 18 APRIL 2025</span>
            </div>
            <div className="bg-[#0f172a] h-full flex items-center px-6 mr-4">TRENDING</div>
            <div className="flex-1 px-2 truncate text-[12px] font-medium normal-case">
              Wall Street slips, weighed down by healthcare plunge
            </div>
            <div className="flex border-l border-gray-700 h-full">
               <button className="px-3 hover:bg-blue-600 border-r border-gray-700"><ChevronLeft size={14} /></button>
               <button className="px-3 hover:bg-blue-600"><ChevronRight size={14} /></button>
            </div>
         </div>
      </div>

      {/* 2 & 3. SECONDARY NAV & LOGO SECTION */}
      <div className="w-full bg-white">
        <div className="border-b border-gray-100 hidden md:block">
           <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-800">
             <nav className="flex gap-7">
               <a href="#" className="hover:text-blue-500">Editorials</a>
               <a href="#" className="hover:text-blue-500">Team</a>
               <a href="#" className="hover:text-blue-500">Advert</a>
               <a href="#" className="hover:text-blue-500 border-b-2 border-black pb-1">Today's Opinion</a>
             </nav>
             <nav className="flex gap-7">
               <a href="#" className="hover:text-blue-500">Subscribe</a>
               <a href="#" className="hover:text-blue-500">Purchase Theme</a>
             </nav>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 flex justify-between items-center">
          <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 border border-gray-200 text-black">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#2196f3] text-white px-6 py-3 flex items-center gap-2 font-bold text-xs uppercase hover:bg-blue-600">
              <Mail size={16} /> Subscribe Now
            </button>
          </div>
          <h1 className="text-4xl md:text-7xl font-normal text-black" style={{ fontFamily: 'var(--font-davenport)' }}>Davenport</h1>
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex gap-3 text-black"><Facebook size={18} /><Instagram size={18} /><Twitter size={18} /><Youtube size={18} /></div>
             <Search size={20} className="cursor-pointer stroke-[3]" />
          </div>
        </div>
      </div>

{/* 4. PRIMARY NAVIGATION - Updated for visibility */}
<div className="sticky top-0 z-[100] w-full bg-white border-t border-black border-b border-gray-200 hidden md:block shadow-md">
  <nav className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-12 py-4 font-bold uppercase text-[13px] tracking-[0.15em]">
    {navLinks.map((link) => (
      <a 
        key={link.name} 
        href={link.href} 
        // Added 'text-black' specifically to fix the transparency issue
        className="text-black hover:text-blue-500 flex items-center gap-1 transition-colors"
      >
        {link.name}
        {link.badge && (
          <span className="bg-[#fecaca] text-[#ef4444] text-[9px] px-1 py-0.5 rounded-sm">{link.badge}</span>
        )}
      </a>
    ))}
  </nav>
</div>

      {/* 5. MOBILE MENU - Sticky for mobile view */}
      <div className={`sticky top-0 z-[100] md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] shadow-lg' : 'max-h-0'}`}>
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-none">
              <span className="font-bold text-[14px] uppercase tracking-wider">{link.name}</span>
              <ArrowRight size={16} className="text-gray-400" />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;