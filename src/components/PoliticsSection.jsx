import React from "react";
import NewsCard from "@/components/NewsCard";

const PoliticsSection = ({ politicsNews, secondaryNews }) => {
  return (
    <>
      <div className="border-b-2 border-black mb-6">
        <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">U.S</h2>
        <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">
          Latest events and news
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {politicsNews.map((news) => (
          <NewsCard
            key={news.id}
            slug={news.slug}
            category={news.category}
            image={news.image}
            categoryLabel={news.categoryLabel}
            categoryColor={news.categoryColor}
            date={news.date}
            isSponsored={news.isSponsored}
            author={news.author}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8 mb-7">
        {secondaryNews.map((news) => (
          <NewsCard
            key={news.id}
            slug={news.slug}
            category={news.category}
            image={news.image}
            categoryLabel={news.categoryLabel}
            categoryColor={news.categoryColor}
            date={news.date}
            isSponsored={news.isSponsored}
            author={news.author}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
    </>
  );
};

export default PoliticsSection;
