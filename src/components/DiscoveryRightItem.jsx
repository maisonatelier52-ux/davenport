import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

const DiscoveryRightItem = ({ item }) => {
  return (
    <article className="flex flex-col border-b border-gray-100 pb-5 mb-5 last:border-0 last:mb-0 group">
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

      <h4 className="font-bold text-[15px] text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
        <Link href={`/${item.category}/${item.slug}`}>{item.title}</Link>
      </h4>

      <div className="text-[11px] text-gray-400 flex items-center gap-1">
        <Calendar size={11} /> <time>{item.date}</time>
      </div>
    </article>
  );
};

export default DiscoveryRightItem;
