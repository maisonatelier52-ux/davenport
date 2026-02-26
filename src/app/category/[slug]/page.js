import Link from "next/link";
import Image from "next/image";
import { Share2, Bell, Calendar } from 'lucide-react';
import StickyAd from "@/components/StickyAd"; 

// ─── 1. DATA (Static List - Will show on ALL category pages) ───
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

// ─── 2. HELPER COMPONENTS ───

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

// ─── 3. CATEGORY HERO (The New Section) ───
function CategoryHero({ categoryName, count }) {
  // You can customize this image or make it dynamic if you want
  const heroImage = "/Davenport4-6.jpg"; 

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-10">
      {/* Background Image with Dark Overlay */}
      <Image 
        src={heroImage} 
        alt={categoryName} 
        fill 
        className="object-cover brightness-[0.4]" // Darkens image so text pops
        priority 
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto">
        
        {/* Blue Badge */}
        <span className="bg-[#2196f3] text-white text-[10px] font-bold uppercase px-3 py-1 mb-4 tracking-widest">
          {count} Posts
        </span>

        {/* Breadcrumb Label */}
        <span className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
          Browsing Category
        </span>

        {/* Huge Category Title (Dynamic from URL) */}
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 capitalize leading-none">
          {categoryName}
        </h1>

        {/* Description Text */}
        <p className="text-white/90 text-sm md:text-lg font-serif italic max-w-2xl leading-relaxed">
          Browse the latest headlines, in-depth analysis, and breaking stories from the world of {categoryName}. Stay informed with our curated coverage.
        </p>
      </div>
    </div>
  );
}

// ─── 4. SEO METADATA ───
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${categoryName} News | Daily News`,
    description: `Latest breaking news coverage in ${categoryName}.`,
    openGraph: {
      type: "website",
      title: `${categoryName} News`,
      siteName: "Daily News",
    },
  };
}

// ─── 5. MAIN PAGE COMPONENT ───
export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // SEO: JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} News`,
    "description": `News articles about ${categoryName}`,
    "url": `https://yourwebsite.com/category/${slug}`,
  };

  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />



      <div className="max-w-7xl mx-auto px-4 pt-4 pb-20">
              {/* 1. HERO SECTION (Dynamic Title, but Content below is static) */}
      <CategoryHero categoryName={categoryName} count={newsCards.length} />
        {/* ─── NEWS LIST + SIDEBAR ─── */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN: News Feed (STATIC - Shows ALL cards always) */}
          <div className="flex-1 min-w-0">
            {/* First 5 cards */}
            {newsCards.slice(0, 4).map((card) => (
              <NewsListCard key={card.id} card={card} />
            ))}

            {/* Horizontal Ad */}
            <div className="mt-2 mb-6 w-full h-[90px] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm tracking-widest">
              728×90 AD
            </div>

            {/* Sentinel for sticky ad stop */}
            <div id="ad-sentinel" className="h-0 w-full" />

            {/* Rest of the cards */}
            {newsCards.slice(4).map((card) => (
              <NewsListCard key={card.id} card={card} />
            ))}
          </div>

          {/* RIGHT COLUMN: Sidebar (Same as Home) */}
          <aside className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0">
            
            {/* 1. STICKY AD COMPONENT */}
            <StickyAd />

            {/* 2. Content BELOW the Ad */}
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
      </div>
    </main>
  );
}