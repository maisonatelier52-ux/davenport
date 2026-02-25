import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/newscard";
import { Share2, Bell, Calendar } from 'lucide-react';
import Newsletter from "@/components/Newsletter";
import AdBanner from "@/components/AdBanner";
import StickyAd from "@/components/StickyAd"; 

// ─── SEO METADATA ───────────────────────────────────────────
export const metadata = {
  title: "Daily News | Politics, Business, and World Updates",
  description: "Breaking news coverage of politics, business, technology, and world events.",
  openGraph: {
    type: "website",
    title: "Daily News | Politics, Business, and World Updates",
    siteName: "Daily News",
  },
};
// ─── TRENDING SECTION DATA ────────────────────────────────────────────

const trendingSectionData = [
  {
    id: 801,
    title: "White House and Justice Dept. Discussed Mueller Report Before Release",
    image: "/Davenport4-2-1024x683.jpg", // Replace with actual image path
    categories: [{ label: "Business", color: "bg-[#2196f3]" }]
  },
  {
    id: 802,
    title: "Wall Street slips, weighed down by healthcare plunge",
    image: "/Davenport4-6.jpg",
    categories: [{ label: "Celebrity", color: "bg-[#e91e63]" }]
  },
  {
    id: 803,
    title: "China selfie app firm Meitu forays into skincare to counter drop in users",
    image: "/Davenport4-2-1024x683.jpg",
    categories: [{ label: "Business", color: "bg-[#2196f3]" }]
  },
  {
    id: 804,
    title: "Hillary Clinton to Speak at the TIME 100 Summit on April 23 in New York, NY",
    image: "/Davenport4-6.jpg",
    categories: [
      { label: "Business", color: "bg-[#2196f3]" },
      { label: "Celebrity", color: "bg-[#e91e63]" }
    ],
    badge: "84%" // Orange Percentage Badge
  },
  {
    id: 805,
    title: "Mitch McConnell Wants to Raise Tobacco Purchasing Age From 18 to 21, Including for Vaping Devices",
    image: "/Davenport4-2-1024x683.jpg",
    categories: [{ label: "Politics", color: "bg-[#00008b]" }]
  },
  {
    id: 806,
    title: "Trump and Netanyahu Are Breaking the Bond Between American Jews and Israel",
    image: "/Davenport4-6.jpg",
    categories: [{ label: "Celebrity", color: "bg-[#e91e63]" }],
    badge: "98%" // Yellow/Orange Badge
  },
  {
    id: 807,
    title: "Asteroid 'to fly past Earth closer than the moon tomorrow,' scientists warn",
    image: "/Davenport4-2-1024x683.jpg",
    categories: [{ label: "Celebrity", color: "bg-[#e91e63]" }]
  },
  {
    id: 808,
    title: "When is Stranger Things 3 on Netflix? Who is in the cast, and what is going to happen?",
    image: "/Davenport4-6.jpg",
    categories: [
      { label: "Video", color: "bg-[#e91e63]" },
      { label: "World", color: "bg-[#2196f3]" }
    ]
  },
  {
    id: 809,
    title: "Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction",
    image: "/Davenport4-2-1024x683.jpg",
    categories: [{ label: "Celebrity", color: "bg-[#e91e63]" }]
  }
];
// ─── TECHNOLOGY SECTION DATA ──────────────────────────────────────────

const technologyNews = [
  {
    id: 701,
    title: "Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction",
    excerpt: "Come dinnertime, the intimate group of guests was first ushered into the foyer for",
    author: "Davenport",
    date: "March 26, 2019",
    image: "/Davenport4-2-1024x683.jpg", // Replace with your image
    category: "Celebrity",
    categoryColor: "bg-[#e91e63]",
    stats: { comments: 1, views: "2549", likes: 14 }
  },
  {
    id: 702,
    title: "Pinterest prices IPO at $19 a share, valuation tops $10 billion",
    excerpt: "Although there doesn't seem to be much hope of a Friends reunion episode any time...",
    author: "Davenport",
    image: "/Davenport4-6.jpg", // Replace with your image
    categories: [
        { label: "Business", color: "bg-[#2196f3]" },
        { label: "Politics", color: "bg-[#00008b]" }
    ],
    isSponsored: true
  }
];
// ─── MOST POPULAR SECTION DATA ────────────────────────────────────────

const mostPopularNews = [
  {
    id: 601,
    title: "White House and Justice Dept. Discussed Mueller Report Before Release",
    image: "/Davenport4-2-1024x683.jpg", // Replace with actual image path
    category: "Business",
    categoryColor: "bg-[#2196f3]",
    date: "March 25, 2019"
  },
  {
    id: 602,
    title: "Wall Street slips, weighed down by healthcare plunge",
    image: "/Davenport4-6.jpg", 
    category: "Celebrity",
    categoryColor: "bg-[#e91e63]",
    isSponsored: true
  },
  {
    id: 603,
    title: "China selfie app firm Meitu forays into skincare to counter drop in users",
    image: "/Davenport4-2-1024x683.jpg", 
    category: "Business",
    categoryColor: "bg-[#2196f3]",
    date: "March 25, 2019",
    hasGallery: true // Icon indicator
  },
  {
    id: 604,
    title: "Hillary Clinton to Speak at the TIME 100 Summit on April 23 in New York, NY",
    image: "/Davenport4-6.jpg", 
    category: "Business",
    categoryColor: "bg-[#2196f3]",
    secondaryCategory: "Celebrity",
    secondaryColor: "bg-[#e91e63]",
    badge: "84%",
    date: "March 25, 2019",
    hasAudio: true // Icon indicator
  }
];
// ─── DISCOVERY SECTION DATA ──────────────────────────────────────────

