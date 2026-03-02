import React from "react";
import Link from "next/link";
import Image from "next/image";

const TrendingCircleCard = ({ item }) => {
  return (
    <article className="flex gap-5 items-start group">
      <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28">
        <Link href={`/${item.category}/${item.slug}`} className="block w-full h-full relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 96px, 112px"
            className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
          />
          {item.badge && (
            <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-[#f69a4d] text-white font-bold text-[11px] px-2 py-1 shadow-sm z-10">
              {item.badge}
            </span>
          )}
        </Link>
      </div>

      <div className="flex-1 min-w-0 pt-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {item.categories.map((cat, idx) => (
            <span
              key={idx}
              className={`${cat.color} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}
            >
              {cat.label}
            </span>
          ))}
        </div>

        <h4 className="font-bold text-[15px] md:text-[16px] text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
          <Link href={`/${item.category}/${item.slug}`}>{item.title}</Link>
        </h4>
      </div>
    </article>
  );
};

export default TrendingCircleCard;
