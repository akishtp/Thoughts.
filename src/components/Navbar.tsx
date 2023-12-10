import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-11/12 border-b border-neutral-900 h-20 flex items-center justify-between md:w-10/12">
      <Link href="/">
        <div className="text-4xl md:text-6xl">Thoughts.</div>
      </Link>
      <Link href="/about">
        by <span className="text-lg font-bold md:text-xl">Akish T P</span>
      </Link>
    </nav>
  );
}
