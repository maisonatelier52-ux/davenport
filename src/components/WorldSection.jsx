import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Share2 } from "lucide-react";

const WorldSection = ({ mainArticle, sidebar }) => {
  return (
    <>
      <div className="border-b-2 border-black mb-8">
        <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">World</h2>
        <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        {/* Main article */}
        <article className="lg:col-span-8 group cursor-pointer">
          <Link href={`/${mainArticle.category}/${mainArticle.slug}`} className="block">
            <div className="relative aspect-video overflow-hidden mb-6">
              <Image
                src={mainArticle.image}
                alt={mainArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                {mainArticle.categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className={`${cat.color} text-[10px] font-bold px-2 py-1 text-white uppercase`}
                  >
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[11px] text-gray-400 flex items-center gap-1">
                📅 {mainArticle.date}
              </span>
              <h2 className="text-3xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">
                {mainArticle.title}
              </h2>
              <div className="text-[11px] font-bold text-gray-400 uppercase">
                By <span className="text-gray-600">{mainArticle.author}</span>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-4">
                {mainArticle.description}
              </p>
              <div className="flex justify-between items-center pt-4">
                <span className="bg-[#2196f3] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors inline-block">
                  Read More
                </span>
                <span className="flex items-center gap-1 text-black uppercase font-bold text-[12px]">
                  <Share2 size={14} /> Share
                </span>
              </div>
            </div>
          </Link>
        </article>

        {/* Sidebar articles */}
        <aside className="lg:col-span-4 flex flex-col gap-4">
          {sidebar.map((item) => (
            <Link
              key={item.id}
              href={`/${item.categories[0]?.label?.toLowerCase() || "business"}/${item.slug}`}
              className="border border-gray-100 group cursor-pointer shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
                {item.badge && (
                  <div
                    className={`absolute top-0 right-0 ${item.badgeColor} text-white font-bold px-3 py-1 text-lg z-10`}
                  >
                    {item.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  {item.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className={`${cat.color} text-[10px] font-bold px-2 py-1 text-white uppercase`}
                    >
                      {cat.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[11px] text-gray-400">📅 {item.date}</span>
                <h3 className="text-xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="flex items-center gap-1 text-black font-bold uppercase text-[11px]">
                    <Share2 size={13} /> Share
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </aside>
      </div>
    </>
  );
};

export default WorldSection;
