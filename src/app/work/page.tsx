import type { Metadata } from "next";
import { ContentList } from "@/components/ContentList";
import { listContent } from "@/lib/content";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  const items = listContent("work");

  return (
    <div className="max-w-3xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-teal">Work</p>
        <h1 className="mt-3 font-serif text-4xl">Case studies</h1>
        <p className="mt-4 text-slate">
          Digital marketing, website design, GoHighLevel, ClickUp, Make, and
          Zapier. Each piece is a problem, a system, and what changed.
        </p>
      </header>
      <ContentList
        items={items}
        basePath="/work"
        empty="Add markdown files in content/work."
      />
    </div>
  );
}