const discoveryMain = {
  id: 501,
  title: "White House and Justice Dept. Discussed Mueller Report Before Release",
  excerpt: "Spring is finally here—even though it doesn't really feel like it, with temperatures hovering at just about freezing for much...",
  author: "Davenport",
  date: "March 25, 2019",
  image: "/Davenport4-2-1024x683.jpg", // Reusing your existing image path
  category: "Business",
  categoryColor: "bg-[#2196f3]",
  stats: { comments: 2, views: "126512", likes: 32 }
};

const discoveryMiddle = [
  {
    id: 502,
    title: "Wall Street slips, weighed down by healthcare plunge",
    image: "/Davenport4-6.jpg",
    category: "Celebrity",
    categoryColor: "bg-[#e91e63]",
    isSponsored: true
  },
  {
    id: 503,
    title: "China selfie app firm Meitu forays into skincare to counter",
    image: "/Davenport4-2-1024x683.jpg",
    category: "Business",
    categoryColor: "bg-[#2196f3]",
    date: "March 25, 2019"
  },
  {
    id: 504,
    title: "Hillary Clinton to Speak at the TIME 100 Summit on April in New York",
    image: "/Davenport4-6.jpg",
    category: "Business",
    categoryColor: "bg-[#2196f3]",
    secondaryCategory: "Celebrity",
    secondaryColor: "bg-[#e91e63]",
    badge: "84%",
    date: "March 25, 2019"
  }
];

const discoveryRight = [
  {
    id: 505,
    title: "Mitch McConnell Wants to Raise Tobacco Purchasing Age From 18 to 21, Including for Vaping Devices",
    category: "Politics",
    categoryColor: "bg-[#00008b]",
    date: "March 25, 2019"
  },
  {
    id: 506,
    title: "Trump and Netanyahu Are Breaking the Bond Between American Jews and Israel",
    category: "Celebrity",
    categoryColor: "bg-[#e91e63]",
    date: "March 25, 2019"
  },
  {
    id: 507,
    title: "Asteroid 'to fly past Earth closer than the moon tomorrow,' scientists warn",
    category: "Celebrity",
    categoryColor: "bg-[#e91e63]",
    date: "March 24, 2019"
  },
  {
    id: 508,
    title: "When is Stranger Things 3 on Netflix? Who is in the cast, and what is going to happen?",
    category: "Video",
    categoryColor: "bg-[#e91e63]",
    secondaryCategory: "World",
    secondaryColor: "bg-[#2196f3]",
    date: "March 25, 2019"
  }
];
// ─── DATA ───────────────────────────────────────────────────
const newsCards = [
  { id: 1, date: "March 26, 2019", title: "Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction", author: "Davenport", excerpt: "Come dinnertime, the intimate group of guests was first ushered into the foyer for a staircase...", image: "/Davenport4-2-1024x683.jpg", tags: [{ label: "Celebrity", color: "bg-[#e91e63]" }], comments: 1, views: "2549", likes: 14, sponsored: false, hasVideo: false },
  { id: 2, date: null, title: "Pinterest prices IPO at $19 a share, valuation tops $10 billion", author: "Davenport", excerpt: "Although there doesn't seem to be much hope of a Friends reunion episode any time...", image: "/Davenport4-6.jpg", tags: [{ label: "Business", color: "bg-[#2196f3]" }, { label: "Politics", color: "bg-[#00008b]" }], comments: 1, views: "2170", likes: 30, sponsored: true, hasVideo: false },
  { id: 3, date: "March 25, 2019", title: "2020 Democrats Seek Voters in an Unusual Spot: Fox News", author: "Davenport", excerpt: "Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart.", image: "/Davenport4-6.jpg", tags: [{ label: "Business", color: "bg-[#2196f3]" }, { label: "Video", color: "bg-[#e91e63]" }], comments: 0, views: "2264", likes: 8, sponsored: false, hasVideo: true },
  { id: 4, date: "March 24, 2019", title: "Tech giants face new antitrust scrutiny as regulators eye Silicon Valley", author: "Davenport", excerpt: "Regulators on both sides of the Atlantic are ramping up efforts to examine the dominance of major", image: "/Davenport4-6.jpg", tags: [{ label: "Business", color: "bg-[#2196f3]" }], comments: 3, views: "3102", likes: 21, sponsored: false, hasVideo: false },
  { id: 5, date: "March 24, 2019", title: "Climate activists block rush-hour traffic in major European cities", author: "Davenport", excerpt: "Thousands of demonstrators took to the streets today in coordinated actions designed to disrupt morning", image: "/Davenport4-2-1024x683.jpg", tags: [{ label: "Politics", color: "bg-[#00008b]" }, { label: "World", color: "bg-[#2196f3]" }], comments: 5, views: "4891", likes: 42, sponsored: false, hasVideo: false },
  { id: 6, date: "March 23, 2019", title: "NASA reveals stunning new images from the James Webb Space Telescope", author: "Davenport", excerpt: "The space agency released a trove of breathtaking photographs that scientists say could rewrite our", image: "/Davenport4-6.jpg", tags: [{ label: "Lifestyle", color: "bg-[#c2185b]" }], comments: 7, views: "6214", likes: 88, sponsored: false, hasVideo: true },
  { id: 7, date: "March 23, 2019", title: "Global food prices hit decade high as supply chain tensions mount", author: "Davenport", excerpt: "A new report from the United Nations warns that food commodity prices have reached their highest level", image: "/Davenport4-2-1024x683.jpg", tags: [{ label: "World", color: "bg-[#2196f3]" }], comments: 2, views: "2788", likes: 15, sponsored: false, hasVideo: false },
  { id: 8, date: "March 22, 2019", title: "Celebrity power couple splits after five years, sources confirm", author: "Davenport", excerpt: "Insiders close to the pair say irreconcilable differences led to the quiet separation, which was", image: "/Davenport4-6.jpg", tags: [{ label: "Celebrity", color: "bg-[#e91e63]" }], comments: 11, views: "9031", likes: 104, sponsored: false, hasVideo: false },
  { id: 9, date: "March 22, 2019", title: "Celebrity power couple splits after five years, sources confirm", author: "Davenport", excerpt: "Insiders close to the pair say irreconcilable differences led to the quiet separation, which was", image: "/Davenport4-6.jpg", tags: [{ label: "Celebrity", color: "bg-[#e91e63]" }], comments: 11, views: "9031", likes: 104, sponsored: false, hasVideo: false }
];

