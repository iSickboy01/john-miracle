import type { Metadata } from "next";
import { ContentList } from "@/components/ContentList";
import { listContent } from "@/lib/content";

export const metadata: Metadata = { title: "Poems" };

export default function PoemsPage() {
  const items = listContent("poems");

  return (
    <div className="max-w-3xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-teal">Poems</p>
        <h1 className="mt-3 font-serif text-4xl">A quieter room</h1>
        <p className="mt-4 text-slate">
          Separate from the case studies on purpose. Read these slowly.
        </p>
      </header>
      <ContentList
        items={items}
        basePath="/poems"
        empty="Add markdown files in content/poems."
      />
    </div>
  );
}
