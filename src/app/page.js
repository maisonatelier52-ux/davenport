import NewsCard from "@/components/newscard";
import { Share2, MessageCircle, BarChart2, Heart, Bell, Calendar } from 'lucide-react';
import Newsletter from "@/components/Newsletter";
import AdBanner from "@/components/AdBanner";
import StickyAd from "@/components/StickyAd"; 

// ─── NewsLayout Data ──────────────────────────────────────────────────────────

const newsCards = [
  {
    id: 1,
    date: "March 26, 2019",
    title: "Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction",
    author: "Davenport",
    excerpt: "Come dinnertime, the intimate group of guests was first ushered into the foyer for a staircase...",
    image: "/Davenport4-2-1024x683.jpg",
    tags: [{ label: "Celebrity", color: "bg-[#e91e63]" }],
    comments: 1, views: "2549", likes: 14,
    sponsored: false, hasVideo: false,
  },
  {
    id: 2,
    date: null,
    title: "Pinterest prices IPO at $19 a share, valuation tops $10 billion",
    author: "Davenport",
    excerpt: "Although there doesn't seem to be much hope of a Friends reunion episode any time...",
    image: "/Davenport4-6.jpg",
    tags: [{ label: "Business", color: "bg-[#2196f3]" }, { label: "Politics", color: "bg-[#00008b]" }],
    comments: 1, views: "2170", likes: 30,
    sponsored: true, hasVideo: false,
  },
  {
    id: 3,
    date: "March 25, 2019",
    title: "2020 Democrats Seek Voters in an Unusual Spot: Fox News",
    author: "Davenport",
    excerpt: "Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart.",
    image: "/Davenport4-6.jpg",
    tags: [{ label: "Business", color: "bg-[#2196f3]" }, { label: "Video", color: "bg-[#e91e63]" }],
    comments: 0, views: "2264", likes: 8,
    sponsored: false, hasVideo: true,
  },
  {
    id: 4,
    date: "March 25, 2019",
    title: "Macron vows to rebuild a 'more beautiful' Notre-Dame in 5 years",
    author: "Davenport",
    excerpt: "What was really interesting about fashion at that time was the way rock 'n' roll heroes like...",
    image: "/Davenport4-2-1024x683.jpg",
    tags: [{ label: "Business", color: "bg-[#2196f3]" }],
    comments: 0, views: "1669", likes: 8,
    sponsored: false, hasVideo: false,
  },
  {
    id: 5,
    date: "March 24, 2019",
    title: "Tech giants face new antitrust scrutiny as regulators eye Silicon Valley",
    author: "Davenport",
    excerpt: "Regulators on both sides of the Atlantic are ramping up efforts to examine the dominance of major technology firms...",
    image: "/Davenport4-6.jpg",
    tags: [{ label: "Business", color: "bg-[#2196f3]" }],
    comments: 3, views: "3102", likes: 21,
    sponsored: false, hasVideo: false,
  },
  {
    id: 6,
    date: "March 24, 2019",
    title: "Climate activists block rush-hour traffic in major European cities",
    author: "Davenport",
    excerpt: "Thousands of demonstrators took to the streets today in coordinated actions designed to disrupt morning commutes...",
    image: "/Davenport4-2-1024x683.jpg",
    tags: [{ label: "Politics", color: "bg-[#00008b]" }, { label: "World", color: "bg-[#2196f3]" }],
    comments: 5, views: "4891", likes: 42,
    sponsored: false, hasVideo: false,
  },
  {
    id: 7,
    date: "March 23, 2019",
    title: "NASA reveals stunning new images from the James Webb Space Telescope",
    author: "Davenport",
    excerpt: "The space agency released a trove of breathtaking photographs that scientists say could rewrite our understanding...",
    image: "/Davenport4-6.jpg",
    tags: [{ label: "Lifestyle", color: "bg-[#c2185b]" }],
    comments: 7, views: "6214", likes: 88,
    sponsored: false, hasVideo: true,
  },
  {
    id: 8,
    date: "March 23, 2019",
    title: "Global food prices hit decade high as supply chain tensions mount",
    author: "Davenport",
    excerpt: "A new report from the United Nations warns that food commodity prices have reached their highest level in ten years...",
    image: "/Davenport4-2-1024x683.jpg",
    tags: [{ label: "World", color: "bg-[#2196f3]" }],
    comments: 2, views: "2788", likes: 15,
    sponsored: false, hasVideo: false,
  },
  {
    id: 9,
    date: "March 22, 2019",
    title: "Celebrity power couple splits after five years, sources confirm",
    author: "Davenport",
    excerpt: "Insiders close to the pair say irreconcilable differences led to the quiet separation, which was finalised last month...",
    image: "/Davenport4-6.jpg",
    tags: [{ label: "Celebrity", color: "bg-[#e91e63]" }],
    comments: 11, views: "9031", likes: 104,
    sponsored: false, hasVideo: false,
  },
];