const trendingNews = [
  { id: 1, date: "March 25, 2019", title: "White House and Justice Dept. Discussed Mueller Report Before Release", image: "/Davenport4-2-1024x683.jpg", sponsored: false },
  { id: 2, date: null, title: "Wall Street slips, weighed down by healthcare plunge", image: "/Davenport4-6.jpg", sponsored: true },
  { id: 3, date: "March 25, 2019", title: "China selfie app firm Meitu forays into skincare to counter drop in users", image: "/Davenport4-2-1024x683.jpg", sponsored: false },
  { id: 4, date: "March 25, 2019", title: "Hillary Clinton to Speak at the TIME 100 Summit on April 23 in New York, NY", image: "/Davenport4-6.jpg", sponsored: false, badge: "84%" },
];

const categories = [
  { label: "Business", count: 8, countColor: "bg-[#2196f3]", image: "/Davenport4-2-1024x683.jpg" },
  { label: "Celebrity", count: 6, countColor: "bg-[#e91e63]", image: "/Davenport4-6.jpg" },
  { label: "Lifestyle", count: 3, countColor: "bg-[#e91e63]", image: "/Davenport4-2-1024x683.jpg" },
  { label: "Politics", count: 6, countColor: "bg-[#2196f3]", image: "/Davenport4-6.jpg" },
  { label: "Video",    count: 3, countColor: "bg-[#e91e63]", image: "/Davenport4-2-1024x683.jpg" },
  { label: "World",   count: 3, countColor: "bg-[#2196f3]", image: "/Davenport4-6.jpg" },
];

const politicsNews = [
    { id: 101, image: "/Davenport4-2-1024x683.jpg", category: "Business", categoryColor: "bg-[#2196f3]", date: "March 25, 2019", author: "Davenport", title: "White House and Justice Dept. Discussed Mueller Report Before Release", description: "Spring is finally here—even though it doesn't really feel like it, with temperatures hovering at just about freezing for much..." },
    { id: 102, image: "/Davenport4-6.jpg", category: "Celebrity", categoryColor: "bg-[#e91e63]", isSponsored: true, author: "Davenport", title: "Wall Street slips, weighed down by healthcare plunge", description: "Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart. From accessories to outerwear and even..." },
    { id: 103, image: "/Davenport4-2-1024x683.jpg", category: "Business", categoryColor: "bg-[#2196f3]", date: "March 25, 2019", author: "Davenport", title: "China selfie app firm Meitu forays into skincare to counter drop in users", description: "First up, you need to know that Zara's sales start online at 10 p.m. now, there isn't a sale on the site, but that only means..." }
];

const secondaryNews = [
    { id: 201, image: "/Davenport4-6.jpg", category: "Technology", categoryColor: "bg-[#4caf50]", date: "April 10, 2025", author: "Davenport", title: "Future of AI in Journalism: How Automation is Changing the Newsroom", description: "As we look toward the end of the decade, the integration of large language models is reshaping how local news is gathered and distributed..." },
    { id: 202, image: "/Davenport4-2-1024x683.jpg", category: "Lifestyle", categoryColor: "bg-[#ff9800]", date: "April 12, 2025", author: "Davenport", title: "The Art of Slow Living: Finding Balance in a High-Speed Digital World", description: "In an era of constant notifications, more people are turning toward minimalist habits to regain their focus and mental clarity..." },
    { id: 203, image: "/Davenport4-6.jpg", category: "Business", categoryColor: "bg-[#2196f3]", date: "April 15, 2025", author: "Davenport", title: "Global Markets Stabilize as Inflation Rates Begin to Level Off", description: "Financial analysts are optimistic as the latest quarterly reports show a steadying trend in international trade and consumer spending..." }
];

