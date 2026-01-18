import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">404</h2>
      <p className="mt-2 text-gray-600">Page not found.</p>
      <Link
        to="/blog"
        className="mt-6 inline-block rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Go to Blog
      </Link>
    </div>
  );
}

