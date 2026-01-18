import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white font-extrabold">
              B
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-slate-500">Myk3ls Blog</p>
              <h1 className="text-base font-semibold tracking-tight">Stories</h1>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              Blog
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page */}
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Myk3ls Blog
        </div>
      </footer>
    </div>
  );
}



