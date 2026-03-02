import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";

const InOtherNewsSection = ({ featured, grid }) => {
  return (
    <>
      <div className="border-b-2 border-black mb-8">
        <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">In other News</h2>
        <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">
          Something special from all over the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Featured large card */}
        <Link
          href={`/${featured.category || "business"}/${featured.slug}`}
          className="relative group cursor-pointer overflow-hidden h-125 md:h-auto border border-gray-200 block"
        >
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors z-10" />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-12 pb-12 md:pb-2 text-white z-20">
            <div className="flex gap-2 mb-4 md:pb-40">
              {featured.categories.map((cat, idx) => (
                <span
                  key={idx}
                  className={`${cat.color} text-[10px] font-bold px-3 py-1 uppercase tracking-wider`}
                >
                  {cat.label}
                </span>
              ))}
            </div>
            {featured.isSponsored && (
              <div className="text-[12px] font-medium mb-2 flex items-center gap-1">
                🔔 Sponsored content
              </div>
            )}
            <h3 className="text-2xl font-bold leading-tight mb-4 max-w-md">
              {featured.title}
            </h3>
            <div className="text-[12px] font-bold uppercase tracking-widest mb-6">
              By {featured.author}
            </div>
            <p className="text-[16px] italic font-serif leading-relaxed max-w-sm border-t border-white/20 pt-4">
              "{featured.quote}"
            </p>
          </div>
        </Link>

        {/* Grid of 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {grid.map((news) => (
            <NewsCard
              key={news.id}
              slug={news.slug}
              category={news.category}
              image={news.image}
              categoryLabel={news.categoryLabel}
              categoryColor={news.categoryColor}
              date={news.date}
              author={news.author}
              title={news.title}
              description={news.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InOtherNewsSection;