const trendingNews = [
  {
    id: 1,
    date: "March 25, 2019",
    title: "White House and Justice Dept. Discussed Mueller Report Before Release",
    image: "/Davenport4-2-1024x683.jpg",
    sponsored: false,
  },
  {
    id: 2,
    date: null,
    title: "Wall Street slips, weighed down by healthcare plunge",
    image: "/Davenport4-6.jpg",
    sponsored: true,
  },
  {
    id: 3,
    date: "March 25, 2019",
    title: "China selfie app firm Meitu forays into skincare to counter drop in users",
    image: "/Davenport4-2-1024x683.jpg",
    sponsored: false,
  },
  {
    id: 4,
    date: "March 25, 2019",
    title: "Hillary Clinton to Speak at the TIME 100 Summit on April 23 in New York, NY",
    image: "/Davenport4-6.jpg",
    sponsored: false,
    badge: "84%",
  },
];

const categories = [
  { label: "Business", count: 8, countColor: "bg-[#2196f3]", image: "/Davenport4-2-1024x683.jpg" },
  { label: "Celebrity", count: 6, countColor: "bg-[#e91e63]", image: "/Davenport4-6.jpg" },
  { label: "Lifestyle", count: 3, countColor: "bg-[#e91e63]", image: "/Davenport4-2-1024x683.jpg" },
  { label: "Politics", count: 6, countColor: "bg-[#2196f3]", image: "/Davenport4-6.jpg" },
  { label: "Video",    count: 3, countColor: "bg-[#e91e63]", image: "/Davenport4-2-1024x683.jpg" },
  { label: "World",   count: 3, countColor: "bg-[#2196f3]", image: "/Davenport4-6.jpg" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow">
        <svg className="w-4 h-4 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
    </div>
  );
}

