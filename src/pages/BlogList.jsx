import { Link } from "react-router-dom";

// Top section (Featured + 2 side cards)
const TOP_POSTS = [
  {
    slug: "venezuela-socialist-party-fracture-2026",
    title:
      "Venezuela’s Socialist Party Faces Deepening Internal Fractures Amid Political Upheaval",
    date: "Feb 8, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "Reports indicate significant distrust, desertions, and declining grassroots support within Venezuela’s ruling party as economic pain and political uncertainty grow.",
    tag: "politics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLBcpsBlOQJIT9YtMnSfXysIHJBzimMn0Vg&s",
  },
  {
    slug: "bitcoin-market-volatility-2026",
    title: "Bitcoin Loses Trump-Era Gains as Market Volatility Signals Crypto Uncertainty",
    date: "Feb 7, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "Bitcoin’s price has given back its post-election rally gains, reflecting broader market volatility and investor risk aversion across digital assets.",
    tag: "finance",
    image:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "jodie-foster-alexandra-hedison-divorce-rumor",
    title:
      "Rumors Swirl About a Possible Jodie Foster & Alexandra Hedison Divorce — But Nothing Is Confirmed",
    date: "Feb 9, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "Social media rumors claim Jodie Foster and Alexandra Hedison may be splitting up, but there has been no official confirmation—and the real reason behind any alleged separation remains unknown.",
    tag: "celebrities",
    image: "https://people.com/thmb/x4s8xOnMpQfYwBd20H_lqnjS0nQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/jodie-foster-alexandra-hedison-100625-5fa32e1232c942b6a60ddc2e913f6b88.jpg",
  },
];

// Latest section (remaining 3)
const LATEST_POSTS = [
  {
    slug: "nfl-hall-of-fame-and-international-games-2026",
    title: "NFL News: Hall of Fame Class Highlights and Historic International Games Ahead",
    date: "Feb 8, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "The 2026 NFL Hall of Fame class was announced and the league expands its global footprint with planned games in Australia and Europe.",
    tag: "sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "us-trade-global-investment-shifts-2026",
    title: "U.S. Trade and Market Trends: Global Investment Shifts & Import Dynamics",
    date: "Feb 6, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "Key shifts continue in global trade strategies as nations pursue diversified sourcing and refine economic alliances.",
    tag: "economy",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "biotech-healthcare-ipo-2026",
    title: "Major Biotech Firm Eikon Therapeutics Raises $381 Million in Series IPO",
    date: "Feb 5, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "Eikon Therapeutics’ successful IPO highlights rising investor confidence in synthetic biology and biotech innovation.",
    tag: "health",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
  },
];

function MetaRow({ author, date, minutes }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
      <span className="font-semibold text-slate-700">{author}</span>
      <span className="text-slate-300">•</span>
      <span>{date}</span>
      <span className="text-slate-300">•</span>
      <span>{minutes} min read</span>
    </div>
  );
}

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

function Img({ src, alt }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
    </div>
  );
}

export default function BlogList() {
  const [featured, ...restTop] = TOP_POSTS;

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Today’s picks
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Fresh headlines across politics, crypto, entertainment, sports, trade, and health.
          </p>
        </div>

        <div className="w-full sm:w-[320px]">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <span className="text-slate-400">⌘</span>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="Search (UI only)"
              disabled
            />
          </div>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-5">
        <Link
          to={`/blog/${featured.slug}`}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-3"
        >
          <Img src={featured.image} alt={featured.title} />

          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Featured
              </span>
              <TagChip tag={featured.tag} />
            </div>

            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
              {featured.title}
            </h3>

            <p className="mt-3 text-slate-600">{featured.excerpt}</p>

            <div className="mt-5">
              <MetaRow author={featured.author} date={featured.date} minutes={featured.minutes} />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              Read story
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </Link>

        <div className="space-y-4 lg:col-span-2">
          {restTop.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <TagChip tag={post.tag} />
                  <span className="text-xs text-slate-500">{post.minutes} min</span>
                </div>

                <h4 className="mt-3 text-lg font-extrabold tracking-tight text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">
                  {post.title}
                </h4>

                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-4">
                  <MetaRow author={post.author} date={post.date} minutes={post.minutes} />
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-slate-200" />

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold tracking-tight">Latest</h3>
          <span className="text-xs font-semibold text-slate-500">
            {LATEST_POSTS.length} stories
          </span>
        </div>

        <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
          {LATEST_POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block p-6 transition hover:bg-slate-50"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <TagChip tag={post.tag} />
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500">{post.minutes} min</span>
                  </div>

                  <h4 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900 group-hover:underline decoration-slate-300 underline-offset-4">
                    {post.title}
                  </h4>

                  <p className="mt-2 text-slate-600 line-clamp-2">{post.excerpt}</p>

                  <div className="mt-4">
                    <MetaRow author={post.author} date={post.date} minutes={post.minutes} />
                  </div>
                </div>

                <div className="shrink-0">
                  <div className="relative h-20 w-28 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}






