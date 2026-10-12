import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-sm text-slate">
          {site.name} · clinic, code, and quiet pages.
        </p>
        <div className="flex gap-5 text-sm text-slate">
          <Link href={site.social.github} className="hover:text-ink">
            GitHub
          </Link>
          <Link href={site.social.linkedin} className="hover:text-ink">
            LinkedIn
          </Link>
          <Link href="/poems" className="hover:text-ink">
            Poems
          </Link>
        </div>
      </div>
    </footer>
  );
}
