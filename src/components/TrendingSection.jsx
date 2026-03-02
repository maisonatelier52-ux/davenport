import React from "react";
import TrendingCircleCard from "@/components/TrendingCircleCard";

const TrendingSection = ({ trendingSectionData }) => {
  return (
    <section aria-labelledby="trending-circle-heading" className="mt-1 mb-1">
      <div className="border-b-2 border-black mb-1 pb-1">
        <h2 id="trending-circle-heading" className="text-[28px] font-bold text-black leading-tight">
          Trending
        </h2>
        <p className="text-gray-400 text-[14px] font-medium uppercase tracking-tight">
          Other News
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {trendingSectionData.map((item) => (
          <TrendingCircleCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
