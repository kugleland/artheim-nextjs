"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Kunstnere", href: "/artists" },
  { label: "Gallerier", href: "/galleries" },
  { label: "Udstillinger", href: "/exhibitions" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="border-b py-3 flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-3">
      <Link href="/" className="text-sm font-bold">
        AR-T
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-6 items-center text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx("hover:underline", {
              "font-bold underline": isActive(item.href),
            })}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="https://app.artheim.test/login"
          className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 transition"
        >
          Log ind
        </a>
      </nav>

      {/* Mobile menu toggle */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t shadow-md flex flex-col p-4 md:hidden z-50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={clsx("py-2", {
                "font-bold underline": isActive(item.href),
              })}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://auth.dinkunstplatform.dk/login"
            className="mt-4 bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition"
          >
            Log ind
          </a>
        </div>
      )}
    </header>
  );
}
