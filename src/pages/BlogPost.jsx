import { Link, useParams } from "react-router-dom";

const POSTS_MAP = {
  "venezuela-socialist-party-fracture-2026": {
    title:
      "Venezuela’s Socialist Party Faces Deepening Internal Fractures Amid Political Upheaval",
    date: "Feb 8, 2026",
    author: "Mark Jason",
    minutes: 4,
    tag: "politics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLBcpsBlOQJIT9YtMnSfXysIHJBzimMn0Vg&s",
      
    body: [
      "In Venezuela, the country’s dominant Socialist Party (PSUV) is showing signs of deep internal tension, raising questions about the future stability of the government and political order.",
      "According to Reuters, reports from several states across the country reveal diminishing party participation, distrust among members, and shrinking bonuses and food aid typically used to reward loyalty. These changes come as Venezuela continues to struggle with rampant inflation, widespread poverty, and economic uncertainty that has eroded traditional support networks.",
    ],
  },

  "bitcoin-market-volatility-2026": {
    title: "Bitcoin Loses Trump-Era Gains as Market Volatility Signals Crypto Uncertainty",
    date: "Feb 7, 2026",
    author: "Mark Jason",
    minutes: 4,
    tag: "finance",
    image:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Bitcoin — once a standout performer under pro-crypto policy expectations — has recently retraced much of its earlier gains.",
      "According to a Reuters report, the largest cryptocurrency has lost key value levels that were buoyed by initial enthusiasm following the U.S. election, and renewed volatility has taken a toll on the broader crypto market.",
      "Technicals show a downtrend, with traders citing liquidations and pressure from equity sell-offs as contributing factors.",
      "Analysts note that as macroeconomic forces challenge riskier assets, Bitcoin’s performance is reflecting a cautious investor mood even as parts of the rally briefly recovered.",
    ],
  },

  "jodie-foster-alexandra-hedison-divorce-rumor": {
    title:
      "Rumors Swirl About a Possible Jodie Foster & Alexandra Hedison Divorce — But Nothing Is Confirmed",
    date: "Feb 9, 2026",
    author: "Mark Jason",
    minutes: 4,
    tag: "celebrities",
    image: "https://people.com/thmb/x4s8xOnMpQfYwBd20H_lqnjS0nQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/jodie-foster-alexandra-hedison-100625-5fa32e1232c942b6a60ddc2e913f6b88.jpg",
    body: [
      "Rumors have started circulating online suggesting that award-winning actress Jodie Foster and her spouse, Alexandra Hedison, may be going through a divorce. The claim has been spreading mostly through social media posts and entertainment discussion spaces, causing many fans to wonder if the famously private couple is quietly ending their marriage.",
      "However, it’s important to state clearly: there has been no official confirmation from Jodie Foster, Alexandra Hedison, or any verified spokesperson. At the moment, this remains unconfirmed speculation rather than an established public fact.",
      "What we know (and what we don’t)",
      "Jodie Foster and Alexandra Hedison have built a reputation for keeping their relationship out of the spotlight. Over the years, they’ve appeared together occasionally at major events, but they rarely comment on their personal life publicly.",
      "Because of that privacy, the alleged reason behind their split is not publicly known—and no trusted report has provided a clear explanation for what may be happening behind the scenes.",
      "Why the rumor is spreading fast",
      "Celebrity relationship rumors often spread rapidly when: a couple hasn’t been seen publicly for some time; there are no recent interviews referencing the marriage; fans notice changes in appearances at events or online posting habits.",
      "But without a confirmed statement, it’s easy for online discussions to turn into “news” even when the reality is unclear.",
      "The bottom line",
      "Right now, the idea of a divorce between Jodie Foster and Alexandra Hedison remains a rumor, and the cause—if there is any separation at all—has not been publicly confirmed or explained.",
      "Until credible outlets provide verified reporting or either party makes a public announcement, it’s best to treat these claims with caution and avoid spreading misinformation.",
    ],
  },

  "nfl-hall-of-fame-and-international-games-2026": {
    title: "NFL News: Hall of Fame Class Highlights and Historic International Games Ahead",
    date: "Feb 8, 2026",
    author: "Mark Jason",
    minutes: 4,
    tag: "sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
    body: [
      "The NFL world is buzzing with major developments on and off the field.",
      "Recent reports highlight the induction of iconic players like Drew Brees and Larry Fitzgerald into the Hall of Fame — a moment that celebrates the legacy of some of football’s most enduring stars.",
      "Meanwhile, the league is growing its international reach: the San Francisco 49ers will face the Los Angeles Rams in a regular-season game in Melbourne, Australia, marking a historic first for the sport.",
      "From legacy recognition to global expansion, American football continues to evolve as both a cultural and international sporting phenomenon.",
    ],
  },

  "us-trade-global-investment-shifts-2026": {
    title: "U.S. Trade and Market Trends: Global Investment Shifts & Import Dynamics",
    date: "Feb 6, 2026",
    author: "Mark Jason",
    minutes: 4,
    tag: "economy",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Global trade activities involving the United States have taken new directions as markets adapt to geopolitical and economic forces.",
      "Notably, Indian refiners are reportedly avoiding Russian oil in their bid to secure favorable trade conditions with the United States, reflecting strategic alignment and shifting import priorities.",
      "Simultaneously, investors are closely watching how global equities and risk assets like Bitcoin react to macro forces, including currency movements and negotiations tied to key export markets.",
      "These trends indicate that trade and investment are increasingly interconnected, with broad implications for commodity flows and bilateral economic relationships.",
    ],
  },

  "biotech-healthcare-ipo-2026": {
    title: "Major Biotech Firm Eikon Therapeutics Raises $381 Million in Series IPO",
    date: "Feb 5, 2026",
    author: "Mark Jason",
    minutes: 4,
    tag: "health",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    body: [
      "In healthcare and biotech news, Eikon Therapeutics — backed by prominent investors including Perlmutter — has successfully raised $381.2 million in its initial public offering, according to Reuters.",
      "The firm focuses on computational techniques and machine learning to accelerate drug discovery, signaling strong market appetite for biotech solutions that reduce development timelines and costs.",
      "Its IPO reflects broader trends in healthcare investment, where technology-driven pharmaceuticals and biologic innovation attract capital and aim to transform treatment landscapes.",
    ],
  },
};

function TagChip({ tag }) {
  const map = {
    politics: "bg-rose-50 text-rose-700 ring-rose-100",
    finance: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    celebrities: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-100",
    sports: "bg-cyan-50 text-cyan-800 ring-cyan-100",
    economy: "bg-amber-50 text-amber-800 ring-amber-100",
    health: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  };
  const cls = map[tag] ?? "bg-slate-100 text-slate-700 ring-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${cls}`}
    >
      {tag}
    </span>
  );
}

function MetaRow({ author, date, minutes }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
      <span className="font-semibold text-slate-800">{author}</span>
      <span className="text-slate-300">•</span>
      <span>{date}</span>
      <span className="text-slate-300">•</span>
      <span>{minutes} min read</span>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS_MAP[slug];

  if (!post) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold">Post not found</h2>
        <p className="mt-2 text-slate-600">This post doesn’t exist.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:underline"
      >
        ← Back to Blog
      </Link>

      <article className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          <div className="absolute bottom-4 left-4">
            <TagChip tag={post.tag} />
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>

          <MetaRow author={post.author} date={post.date} minutes={post.minutes} />

          <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
            {post.body.map((p, i) => (
              <p key={i} className="text-[15.5px] sm:text-[16px]">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Browse more
            </Link>

            <button
              type="button"
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Copy link
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}


 