const healthcareNews = [
    { id: 301, badges: [{ text: "Celebrity", color: "bg-[#e91e63]" }], title: "Donald Trump attacks Bernie Sanders' tax returns, makes 2020 election prediction", date: "March 26, 2019" },
    { id: 302, badges: [{ text: "Business", color: "bg-[#2196f3]" }, { text: "Politics", color: "bg-[#00008b]" }], title: "Pinterest prices IPO at $19 a share, valuation tops $10 billion", isSponsored: true },
    { id: 303, badges: [{ text: "Business", color: "bg-[#2196f3]" }, { text: "Video", color: "bg-[#e91e63]" }], title: "2020 Democrats Seek Voters in an Unusual Spot: Fox News", date: "March 25, 2019" },
    { id: 304, badges: [{ text: "Business", color: "bg-[#2196f3]" }], title: "Macron vows to rebuild a 'more beautiful' Notre-Dame in 5 years", date: "March 25, 2019" },
    { id: 305, badges: [{ text: "World", color: "bg-[#2196f3]" }], title: "Mercedes 'very sorry' after China consumer gripe goes viral", isSponsored: true },
    { id: 306, badges: [{ text: "Business", color: "bg-[#2196f3]" }], title: "China selfie app firm Meitu forays into skincare to counter drop in users", date: "March 25, 2019" },
    { id: 307, badges: [{ text: "Politics", color: "bg-[#00008b]" }], title: "Putting Premium Gas in an Engine That Requires Regular?", date: "March 25, 2019" },
    { id: 308, badges: [{ text: "Lifestyle", color: "bg-[#c2185b]" }], title: "Trump angrily turns on Fox News after interview with Bernie Sanders", date: "March 25, 2019" }
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
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
    <article className="flex flex-col sm:flex-row gap-0 border-b border-gray-200 pb-3 mb-6 last:border-0 last:mb-0">
      <div className="relative w-full sm:w-[220px] md:w-[240px] flex-shrink-0 h-[180px] sm:h-[160px] overflow-hidden group">
        <Link href={`/news/${card.id}`}>
          <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 240px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          {card.hasVideo && <PlayIcon />}
          <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap z-10">
            {card.tags.map((t) => <span key={t.label} className={`${t.color} text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide`}>{t.label}</span>)}
          </div>
        </Link>
      </div>
      <div className="flex-1 sm:pl-4 pt-3 sm:pt-0">
        {card.sponsored ? <p className="text-gray-400 text-xs flex items-center gap-1 mb-1"><Bell size={11} /> Sponsored content</p> : card.date ? <p className="text-gray-400 text-xs flex items-center gap-1 mb-1"><Calendar size={11} /> {card.date}</p> : null}
        <h2 className="font-bold text-gray-900 text-base md:text-[17px] leading-snug mb-2"><Link href={`/news/${card.id}`} className="hover:text-blue-600 cursor-pointer transition-colors">{card.title}</Link></h2>
        <p className="text-xs text-gray-500 mb-2">By <span className="font-semibold text-gray-700">{card.author}</span></p>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{card.excerpt}</p>
        <hr className="border-gray-200 mb-3" />
        <div className="flex items-center gap-3 flex-wrap">
          <Link href={`/news/${card.id}`} className="bg-[#2196f3] hover:bg-blue-600 text-white text-xs font-bold px-5 py-2 transition-colors inline-block text-center">READ MORE</Link>
          <span className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-blue-500 transition-colors"><Share2 size={14} /> Share</span>
        </div>
      </div>
    </article>
  );
}

function TrendingCard({ item }) {
  return (
    <Link href={`/news/${item.id}`} className="flex flex-col group">
      <div className="relative w-full h-[110px] overflow-hidden">
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        {item.badge && <span className="absolute top-2 right-2 bg-[#f69a4d] text-white text-xs font-bold px-1.5 py-0.5 z-10">{item.badge}</span>}
      </div>
      {item.sponsored ? <p className="text-gray-400 text-[10px] flex items-center gap-1 mt-1"><Bell size={10} /> Sponsored content</p> : <p className="text-gray-400 text-[10px] flex items-center gap-1 mt-1"><Calendar size={10} /> {item.date}</p>}
      <p className="text-sm font-semibold text-gray-900 leading-snug mt-1 group-hover:text-blue-600 transition-colors">{item.title}</p>
    </Link>
  );
}

