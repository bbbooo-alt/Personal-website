"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/projects", label: "项目" },
  { href: "/contact", label: "联系" },
];

/**
 * 导航栏组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Remember me
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300",
                pathname === item.href
                  ? "text-white"
                  : "hover:text-white"
              )}
              style={pathname === item.href ? {} : { color: 'var(--foreground-muted)' }}
            >
              {item.label}
              {pathname === item.href && (
                <span 
                  className="absolute -bottom-1 left-0 h-0.5 w-full"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
