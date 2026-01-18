import { Link } from "react-router-dom";

// Top section (Featured + side)
const TOP_POSTS = [
  {
    slug: "us-interference-iran-protests-2026-analysis",
    title:
      "Allegations of U.S. Interference in Iran’s Protests: What’s Happening and Why It Matters",
    date: "Jan 18, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "Iran’s leadership is again accusing the United States of fueling unrest, while U.S. officials insist they support peaceful protest and human rights. Here’s what we know so far—and what remains contested.",
    tag: "geopolitics",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "ice-officers-minneapolis-protests-injunction-2026",
    title:
      "ICE Officers in Minneapolis Under Scrutiny After Protest Clashes and Federal Court Restrictions",
    date: "Jan 18, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "A federal judge has issued major restrictions on ICE tactics in Minnesota after protests and allegations of excessive force, raising new concerns about how immigration enforcement is operating in Minneapolis.",
    tag: "us-news",
    image:
      "https://time.com/redesign/_next/image/?url=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2026%2F01%2FGettyImages-2254678149.jpg%3Fquality%3D85%26w%3D1024&w=3840&q=75",
  },
  {
    slug: "jodie-foster-alexandra-hedison-divorce-rumor",
    title:
      "Rumors Swirl About a Possible Jodie Foster & Alexandra Hedison Divorce — But Nothing Is Confirmed",
    date: "Jan 18, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "Social media rumors claim Jodie Foster and Alexandra Hedison may be splitting up, but there has been no official confirmation—and the real reason behind any alleged separation remains unknown.",
    tag: "celebrities",
    image:
      "https://images.hellomagazine.com/horizon/square/fe54de169346-gettyimages-1327372248.jpg",
  },
];

// Latest section ONLY
const LATEST_POSTS = [
  {
    slug: "kids-online-safety-laws-2026-us",
    title:
      "Kids Online Safety Becomes a Major U.S. Flashpoint as New Laws and Legal Battles Grow in 2026",
    date: "Jan 18, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "As 2026 begins, child online safety policies are becoming a national priority in the U.S., with growing legal fights over how far governments can go to regulate platforms and protect minors.",
    tag: "kids",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "venezuela-maduro-political-prisoners-release-2026",
    title:
      "Venezuela Under Maduro Faces Renewed Pressure as Rights Group Reports Political Prisoner Releases",
    date: "Jan 18, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "A Venezuelan rights group says 139 political prisoners have been released since early January, raising questions about whether Maduro’s government is responding to pressure—or simply reshaping its political image.",
    tag: "politics",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "nfl-coaching-carousel-2026-harbaugh-giants-stefanski-falcons",
    title:
      "NFL Coaching Carousel Heats Up: Giants Hire John Harbaugh as Falcons Name Kevin Stefanski",
    date: "Jan 18, 2026",
    author: "Mark Jason",
    minutes: 4,
    excerpt:
      "The NFL offseason is already delivering major moves as the New York Giants sign John Harbaugh and the Atlanta Falcons hire Kevin Stefanski, signaling big rebuilds for both franchises.",
    tag: "sports",
    image:
      "https://news.ssbcrack.com/wp-content/uploads/2026/01/NFL-Coaching-Carousel-Heats-Up-with-Changes-Across-Multiple-Teams-860x573.jpeg",
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
    geopolitics: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    "us-news": "bg-emerald-50 text-emerald-700 ring-emerald-100",
    celebrities: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-100",
    kids: "bg-amber-50 text-amber-800 ring-amber-100",
    politics: "bg-rose-50 text-rose-700 ring-rose-100",
    sports: "bg-cyan-50 text-cyan-800 ring-cyan-100",
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
      {/* Title row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Today’s picks
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Explore today’s top stories across politics, entertainment, and global events — curated to keep you informed in minutes.
          </p>
        </div>

        <div className="w-full sm:w-[320px]">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <span className="text-slate-400">⌘</span>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="Search stories"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Featured + side cards */}
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

      {/* Latest section */}
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

                  <p className="mt-2 text-slate-600 line-clamp-2">
                    {post.excerpt}
                  </p>

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