function CategoryCard({ cat }) {
  return (
    <Link href={`/category/${cat.label.toLowerCase()}`} className="relative overflow-hidden h-[56px] cursor-pointer group block">
      <Image src={cat.image} alt={cat.label} fill sizes="300px" className="object-cover brightness-50 group-hover:brightness-75 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <span className="text-white font-bold text-base">{cat.label}</span>
        <span className={`${cat.countColor} text-white text-sm font-bold w-7 h-7 flex items-center justify-center`}>{cat.count}</span>
      </div>
    </Link>
  );
}
// ─── DISCOVERY COMPONENTS ─────────────────────────────────────────────

function DiscoveryMainCard({ item }) {
  return (
    // Changed lg:pr-8 to lg:pr-5 and pb-8 to pb-5 for tighter outer spacing
    <article className="flex flex-col h-full group border-b lg:border-b-0 lg:border-r border-gray-200 lg:pr-5 pb-5 lg:pb-0">
      
      {/* Changed mb-5 to mb-3 for tighter image spacing */}
      <div className="relative w-full aspect-[3/2] overflow-hidden mb-1">
        <Link href={`/news/${item.id}`}>
          <Image 
            src={item.image} 
            alt={item.title} 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <span className={`absolute bottom-4 left-4 ${item.categoryColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}>
            {item.category}
          </span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Changed mb-3 to mb-2 */}
        <div className="text-[11px] text-gray-400 mb-2 flex items-center gap-1">
          <Calendar size={12} /> <time>{item.date}</time>
        </div>

        {/* Changed mb-3 to mb-2 */}
        <h3 className="text-xl md:text-2xl md:text-[26px] font-bold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/news/${item.id}`}>{item.title}</Link>
        </h3>

        <div className="text-[11px] font-bold text-gray-400 uppercase mb-3 tracking-wide">
          By <span className="text-gray-600 font-bold">{item.author}</span>
        </div>

        {/* Changed mb-6 to mb-4 */}
        <p className="text-[15px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {item.excerpt}
        </p>

        <div className="mt-auto border-t border-gray-100 pt-2 flex items-center gap-5 text-gray-400 text-[11px] font-medium">
          {/* ... icons stay same ... */}
        </div>
      </div>
    </article>
  );
}

// 2. MIDDLE COLUMN: Horizontal Layout (Small Image Left, Text Right)
function DiscoveryMiddleItem({ item }) {
  return (
    <article className="flex gap-5 border-b border-gray-100 pb-8 mb-6 last:border-0 last:mb-0 last:pb-0 group">
      {/* Left: Image (Fixed Width) */}
      <div className="relative w-[140px] h-[95px] flex-shrink-0 overflow-hidden">
        <Link href={`/news/${item.id}`}>
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

      {/* Right: Content */}
      <div className="flex flex-col flex-1 min-w-0 justify-between py-0.5">
        <div>
          <div className="flex flex-wrap gap-1 mb-2">
            <span className={`${item.categoryColor} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
              {item.category}
            </span>
            {item.secondaryCategory && (
              <span className={`${item.secondaryColor} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
                {item.secondaryCategory}
              </span>
            )}
          </div>

          <h4 className="font-bold text-[16px] text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
            <Link href={`/news/${item.id}`}>{item.title}</Link>
          </h4>
        </div>

        <div className="text-[11px] text-gray-400 mt-2 flex items-center gap-1">
          {item.isSponsored ? (
            <><Bell size={11} /> Sponsored content</>
          ) : (
            <><Calendar size={11} /> <time>{item.date}</time></>
          )}
        </div>
      </div>
    </article>
  );
}

// 3. RIGHT COLUMN: Text Only List
function DiscoveryRightItem({ item }) {
  return (
    <article className="flex flex-col border-b border-gray-100 pb-5 mb-5 last:border-0 last:mb-0 group">
      <div className="flex flex-wrap gap-1 mb-2">
        <span className={`${item.categoryColor} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
          {item.category}
        </span>
        {item.secondaryCategory && (
           <span className={`${item.secondaryColor} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
             {item.secondaryCategory}
           </span>
        )}
      </div>

      <h4 className="font-bold text-[15px] text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
        <Link href={`/news/${item.id}`}>{item.title}</Link>
      </h4>

      <div className="text-[11px] text-gray-400 flex items-center gap-1">
        <Calendar size={11} /> <time>{item.date}</time>
      </div>
    </article>
  );
}

