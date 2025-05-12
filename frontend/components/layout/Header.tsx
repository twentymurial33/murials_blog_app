import Link from "next/link";


export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          Murial-Blog
        </Link>
        <nav className="flex gap-6 items-center text-gray-700 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/category">Category</Link>
          <Link href="/about">About Me</Link>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center bg-violet-600 text-white px-4 py-2 rounded-md text-sm hover:bg-violet-700 transition"
          >
            ☕ Buy Me A Coffee
          </a>
        </nav>
      </div>
    </header>
  );
}
