"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Smile Laboとは" },
  { href: "#benefits", label: "できること" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "よくある質問" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060815]/85 backdrop-blur">
      <div className="wrap flex h-[64px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--color-cyan)] text-lg neon-text-cyan">
            ☺
          </span>
          <span className="font-display leading-tight">
            <span className="block text-base font-800 tracking-wide neon-text-pink">
              SMILE LABO
            </span>
            <span className="block text-[10px] text-[var(--color-muted)]">by 信頼発電所</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-cyan)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden rounded-full border border-[var(--color-pink)] px-5 py-2 text-sm font-semibold text-[var(--color-pink)] transition hover:bg-[var(--color-pink)]/10 sm:inline-block"
          >
            参加してみる
          </a>
          <button
            type="button"
            aria-label="メニューを開く"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-lg md:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#060815] md:hidden">
          <div className="wrap flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-[var(--color-muted)] last:border-none"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="my-3 rounded-full bg-[var(--color-pink)] py-3 text-center text-sm font-semibold text-black"
            >
              参加してみる
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
