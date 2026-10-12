import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-serif text-lg tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate sm:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-paper sm:hidden"
        >
          Contact
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto px-6 pb-3 text-sm text-slate sm:hidden">
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
