import React from "react";
import Link from "next/link";

const HealthcareSection = ({ healthcareNews }) => {
  return (
    <>
      <div className="border-b-2 border-black">
        <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">Healthcare</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mt-8 mb-8">
        {healthcareNews.map((item) => (
          <Link
            key={item.id}
            href={`/${item.category}/${item.slug}`}
            className="flex flex-col gap-3 group cursor-pointer"
          >
            <div className="flex gap-2">
              {item.badges.map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className={`${badge.color} text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
            <h3 className="text-[17px] font-bold leading-tight text-[#222] group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <div className="text-[11px] text-gray-400 flex items-center gap-1">
              {item.isSponsored ? (
                <span className="flex items-center gap-1">🔔 Sponsored content</span>
              ) : (
                <span className="flex items-center gap-1">📅 {item.date}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HealthcareSection;
