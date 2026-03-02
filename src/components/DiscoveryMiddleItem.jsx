import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Calendar } from "lucide-react";

const DiscoveryMiddleItem = ({ item }) => {
  return (
    <article className="flex gap-5 border-b border-gray-100 pb-8 mb-6 last:border-0 last:mb-0 last:pb-0 group">
      <div className="relative w-[140px] h-[95px] flex-shrink-0 overflow-hidden">
        <Link href={`/${item.category}/${item.slug}`}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="140px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {item.badge && (
            <span className="absolute top-0 right-0 bg-[#f69a4d] text-white font-bold px-2 py-0.5 text-xs z-10">
              {item.badge}
            </span>
          )}
        </Link>
      </div>

      <div className="flex flex-col flex-1 min-w-0 justify-between py-0.5">
        <div>
          <div className="flex flex-wrap gap-1 mb-2">
            <span
              className={`${item.categoryColor} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}
            >
              {item.categoryLabel}
            </span>
            {item.secondaryCategory && (
              <span
                className={`${item.secondaryColor} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}
              >
                {item.secondaryCategory}
              </span>
            )}
          </div>

          <h4 className="font-bold text-[16px] text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
            <Link href={`/${item.category}/${item.slug}`}>{item.title}</Link>
          </h4>
        </div>

        <div className="text-[11px] text-gray-400 mt-2 flex items-center gap-1">
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
      </div>
    </article>
  );
};

export default DiscoveryMiddleItem;