function NewsListCard({ card }) {
  return (
    <div className="flex flex-col sm:flex-row gap-0 border-b border-gray-200 pb-6 mb-6 last:border-0 last:mb-0">
      <div className="relative w-full sm:w-[220px] md:w-[240px] flex-shrink-0 h-[180px] sm:h-[160px] overflow-hidden">
        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
        {card.hasVideo && <PlayIcon />}
        <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap">
          {card.tags.map((t) => (
            <span key={t.label} className={`${t.color} text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 sm:pl-4 pt-3 sm:pt-0">
        {card.sponsored ? (
          <p className="text-gray-400 text-xs flex items-center gap-1 mb-1"><Bell size={11} /> Sponsored content</p>
        ) : card.date ? (
          <p className="text-gray-400 text-xs flex items-center gap-1 mb-1"><Calendar size={11} /> {card.date}</p>
        ) : null}
        <h2 className="font-bold text-gray-900 text-base md:text-[17px] leading-snug mb-2 hover:text-blue-600 cursor-pointer transition-colors">
          {card.title}
        </h2>
        <p className="text-xs text-gray-500 mb-2">By <span className="font-semibold text-gray-700">{card.author}</span></p>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{card.excerpt}</p>
        <hr className="border-gray-200 mb-3" />
        <div className="flex items-center gap-3 flex-wrap">
          <button className="bg-[#2196f3] hover:bg-blue-600 text-white text-xs font-bold px-5 py-2 transition-colors">READ MORE</button>
          <span className="flex items-center gap-1 text-xs text-gray-500"><MessageCircle size={14} /> {card.comments}</span>
          <span className="flex items-center gap-1 text-xs text-gray-500"><BarChart2 size={14} /> {card.views}</span>
          <span className="flex items-center gap-1 text-xs text-gray-500"><Heart size={14} /> {card.likes}</span>
          <span className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-blue-500 transition-colors"><Share2 size={14} /> Share</span>
        </div>
      </div>
    </div>
  );
}

function TrendingCard({ item }) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[110px] overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        {item.badge && (
          <span className="absolute top-2 right-2 bg-[#f69a4d] text-white text-xs font-bold px-1.5 py-0.5">{item.badge}</span>
        )}
      </div>
      {item.sponsored ? (
        <p className="text-gray-400 text-[10px] flex items-center gap-1 mt-1"><Bell size={10} /> Sponsored content</p>
      ) : (
        <p className="text-gray-400 text-[10px] flex items-center gap-1 mt-1"><Calendar size={10} /> {item.date}</p>
      )}
      <p className="text-sm font-semibold text-gray-900 leading-snug mt-1 hover:text-blue-600 cursor-pointer transition-colors">{item.title}</p>
    </div>
  );
}

function CategoryCard({ cat }) {
  return (
    <div className="relative overflow-hidden h-[56px] cursor-pointer group">
      <img src={cat.image} alt={cat.label} className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <span className="text-white font-bold text-base">{cat.label}</span>
        <span className={`${cat.countColor} text-white text-sm font-bold w-7 h-7 flex items-center justify-center`}>{cat.count}</span>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const politicsNews = [
    { image: "/Davenport4-2-1024x683.jpg", category: "Business", categoryColor: "bg-[#2196f3]", date: "March 25, 2019", author: "Davenport", title: "White House and Justice Dept. Discussed Mueller Report Before Release", description: "Spring is finally here—even though it doesn't really feel like it, with temperatures hovering at just about freezing for much..." },
    { image: "/Davenport4-6.jpg", category: "Celebrity", categoryColor: "bg-[#e91e63]", isSponsored: true, author: "Davenport", title: "Wall Street slips, weighed down by healthcare plunge", description: "Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart. From accessories to outerwear and even..." },
    { image: "/Davenport4-2-1024x683.jpg", category: "Business", categoryColor: "bg-[#2196f3]", date: "March 25, 2019", author: "Davenport", title: "China selfie app firm Meitu forays into skincare to counter drop in users", description: "First up, you need to know that Zara's sales start online at 10 p.m. now, there isn't a sale on the site, but that only means..." }
  ];

  const secondaryNews = [
    { image: "/Davenport4-6.jpg", category: "Technology", categoryColor: "bg-[#4caf50]", date: "April 10, 2025", author: "Davenport", title: "Future of AI in Journalism: How Automation is Changing the Newsroom", description: "As we look toward the end of the decade, the integration of large language models is reshaping how local news is gathered and distributed..." },
    { image: "/Davenport4-2-1024x683.jpg", category: "Lifestyle", categoryColor: "bg-[#ff9800]", date: "April 12, 2025", author: "Davenport", title: "The Art of Slow Living: Finding Balance in a High-Speed Digital World", description: "In an era of constant notifications, more people are turning toward minimalist habits to regain their focus and mental clarity..." },
    { image: "/Davenport4-6.jpg", category: "Business", categoryColor: "bg-[#2196f3]", date: "April 15, 2025", author: "Davenport", title: "Global Markets Stabilize as Inflation Rates Begin to Level Off", description: "Financial analysts are optimistic as the latest quarterly reports show a steadying trend in international trade and consumer spending..." }
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

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-20">

        {/* FIRST SECTION: Politics */}
        <div className="border-b-2 border-black mb-6">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">Politics</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Latest events and news</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {politicsNews.map((news, index) => <NewsCard key={index} {...news} />)}
        </div>

        {/* SECOND SECTION: Secondary News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8 mb-7">
          {secondaryNews.map((news, index) => <NewsCard key={index} {...news} />)}
        </div>

        {/* SECTION: In other News */}
        <div className="border-b-2 border-black mb-8">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">In other News</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Something special from all over the world</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="relative group cursor-pointer overflow-hidden h-125 md:h-auto border border-gray-200">
            <img src="/Davenport4-2-1024x683.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Pinterest news" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-12 pb-12 md:pb-2 text-white">
              <div className="flex gap-2 mb-4 md:pb-40">
                <span className="bg-[#2196f3] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Business</span>
                <span className="bg-[#00008b] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Politics</span>
              </div>
              <div className="text-[12px] font-medium mb-2 flex items-center gap-1">🔔 Sponsored content</div>
              <h3 className="text-2xl font-bold leading-tight mb-4 max-w-md">Pinterest prices IPO at $19 a share, valuation tops $10 billion</h3>
              <div className="text-[12px] font-bold uppercase tracking-widest mb-6">By Davenport</div>
              <p className="text-[16px] italic font-serif leading-relaxed max-w-sm border-t border-white/20 pt-4">
                "Although there doesn't seem to be much hope of a Friends reunion episode any time..."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <NewsCard image="/Davenport4-6.jpg" category="Business" categoryColor="bg-[#2196f3]" date="March 25, 2019" author="Davenport" title="2020 Democrats Seek Voters in an Unusual Spot: Fox" description="Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart..." />
            <NewsCard image="/Davenport4-2-1024x683.jpg" category="Politics" categoryColor="bg-[#00008b]" date="March 25, 2019" author="Davenport" title="Macron vows to rebuild a 'more beautiful' Notre-Dame in 5 years" description="First up, you need to know that Zara's sales start online at 10 p.m. now, there isn't a sale..." />
          </div>
        </div>

        {/* SECTION: Healthcare */}
        <div className="border-b-2 border-black mt-8">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">Healthcare</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mt-8 mb-8">
          {healthcareNews.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
              <div className="flex gap-2">
                {item.badges.map((badge, bIdx) => (
                  <span key={bIdx} className={`${badge.color} text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider`}>{badge.text}</span>
                ))}
              </div>
              <h3 className="text-[17px] font-bold leading-tight text-[#222] group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <div className="text-[11px] text-gray-400 flex items-center gap-1">
                {item.isSponsored ? <span className="flex items-center gap-1">🔔 Sponsored content</span> : <span className="flex items-center gap-1">📅 {item.date}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION: World */}
        <div className="border-b-2 border-black mb-8">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">World</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Events</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
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
              <h2 className="text-3xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">2020 Democrats Seek Voters in an Unusual Spot: Fox News</h2>
              <div className="text-[11px] font-bold text-gray-400 uppercase">By <span className="text-gray-600">Davenport</span></div>
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-4">Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart. From accessories to outerwear and even simple sweaters, this colour gives any item a soft yet statement-making touch.</p>
              <div className="flex justify-between items-center pt-4">
                <button className="bg-[#2196f3] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">Read More</button>
                <span className="flex items-center gap-1 text-black uppercase font-bold text-[12px]"><Share2 size={14} /> Share</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
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
                <h3 className="text-xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">Hillary Clinton to Speak at the TIME 100 Summit on April 23 in New York, NY</h3>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="flex items-center gap-1 text-black font-bold uppercase text-[11px]"><Share2 size={13} /> Share</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <img src="/Davenport4-6.jpg" className="w-full h-full object-cover" alt="Top Democrat" />
                <div className="absolute top-0 right-0 bg-[#3f51b5] text-white font-bold px-3 py-1 text-lg">87%</div>
                <div className="absolute bottom-4 left-4 bg-[#2196f3] text-[10px] font-bold px-2 py-1 text-white uppercase">Business</div>
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] text-gray-400">📅 March 25, 2019</span>
                <h3 className="text-xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">The Latest: Top Democrat says Barr is trying to spin report</h3>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="flex items-center gap-1 text-black font-bold uppercase text-[11px]"><Share2 size={13} /> Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter />

        {/* Ad Banner */}
        <AdBanner />

        {/* ── NEWS LIST + SIDEBAR SECTION ── */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8">

          {/* LEFT COLUMN */}
          <div className="flex-1 min-w-0">
            {newsCards.slice(0, 5).map((card) => (
              <NewsListCard key={card.id} card={card} />
            ))}

            {/* Horizontal Ad */}
            <div className="mt-2 mb-6 w-full h-[90px] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm tracking-widest">
              728×90 AD
            </div>

            {/* ✅ SENTINEL — observer watches this to release sticky ad */}
            <div id="ad-sentinel" className="h-0 w-full" />

            {newsCards.slice(5).map((card) => (
              <NewsListCard key={card.id} card={card} />
            ))}
          </div>

          {/* RIGHT COLUMN — self-start REQUIRED for sticky inside flexbox */}
          <div className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0 self-start">

            <StickyAd />

            {/* Trending Today */}
            <div className="mb-6">
              <h3 className="font-bold text-base text-gray-900 text-center pb-2 mb-4 border-b-2 border-gray-800">
                Trending today
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {trendingNews.map((item) => (
                  <TrendingCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-base text-gray-900 text-center pb-2 mb-4 border-b-2 border-gray-800">
                Categories
              </h3>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <CategoryCard key={cat.label} cat={cat} />
                ))}
              </div>
            </div>

          </div>
        </div>
        {/* ── END NEWS LIST SECTION ── */}

      </div>
    </main>
  );
}