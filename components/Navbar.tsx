"use client";

import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/data/content";

type NavbarProps = {
  setActiveSection: (section: string) => void;
};

export default function Navbar({ setActiveSection }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-between px-6">
      <span
        onClick={() => setActiveSection("Introduction")}
        className="font-bold text-sm tracking-tight cursor-pointer hover:opacity-70 transition"
      >
        ↗ {siteConfig.name}
      </span>
      <nav className="flex items-center gap-6 text-sm text-zinc-500">
        <button
          onClick={() => setActiveSection("Introduction")}
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          Home
        </button>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          LinkedIn ↗
        </a>
        <a
          href={siteConfig.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          Resume ↗
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}