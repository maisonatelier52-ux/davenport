import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Calendar } from "lucide-react";

const MostPopularCard = ({ item }) => {
  return (
    <article className="flex flex-col group h-full">
      <div className="relative w-full aspect-video overflow-hidden mb-4">
        <Link href={`/${item.category}/${item.slug}`}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {item.badge && (
            <span className="absolute top-0 right-0 bg-[#f69a4d] text-white font-bold px-2 py-1 text-sm z-10">
              {item.badge}
            </span>
          )}

          <div className="absolute bottom-4 left-4 flex gap-1 z-10">
            <span
              className={`${item.categoryColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}
            >
              {item.categoryLabel}
            </span>
            {item.secondaryCategory && (
              <span
                className={`${item.secondaryColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}
              >
                {item.secondaryCategory}
              </span>
            )}
          </div>
        </Link>
      </div>

      <div className="flex flex-col flex-1">
        <div className="text-[11px] text-gray-400 mb-2 flex items-center gap-1">
          {item.isSponsored ? (
            <>
              <Bell size={11} /> Sponsored content
            </>
          ) : (
            <>
              <Calendar size={11} /> <time>{item.date}</time>
            </>
          )}
        </div>

        <h3 className="font-bold text-[16px] text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/${item.category}/${item.slug}`}>{item.title}</Link>
        </h3>
      </div>
    </article>
  );
};

export default MostPopularCard;
