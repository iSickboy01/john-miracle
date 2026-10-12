import type { Metadata } from "next";
import { ContentList } from "@/components/ContentList";
import { listContent } from "@/lib/content";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const items = listContent("blog");

  return (
    <div className="max-w-3xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-teal">Blog</p>
        <h1 className="mt-3 font-serif text-4xl">Notes</h1>
        <p className="mt-4 text-slate">
          Thoughts on medicine, data, building, and the rest. Comments sit at
          the bottom of each post.
        </p>
      </header>
      <ContentList
        items={items}
        basePath="/blog"
        empty="Add markdown files in content/blog."
      />
    </div>
  );
}
