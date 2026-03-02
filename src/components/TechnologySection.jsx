import React from "react";
import TechOverlayCard from "@/components/TechOverlayCard";

const TechnologySection = ({ technologyNews }) => {
  return (
    <section aria-labelledby="tech-heading" className="mt-16 mb-20">
      <div className="border-b-2 border-black mb-8 pb-1">
        <h2 id="tech-heading" className="text-[28px] font-bold text-black leading-tight">
          Technology
        </h2>
        <p className="text-gray-400 text-[14px] font-medium uppercase tracking-tight">
          Hi-Tech news
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologyNews.map((item) => (
          <TechOverlayCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
