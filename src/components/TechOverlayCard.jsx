import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Calendar } from "lucide-react";

const TechOverlayCard = ({ item }) => {
  return (
    <article className="relative w-full aspect-square md:aspect-[4/3] group overflow-hidden">
      <Link href={`/${item.category}/${item.slug}`} className="block w-full h-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

        <div className="absolute top-6 left-0 right-0 flex justify-center gap-1 z-10">
          {item.categories ? (
            item.categories.map((cat, idx) => (
              <span
                key={idx}
                className={`${cat.color} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}
              >
                {cat.label}
              </span>
            ))
          ) : (
            <span
              className={`${item.categoryColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}
            >
              {item.categoryLabel}
            </span>
          )}
        </div>

        <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-10 text-white z-20">
          <div className="text-[11px] font-medium mb-3 opacity-90 flex items-center gap-1.5">
            {item.isSponsored ? (
              <>
                <Bell size={12} /> Sponsored content
              </>
            ) : (
              <>
                <Calendar size={12} /> <time>{item.date}</time>
              </>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 drop-shadow-sm group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>

          <div className="text-[11px] font-bold uppercase tracking-widest mb-4 opacity-80">
            By {item.author}
          </div>

          <p className="text-[14px] leading-relaxed mb-6 opacity-90 line-clamp-2 md:line-clamp-3 max-w-lg">
            {item.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default TechOverlayCard;
