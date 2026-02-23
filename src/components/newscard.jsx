import React from 'react';

const NewsCard = ({ image, category, categoryColor, title, date, author, description, isSponsored }) => {
  return (
    // Added 'border', 'border-gray-200', and 'p-4' for the card frame
    <div className="flex flex-col group cursor-pointer border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow duration-300">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className={`absolute bottom-0 left-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${categoryColor}`}>
          {category}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
          {isSponsored ? (
            <span className="flex items-center gap-1">🔔 Sponsored content</span>
          ) : (
            <span className="flex items-center gap-1">📅 {date}</span>
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
    </div>
  );
};

export default NewsCard;