function MostPopularCard({ item }) {
  return (
    <article className="flex flex-col group h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden mb-4">
        <Link href={`/news/${item.id}`}>
          <Image 
            src={item.image} 
            alt={item.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          
          {/* Orange Badge (Percentage) */}
          {item.badge && (
            <span className="absolute top-0 right-0 bg-[#f69a4d] text-white font-bold px-2 py-1 text-sm z-10">
              {item.badge}
            </span>
          )}

          {/* Bottom Left Categories */}
          <div className="absolute bottom-4 left-4 flex gap-1 z-10">
            <span className={`${item.categoryColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}>
              {item.category}
            </span>
            {item.secondaryCategory && (
              <span className={`${item.secondaryColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}>
                {item.secondaryCategory}
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="text-[11px] text-gray-400 mb-2 flex items-center gap-1">
          {item.isSponsored ? (
             <><Bell size={11} /> Sponsored content</>
          ) : (
             <><Calendar size={11} /> <time>{item.date}</time></>
          )}
        </div>

        <h3 className="font-bold text-[16px] text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/news/${item.id}`}>
            {item.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}
function TechOverlayCard({ item }) {
  return (
    <article className="relative w-full aspect-square md:aspect-[4/3] group overflow-hidden">
      <Link href={`/news/${item.id}`} className="block w-full h-full">
        {/* Background Image */}
        <Image 
          src={item.image} 
          alt={item.title} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

        {/* Top Badges */}
        <div className="absolute top-6 left-0 right-0 flex justify-center gap-1 z-10">
          {item.categories ? (
            item.categories.map((cat, idx) => (
              <span key={idx} className={`${cat.color} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}>
                {cat.label}
              </span>
            ))
          ) : (
            <span className={`${item.categoryColor} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider`}>
              {item.category}
            </span>
          )}
        </div>

        {/* Content Container (Centered) */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-10 text-white z-20">
          
          {/* Date / Sponsored Label */}
          <div className="text-[11px] font-medium mb-3 opacity-90 flex items-center gap-1.5">
            {item.isSponsored ? (
               <><Bell size={12} /> Sponsored content</>
            ) : (
               <><Calendar size={12} /> <time>{item.date}</time></>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 drop-shadow-sm group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>

          {/* Author */}
          <div className="text-[11px] font-bold uppercase tracking-widest mb-4 opacity-80">
            By {item.author}
          </div>

          {/* Excerpt */}
          <p className="text-[14px] leading-relaxed mb-6 opacity-90 line-clamp-2 md:line-clamp-3 max-w-lg">
            {item.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
function TrendingCircleCard({ item }) {
  return (
    <article className="flex gap-5 items-start group">
      {/* Circular Image Container */}
      <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28">
        <Link href={`/news/${item.id}`} className="block w-full h-full relative">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill
            sizes="(max-width: 768px) 96px, 112px"
            className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105" 
          />
          
          {/* Percentage Badge (Overlapping the circle) */}
          {item.badge && (
            <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-[#f69a4d] text-white font-bold text-[11px] px-2 py-1 shadow-sm z-10">
              {item.badge}
            </span>
          )}
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-1">
        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-2">
          {item.categories.map((cat, idx) => (
            <span key={idx} className={`${cat.color} text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
              {cat.label}
            </span>
          ))}
        </div>

        {/* Title */}
        <h4 className="font-bold text-[15px] md:text-[16px] text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
          <Link href={`/news/${item.id}`}>
            {item.title}
          </Link>
        </h4>
      </div>
    </article>
  );
}
// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "Daily News",
    "url": "https://www.yourwebsite.com",
    "logo": "https://www.yourwebsite.com/logo.png",
    "sameAs": ["https://twitter.com/yourhandle"]
  };

  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-20">
        <h1 className="sr-only">Daily News Home - Politics, Business and World Headlines</h1>

        {/* TOP CONTENT GRID */}
        <div className="border-b-2 border-black mb-6">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">Politics</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Latest events and news</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {politicsNews.map((news) => <NewsCard key={news.id} slug={news.id} {...news} />)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8 mb-7">
          {secondaryNews.map((news) => <NewsCard key={news.id} slug={news.id} {...news} />)}
        </div>

        <div className="border-b-2 border-black mb-8">
          <h2 className="text-[28px] font-bold text-black mb-0 leading-tight">In other News</h2>
          <p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Something special from all over the world</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Link href="/news/pinterest-ipo" className="relative group cursor-pointer overflow-hidden h-125 md:h-auto border border-gray-200 block">
            <Image src="/Davenport4-2-1024x683.jpg" alt="Pinterest news" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors z-10" />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-12 pb-12 md:pb-2 text-white z-20">
              <div className="flex gap-2 mb-4 md:pb-40">
                <span className="bg-[#2196f3] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Business</span>
                <span className="bg-[#00008b] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Politics</span>
              </div>
              <div className="text-[12px] font-medium mb-2 flex items-center gap-1">🔔 Sponsored content</div>
              <h3 className="text-2xl font-bold leading-tight mb-4 max-w-md">Pinterest prices IPO at $19 a share, valuation tops $10 billion</h3>
              <div className="text-[12px] font-bold uppercase tracking-widest mb-6">By Davenport</div>
              <p className="text-[16px] italic font-serif leading-relaxed max-w-sm border-t border-white/20 pt-4">"Although there doesn't seem to be much hope of a Friends reunion episode any time..."</p>
            </div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <NewsCard slug="democrats-fox" image="/Davenport4-6.jpg" category="Business" categoryColor="bg-[#2196f3]" date="March 25, 2019" author="Davenport" title="2020 Democrats Seek Voters in an Unusual Spot: Fox" description="Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart..." />
            <NewsCard slug="macron-notre-dame" image="/Davenport4-2-1024x683.jpg" category="Politics" categoryColor="bg-[#00008b]" date="March 25, 2019" author="Davenport" title="Macron vows to rebuild a 'more beautiful' Notre-Dame in 5 years" description="First up, you need to know that Zara's sales start online at 10 p.m. now, there isn't a sale.." />
          </div>
        </div>

        <div className="border-b-2 border-black mt-8"><h2 className="text-[28px] font-bold text-black mb-0 leading-tight">Healthcare</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mt-8 mb-8">
          {healthcareNews.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="flex flex-col gap-3 group cursor-pointer">
              <div className="flex gap-2">{item.badges.map((badge, bIdx) => <span key={bIdx} className={`${badge.color} text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider`}>{badge.text}</span>)}</div>
              <h3 className="text-[17px] font-bold leading-tight text-[#222] group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <div className="text-[11px] text-gray-400 flex items-center gap-1">{item.isSponsored ? <span className="flex items-center gap-1">🔔 Sponsored content</span> : <span className="flex items-center gap-1">📅 {item.date}</span>}</div>
            </Link>
          ))}
        </div>

        <div className="border-b-2 border-black mb-8"><h2 className="text-[28px] font-bold text-black mb-0 leading-tight">World</h2><p className="text-gray-400 text-[14px] font-medium mb-4 uppercase tracking-tight">Events</p></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <article className="lg:col-span-8 group cursor-pointer">
             <Link href="/news/world-main-story" className="block">
              <div className="relative aspect-video overflow-hidden mb-6"><Image src="/Davenport4-6.jpg" alt="World News" fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover transition-transform duration-500" /><div className="absolute bottom-4 left-4 flex gap-2 z-10"><span className="bg-[#2196f3] text-[10px] font-bold px-2 py-1 text-white uppercase">Business</span><span className="bg-[#e91e63] text-[10px] font-bold px-2 py-1 text-white uppercase">Video</span></div></div>
              <div className="space-y-4"><span className="text-[11px] text-gray-400 flex items-center gap-1">📅 March 25, 2019</span><h2 className="text-3xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">2020 Democrats Seek Voters in an Unusual Spot: Fox News</h2><div className="text-[11px] font-bold text-gray-400 uppercase">By <span className="text-gray-600">Davenport</span></div><p className="text-gray-500 text-[15px] leading-relaxed line-clamp-4">Baby blue didn't just steal the show this fashion month, it also stole a piece of my heart..</p><div className="flex justify-between items-center pt-4"><span className="bg-[#2196f3] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors inline-block">Read More</span><span className="flex items-center gap-1 text-black uppercase font-bold text-[12px]"><Share2 size={14} /> Share</span></div></div>
            </Link>
          </article>
          <aside className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/news/hillary-clinton-time-100" className="border border-gray-100 group cursor-pointer shadow-sm hover:shadow-md transition-shadow block"><div className="relative aspect-video overflow-hidden"><Image src="/Davenport4-2-1024x683.jpg" alt="Hillary Clinton" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" /><div className="absolute top-0 right-0 bg-[#f69a4d] text-white font-bold px-3 py-1 text-lg z-10">84%</div><div className="absolute bottom-4 left-4 flex gap-2 z-10"><span className="bg-[#2196f3] text-[10px] font-bold px-2 py-1 text-white uppercase">Business</span><span className="bg-[#e91e63] text-[10px] font-bold px-2 py-1 text-white uppercase">Celebrity</span></div></div><div className="p-6 space-y-3"><span className="text-[11px] text-gray-400">📅 March 25, 2019</span><h3 className="text-xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">Hillary Clinton to Speak at the TIME 100 Summit on April 23 in New York, NY</h3><div className="flex justify-between items-center pt-4 border-t border-gray-50"><span className="flex items-center gap-1 text-black font-bold uppercase text-[11px]"><Share2 size={13} /> Share</span></div></div></Link>
            <Link href="/news/democrat-barr-report" className="border border-gray-100 group cursor-pointer shadow-sm hover:shadow-md transition-shadow block"><div className="relative aspect-video overflow-hidden"><Image src="/Davenport4-6.jpg" alt="Top Democrat" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" /><div className="absolute top-0 right-0 bg-[#3f51b5] text-white font-bold px-3 py-1 text-lg z-10">87%</div><div className="absolute bottom-4 left-4 bg-[#2196f3] text-[10px] font-bold px-2 py-1 text-white uppercase z-10">Business</div></div><div className="p-6 space-y-3"><span className="text-[11px] text-gray-400">📅 March 25, 2019</span><h3 className="text-xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">The Latest: Top Democrat says Barr is trying to spin report</h3><div className="flex justify-between items-center pt-4 border-t border-gray-50"><span className="flex items-center gap-1 text-black font-bold uppercase text-[11px]"><Share2 size={13} /> Share</span></div></div></Link>
          </aside>
        </div>

        <Newsletter />
        <AdBanner />

        {/* ─── NEWS LIST + SIDEBAR ─── */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN */}
          <div className="flex-1 min-w-0">
            {/* First 5 cards */}
            {newsCards.slice(0, 4).map((card) => (
              <NewsListCard key={card.id} card={card} />
            ))}

            {/* Horizontal Ad */}
            <div className="mt-2 mb-6 w-full h-[90px] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm tracking-widest">
              728×90 AD
            </div>

            {/* ✅ SENTINEL: Ad stops sticking when scrolling past this point */}
            <div id="ad-sentinel" className="h-0 w-full" />

            {/* Rest of the cards */}
            {newsCards.slice(4).map((card) => (
              <NewsListCard key={card.id} card={card} />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <aside className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0">
            
            {/* 1. STICKY AD COMPONENT: This will handle its own sticking logic */}
            <StickyAd />

            {/* 2. Content BELOW the Ad (Trending + Categories) */}
            <div className="mb-6 mt-14">
              <h3 className="font-bold text-base text-gray-900 text-center pb-2 mb-4 border-b-2 border-gray-800">Trending today</h3>
              <div className="grid grid-cols-2 gap-4">
                {trendingNews.map((item) => (
                  <TrendingCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base text-gray-900 text-center pb-2 mb-4 border-b-2 border-gray-800">Categories</h3>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <CategoryCard key={cat.label} cat={cat} />
                ))}
              </div>
            </div>

          </aside>
        </div>
{/* ─── NEW: DISCOVERY SECTION ─── */}
        <section aria-labelledby="discovery-heading" className="mt-7 mb-20">
          <div className="border-b-2 border-black mb-8 pb-1">
            <h2 id="discovery-heading" className="text-[28px] font-bold text-black leading-tight">
              Discovery
            </h2>
            <p className="text-gray-400 text-[14px] font-medium uppercase tracking-tight">
              Never miss what people read
            </p>
          </div>

          {/* RESPONSIVE GRID LOGIC:
             - Base: 1 column (Stacked)
             - MD (Tablet): 2 columns. Main card takes full top width. Middle & Right lists sit side-by-side below.
             - LG (Desktop): 3 distinct columns side-by-side.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            
            {/* COLUMN 1: Main Feature Card */}
            {/* On Tablet (md), this spans full width (2 cols) to look like a hero item */}
            <div className="md:col-span-2 lg:col-span-1">
              <DiscoveryMainCard item={discoveryMain} />
            </div>

            {/* COLUMN 2: Middle List (Thumbnail Left + Text Right) */}
            {/* Added border-r only for desktop to create separation line */}
            <div className="flex flex-col lg:border-r border-gray-200 lg:pr-8">
              {discoveryMiddle.map((item) => (
                <DiscoveryMiddleItem key={item.id} item={item} />
              ))}
            </div>

            {/* COLUMN 3: Right List (Text Only) */}
            <div className="flex flex-col h-full pt-4 lg:pt-0">
              {discoveryRight.map((item) => (
                <DiscoveryRightItem key={item.id} item={item} />
              ))}
            </div>

          </div>
        </section>
        {/* ─── END DISCOVERY SECTION ─── */}
        <AdBanner />
{/* ─── MOST POPULAR SECTION ─── */}
        <section aria-labelledby="most-popular-heading" className="mt-16 mb-20">
          <div className="border-b-2 border-black mb-8 pb-1">
            <h2 id="most-popular-heading" className="text-[28px] font-bold text-black leading-tight">
              Most Popular
            </h2>
            <p className="text-gray-400 text-[14px] font-medium uppercase tracking-tight">
              Don't miss interesting
            </p>
          </div>

          {/* RESPONSIVE GRID:
             - grid-cols-1: Mobile (1 card per row)
             - sm:grid-cols-2: Tablet 768px+ (2 cards per row)
             - lg:grid-cols-4: Desktop (4 cards per row)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mostPopularNews.map((item) => (
              <MostPopularCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {/* ─── END MOST POPULAR SECTION ─── */}
        <AdBanner />
{/* ─── TECHNOLOGY SECTION ─── */}
        <section aria-labelledby="tech-heading" className="mt-16 mb-20">
          <div className="border-b-2 border-black mb-8 pb-1">
            <h2 id="tech-heading" className="text-[28px] font-bold text-black leading-tight">
              Technology
            </h2>
            <p className="text-gray-400 text-[14px] font-medium uppercase tracking-tight">
              Hi-Tech news
            </p>
          </div>

          {/* RESPONSIVE GRID:
             - grid-cols-1: Mobile (Stacked vertical cards)
             - md:grid-cols-2: Tablet & Desktop (Side-by-side cards)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyNews.map((item) => (
              <TechOverlayCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {/* ─── END TECHNOLOGY SECTION ─── */}
{/* ─── TRENDING SECTION (Circular Layout) ─── */}
        {/* CHANGED: Reduced 'mt-16' to 'mt-10' and 'mb-20' to 'mb-12' */}
        <section aria-labelledby="trending-circle-heading" className="mt-1 mb-1">
          
          {/* CHANGED: Reduced 'mb-10' to 'mb-6' to bring grid closer to title */}
          <div className="border-b-2 border-black mb-1 pb-1">
            <h2 id="trending-circle-heading" className="text-[28px] font-bold text-black leading-tight">
              Trending
            </h2>
            <p className="text-gray-400 text-[14px] font-medium uppercase tracking-tight">
              Other News
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {trendingSectionData.map((item) => (
              <TrendingCircleCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {/* ─── END TRENDING SECTION ─── */}
      </div>
    </main>
  );
}