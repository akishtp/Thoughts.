import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex justify-center h-">
      <div className="w-10/12 border-b border-neutral-900 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="text-6xl">Blogs.</span>
        </Link>
        <Link href="/blogs">
          <span className="flex">
            <p className="text-lg">All blogs&nbsp;</p>
            <ArrowRightIcon className="w-4" />
          </span>
        </Link>
      </div>
    </nav>
  );
}
