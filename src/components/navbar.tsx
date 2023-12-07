import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-10/12 border-b border-neutral-900 h-20 flex items-center justify-between">
      <Link href="/">
        <div className="text-6xl">Thoughts.</div>
      </Link>
      <Link href="/about">
        by <span className="text-xl font-bold">Akish T P</span>
      </Link>
    </nav>
  );
}
