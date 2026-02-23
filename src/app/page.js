import NewsCard from "@/components/newscard";
import { Share2 } from 'lucide-react';
import Newsletter from "@/components/Newsletter"
import AdBanner from "@/components/AdBanner";
export default function Home() {
  const politicsNews = [
    {
      image: "/Davenport4-2-1024x683.jpg", 
      category: "Business",
      categoryColor: "bg-[#2196f3]",
      date: "March 25, 2019",
      author: "Davenport",
      title: "White House and Justice Dept. Discussed Mueller Report Before Release",
      description: "Spring is finally here—even though it doesn't really feel like it, with temperatures hovering at just about freezing for much..."
    },
    {
      image: "/Davenport4-6.jpg",
      category: "Celebrity",
      categoryColor: "bg-[#e91e63]",
      isSponsored: true,
      author: "Davenport",
      title: "Wall Street slips, weighed down by healthcare plunge",
      description: "Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart. From accessories to outerwear and even..."
    },
    {
      image: "/Davenport4-2-1024x683.jpg",
      category: "Business",
      categoryColor: "bg-[#2196f3]",
      date: "March 25, 2019",
      author: "Davenport",
      title: "China selfie app firm Meitu forays into skincare to counter drop in users",
      description: "First up, you need to know that Zara's sales start online at 10 p.m. now, there isn't a sale on the site, but that only means..."
    }
  ];

  const secondaryNews = [
    {
      image: "/Davenport4-6.jpg", 
      category: "Technology",
      categoryColor: "bg-[#4caf50]",
      date: "April 10, 2025",
      author: "Davenport",
      title: "Future of AI in Journalism: How Automation is Changing the Newsroom",
      description: "As we look toward the end of the decade, the integration of large language models is reshaping how local news is gathered and distributed..."
    },
    {
      image: "/Davenport4-2-1024x683.jpg",
      category: "Lifestyle",
      categoryColor: "bg-[#ff9800]",
      date: "April 12, 2025",
      author: "Davenport",
      title: "The Art of Slow Living: Finding Balance in a High-Speed Digital World",
      description: "In an era of constant notifications, more people are turning toward minimalist habits to regain their focus and mental clarity..."
    },
    {
      image: "/Davenport4-6.jpg", 
      category: "Business",
      categoryColor: "bg-[#2196f3]",
      date: "April 15, 2025",
      author: "Davenport",
      title: "Global Markets Stabilize as Inflation Rates Begin to Level Off",
      description: "Financial analysts are optimistic as the latest quarterly reports show a steadying trend in international trade and consumer spending..."
    }
  ];
const healthcareNews = [
    { badges: [{ text: "Celebrity", color: "bg-[#e91e63]" }], title: "Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction", date: "March 26, 2019" },
    { badges: [{ text: "Business", color: "bg-[#2196f3]" }, { text: "Politics", color: "bg-[#00008b]" }], title: "Pinterest prices IPO at $19 a share, valuation tops $10 billion", isSponsored: true },
    { badges: [{ text: "Business", color: "bg-[#2196f3]" }, { text: "Video", color: "bg-[#e91e63]" }], title: "2020 Democrats Seek Voters in an Unusual Spot: Fox News", date: "March 25, 2019" },
    { badges: [{ text: "Business", color: "bg-[#2196f3]" }], title: "Macron vows to rebuild a 'more beautiful' Notre-Dame in 5 years", date: "March 25, 2019" },
    { badges: [{ text: "World", color: "bg-[#2196f3]" }], title: "Mercedes 'very sorry' after China consumer gripe goes viral", isSponsored: true },
    { badges: [{ text: "Business", color: "bg-[#2196f3]" }], title: "China selfie app firm Meitu forays into skincare to counter drop in users", date: "March 25, 2019" },
    { badges: [{ text: "Politics", color: "bg-[#00008b]" }], title: "Putting Premium Gas in an Engine That Requires Regular?", date: "March 25, 2019" },
    { badges: [{ text: "Lifestyle", color: "bg-[#c2185b]" }], title: "Trump angrily turns on Fox News after interview with Bernie Sanders", date: "March 25, 2019" }
  ];
const newsList = [
    { category: "Celebrity", color: "bg-[#e91e63]", title: "Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction", image: "/Davenport4-6.jpg", date: "March 26, 2019" },
    { category: "Business", color: "bg-[#2196f3]", title: "Pinterest prices IPO at $19 a share, valuation tops $10 billion", image: "/Davenport4-2-1024x683.jpg", isSponsored: true },
    { category: "Business", color: "bg-[#2196f3]", title: "2020 Democrats Seek Voters in an Unusual Spot: Fox News", image: "/Davenport4-6.jpg", date: "March 25, 2019" },
    { category: "Business", color: "bg-[#2196f3]", title: "Macron vows to rebuild a 'more beautiful' Notre-Dame in 5 years", image: "/Davenport4-2-1024x683.jpg", date: "March 25, 2019" },
    { category: "World", color: "bg-[#2196f3]", title: "Mercedes 'very sorry' after China consumer gripe goes viral", image: "/Davenport4-6.jpg", isSponsored: true },
    { category: "Business", color: "bg-[#2196f3]", title: "China selfie app firm Meitu forays into skincare to counter drop in users", image: "/Davenport4-2-1024x683.jpg", date: "March 25, 2019" },
    { category: "Politics", color: "bg-[#00008b]", title: "Putting Premium Gas in an Engine That Requires Regular?", image: "/Davenport4-6.jpg", date: "March 25, 2019" },
  ];

  const categories = [
    { name: "Business", count: 8, color: "bg-[#2196f3]" },
    { name: "Celebrity", count: 6, color: "bg-[#e91e63]" },
    { name: "Lifestyle", count: 3, color: "bg-[#c2185b]" },
    { name: "Politics", count: 6, color: "bg-[#00008b]" },
    { name: "Video", count: 3, color: "bg-[#e91e63]" },
    { name: "World", count: 3, color: "bg-[#2196f3]" },
  ];
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-20">
        
        {/* FIRST SECTION: Politics */}
        <div className="border-b-2 border-black mb-6">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">Politics</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Latest events and news</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {politicsNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        {/* SECOND SECTION: Secondary News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8 mb-7">
          {secondaryNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        {/* NEW SECTION: In other News */}
        <div className="border-b-2 border-black mb-8">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">In other News</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Something special from all over the world</p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {/* LEFT SIDE: Hero News Card with Overlay */}
          <div className="relative group cursor-pointer overflow-hidden h-125 md:h-auto border border-gray-200">
             <img 
               src="/Davenport4-2-1024x683.jpg" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               alt="Pinterest news" 
             />
             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
             
{/* Changed justify-center to justify-end and added pb-12 */}
<div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-12 pb-12 md:pb-2 text-white">
  
  <div className="flex gap-2 mb-4 md:pb-40">
    <span className="bg-[#2196f3] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Business</span>
    <span className="bg-[#00008b] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Politics</span>
  </div>

  <div className="text-[12px] font-medium mb-2 flex items-center gap-1">
     🔔 Sponsored content
  </div>

  <h3 className="text-2xl md:text-2xl font-bold leading-tight mb-4 max-w-md">
     Pinterest prices IPO at $19 a share, valuation tops $10 billion
  </h3> 

  <div className="text-[12px] font-bold uppercase tracking-widest mb-6">
     By Davenport
  </div>

  <p className="text-[16px] italic font-serif leading-relaxed max-w-sm border-t border-white/20 pt-4">
     "Although there doesn't seem to be much hope of a Friends reunion episode any time..."
  </p>
</div>
          </div>

          {/* RIGHT SIDE: Two Standard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
             <NewsCard 
               image="/Davenport4-6.jpg"
               category="Business"
               categoryColor="bg-[#2196f3]"
               date="March 25, 2019"
               author="Davenport"
               title="2020 Democrats Seek Voters in an Unusual Spot: Fox News"
               description="Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart..."
             />
             <NewsCard 
               image="/Davenport4-2-1024x683.jpg"
               category="Politics"
               categoryColor="bg-[#00008b]"
               date="March 25, 2019"
               author="Davenport"
               title="Macron vows to rebuild a 'more beautiful' Notre-Dame in 5 years"
               description="First up, you need to know that Zara's sales start online at 10 p.m. now, there isn't a sale..."
             />
          </div>
          
        </div>
{/* SECTION 2: Healthcare (NEW SECTION) */}
        <div className="border-b-2 border-black mt-8">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">Healthcare</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mt-8 mb-8">
          {healthcareNews.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
              <div className="flex gap-2">
                {item.badges.map((badge, bIdx) => (
                  <span key={bIdx} className={`${badge.color} text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
                    {badge.text}
                  </span>
                ))}
              </div>
              <h3 className="text-[17px] font-bold leading-tight text-[#222] group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <div className="text-[11px] text-gray-400 flex items-center gap-1">
                {item.isSponsored ? (
                  <span className="flex items-center gap-1">🔔 Sponsored content</span>
                ) : (
                  <span className="flex items-center gap-1">📅 {item.date}</span>
                )}
              </div>
            </div>
          ))}
        </div>
{/* NEW SECTION: World (EXACT CLONE) */}
        <div className="border-b-2 border-black mb-8">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">World</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Events</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* LEFT COLUMN: Large Article (Span 7) */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative aspect-video overflow-hidden mb-6">
               <img src="/Davenport4-6.jpg" className="w-full h-full object-cover transition-transform duration-500" alt="World News" />
               <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-[#2196f3] text-[10px] font-bold px-2 py-1 text-white uppercase">Business</span>
                  <span className="bg-[#e91e63] text-[10px] font-bold px-2 py-1 text-white uppercase">Video</span>
               </div>
            </div>
            <div className="space-y-4">
              <span className="text-[11px] text-gray-400 flex items-center gap-1">📅 March 25, 2019</span>
              <h2 className="text-3xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">
                2020 Democrats Seek Voters in an Unusual Spot: Fox News
              </h2>
              <div className="text-[11px] font-bold text-gray-400 uppercase">By <span className="text-gray-600">Davenport</span></div>
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-4">
                Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart. From accessories to outerwear and even simple sweaters, this colour gives any item a soft yet statement-making touch. Laboratory-grown diamonds, however, have a far more ethical and sustainable footprint...
              </p>
              <div className="flex justify-between items-center pt-4">
                <button className="bg-[#2196f3] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">
                  Read More
                </button>
                <div className="flex gap-4 text-gray-400 text-[12px] font-medium">
                  <span className="flex items-center gap-1 text-black uppercase font-bold"><Share2 size={14}/> Share</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Two Stacked Cards (Span 5) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Top Right Card */}
            <div className="border border-gray-100 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
               <div className="relative aspect-video overflow-hidden">
                  <img src="/Davenport4-2-1024x683.jpg" className="w-full h-full object-cover" alt="Hillary Clinton" />
                  <div className="absolute top-0 right-0 bg-[#f69a4d] text-white font-bold px-3 py-1 text-lg">84%</div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-[#2196f3] text-[10px] font-bold px-2 py-1 text-white uppercase">Business</span>
                    <span className="bg-[#e91e63] text-[10px] font-bold px-2 py-1 text-white uppercase">Celebrity</span>
                  </div>
               </div>
               <div className="p-6 space-y-3">
                 <span className="text-[11px] text-gray-400">📅 March 25, 2019</span>
                 <h3 className="text-xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">
                   Hillary Clinton to Speak at the TIME 100 Summit on April 23 in New York, NY
                 </h3>
                 <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-gray-400 text-[11px]">
                   <span className="flex items-center gap-1 text-black font-bold uppercase"><Share2 size={13}/> Share</span>
                 </div>
               </div>
            </div>

            {/* Bottom Right Card */}
            <div className="border border-gray-100 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
               <div className="relative aspect-video overflow-hidden">
                  <img src="/Davenport4-6.jpg" className="w-full h-full object-cover" alt="Top Democrat" />
                  <div className="absolute top-0 right-0 bg-[#3f51b5] text-white font-bold px-3 py-1 text-lg">87%</div>
                  <div className="absolute bottom-4 left-4 bg-[#2196f3] text-[10px] font-bold px-2 py-1 text-white uppercase">Business</div>
               </div>
               <div className="p-6 space-y-3">
                 <span className="text-[11px] text-gray-400">📅 March 25, 2019</span>
                 <h3 className="text-xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">
                   The Latest: Top Democrat says Barr is trying to spin report
                 </h3>
                 <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-gray-400 text-[11px]">
                   <span className="flex items-center gap-1 text-black font-bold uppercase"><Share2 size={13}/> Share</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
        {/* NEW: Newsletter Box placed between sections */}
        <Newsletter />
        {/* Top Ad Banner - Standard Newspaper Placement */}
        <AdBanner />
{/* THE FLEX WRAPPER: Added 'items-start' to allow the sidebar to slide */}
<div className="flex flex-col md:flex-row items-start gap-10 mt-12">
  
  {/* LEFT COLUMN: News Feed (8/12 width) */}
  <div className="flex-1 space-y-12">
    {newsList.map((item, idx) => (
      <div key={idx}>
        {/* Horizontal Ad after 4 cards - Fixed unit syntax 'h-[90px]' */}
        {idx === 4 && (
          <div className="w-full bg-[#f2f2f2] h-[90px] flex items-center justify-center border border-gray-100 mb-12">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#cccccc]">728x90 AD</span>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-8 group cursor-pointer border-b border-gray-100 pb-12 last:border-0">
          <div className="relative w-full sm:w-[320px] aspect-[4/3] overflow-hidden">
            <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={item.title} />
            <span className={`${item.color} absolute bottom-4 left-4 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
              {item.category}
            </span>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-[11px] text-gray-400 flex items-center gap-1">
              {item.isSponsored ? "🔔 Sponsored content" : `📅 ${item.date}`}
            </div>
            <h3 className="text-[22px] font-bold leading-tight text-[#222] group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <div className="text-[11px] font-bold text-gray-400 uppercase">By <span className="text-gray-600">Davenport</span></div>
            <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-3">
              Come dinnertime, the intimate group of guests was first ushered into the foyer for a staircase...
            </p>
            <div className="flex justify-between items-center pt-4">
              <button className="bg-[#2196f3] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-600">Read More</button>
              <div className="flex gap-4 text-gray-400 text-[12px]">
                <span className="flex items-center gap-1 text-black font-bold uppercase"><Share2 size={14}/> Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* RIGHT COLUMN: Sidebar - Fixed width 'md:w-[360px]' */}
  <aside className="w-full md:w-[360px]">
    {/* This inner div is what actually sticks. 
        'top-24' keeps it below your sticky header.
    */}
    <div className="sticky top-24 space-y-12">
      
      {/* Major Ad Box */}
      <div className="bg-[#d1d5db] aspect-[3/4] flex flex-col items-center justify-center p-8 text-center space-y-6 relative border border-gray-200"
           style={{ backgroundImage: 'linear-gradient(to bottom, #d1d5db, #a5b4fc)' }}>
        <div className="text-4xl font-serif italic text-black" style={{ fontFamily: 'var(--font-davenport)' }}>Davenport</div>
        <div className="text-[13px] font-bold uppercase tracking-widest text-gray-700">Follow the News</div>
        <div className="py-8 border-y border-black/10 w-full text-[17px] font-bold leading-tight">
          Blog and Magazine<br/>WordPress Theme
        </div>
        <p className="text-[12px] text-gray-600">Readers in Europe<br/>Subscribe for $1 a week</p>
        <button className="bg-[#2196f3] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest w-full shadow-lg">Buy Now</button>
      </div>

      {/* Trending Today */}
      <div className="space-y-6">
        <div className="border-b-2 border-black pb-1">
          <h2 className="text-[18px] font-bold uppercase tracking-tight">Trending today</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2 group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                 <img src={`/trend-${i}.jpg`} className="object-cover w-full h-full transition-transform group-hover:scale-105" alt="trending" />
              </div>
              <h4 className="text-[13px] font-bold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                Wall Street slips, weighed down by healthcare plunge
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Categories - Fixed unit 'h-[45px]' */}
      <div className="space-y-6">
        <div className="border-b-2 border-black pb-1">
          <h2 className="text-[18px] font-bold uppercase tracking-tight">Categories</h2>
        </div>
        <div className="space-y-1">
          {categories.map((cat, i) => (
            <div key={i} className="relative group cursor-pointer overflow-hidden h-[45px] flex items-center px-4">
              <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors" />
              <img src={`/cat-${i}.jpg`} className="absolute inset-0 w-full h-full object-cover" alt={cat.name} />
              <div className="relative z-20 flex justify-between w-full text-white font-bold uppercase text-[12px] tracking-widest">
                <span>{cat.name}</span>
                <span className={`${cat.color} px-2 py-0.5 text-[10px]`}>{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
</div>
</div>
    </main>
  );
}