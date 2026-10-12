import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-teal">Contact</p>
        <h1 className="mt-3 font-serif text-4xl">Write.</h1>
        <p className="mt-4 text-slate">
          Research collabs, data questions, builds, or something quieter. Keep
          it specific.
        </p>
      </header>
      <div className="space-y-4 rounded-2xl border border-ink/10 bg-mist/50 p-6">
        <p>
          <span className="text-sm uppercase tracking-wider text-slate">Email</span>
          <br />
          <a href={`mailto:${site.email}`} className="font-serif text-xl text-teal">
            {site.email}
          </a>
        </p>
        <p className="text-sm text-slate">{site.location}</p>
      </div>
    </div>
  );
}
