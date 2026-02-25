import React from 'react';
import Link from 'next/link';   // IMPORT THIS
import Image from 'next/image'; // IMPORT THIS

const NewsCard = ({ 
  image, 
  category, 
  categoryColor, 
  title, 
  date, 
  author, 
  description, 
  isSponsored,
  slug = "#" // NEW: You need to pass the article ID or Slug here
}) => {
  return (
    // 1. LINK WRAPPER: Makes the whole card clickable for GoogleBot
    <Link href={`/news/${slug}`} className="group block h-full">
      
      {/* 2. SEMANTIC TAG: <article> helps Google understand this is a news entry */}
      <article className="flex flex-col border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow duration-300 h-full">
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
          
          {/* 3. NEXT/IMAGE: 'sizes' is CRITICAL here to prevent blurriness */}
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            // This string tells the browser how wide the image is on different screens
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Category Badge */}
          <div className={`absolute bottom-0 left-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${categoryColor} z-10`}>
            {category}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
            {isSponsored ? (
              <span className="flex items-center gap-1">🔔 Sponsored content</span>
            ) : (
              // <time> tag is better for SEO than <span> for dates
              <time className="flex items-center gap-1">📅 {date}</time>
            )}
          </div>

          <h3 className="text-[20px] font-bold leading-tight text-[#222] group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
            By <span className="text-gray-600">{author}</span>
          </div>

          <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-3 mt-1">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;