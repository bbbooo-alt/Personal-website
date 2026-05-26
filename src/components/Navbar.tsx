"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
            pathname === item.href
              ? "text-white"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {item.label}
          {pathname === item.href && (
            <span className="absolute -bottom-1 left-0 h-px w-full bg-white" />
          )}
        </Link>
      ))}
    </nav>
  );
}
