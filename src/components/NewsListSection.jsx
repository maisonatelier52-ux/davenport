"use client";

import React from "react";
import NewsListCard from "@/components/NewsListCard";
import TrendingCard from "@/components/TrendingCard";
import CategoryCard from "@/components/CategoryCard";
import StickyAd from "@/components/StickyAd";

const NewsListSection = ({ newsCards, trendingNews, categories }) => {
  return (
    <div className="mt-10 flex flex-col lg:flex-row gap-8">
      {/* LEFT COLUMN */}
      <div className="flex-1 min-w-0">
        {newsCards.slice(0, 4).map((card) => (
          <NewsListCard key={card.id} card={card} />
        ))}

        <div className="mt-2 mb-6 w-full h-[90px] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm tracking-widest">
          728×90 AD
        </div>

        <div id="ad-sentinel" className="h-0 w-full" />

        {newsCards.slice(4).map((card) => (
          <NewsListCard key={card.id} card={card} />
        ))}
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0">
        <StickyAd />

        <div className="mb-6 mt-14">
          <h3 className="font-bold text-base text-gray-900 text-center pb-2 mb-4 border-b-2 border-gray-800">
            Trending today
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {trendingNews.map((item) => (
              <TrendingCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-base text-gray-900 text-center pb-2 mb-4 border-b-2 border-gray-800">
            Categories
          </h3>
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <CategoryCard key={cat.label} cat={cat} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NewsListSection;
