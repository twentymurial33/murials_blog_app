import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue">
          Murial-Blog
        </Link>
        <nav className="flex gap-6 items-center text-darkGrey text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/category">Category</Link>
          <Link href="/about">About Me</Link>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center bg-blue text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            ☕ Buy Me A Coffee
          </a>
        </nav>
      </div>
    </header>
  );
}
