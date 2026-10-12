import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coming soon",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-paper">
      <div className="mx-auto w-full max-w-2xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-teal">Coming soon</p>
        <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
          {site.name === "John Miracle" ? "A mind in several tabs." : `${site.name}.`}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate">

          Medicine, data, systems, and poems I wrote before my brain decided that rhyming was a deprecated feature.

          The furniture is still being arranged. Please excuse the developer.
        </p>
        <p className="mt-4 text-sm lowercase tracking-[0.18em] text-slate">
          {site.role}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-paper"
        >
          Email me
        </a>
      </div>
    </div>
  );
}
