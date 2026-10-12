import Link from "next/link";
import type { ContentItem } from "@/lib/content";

export function ContentList({
  items,
  basePath,
  empty,
}: {
  items: ContentItem[];
  basePath: string;
  empty: string;
}) {
  if (items.length === 0) {
    return <p className="text-slate">{empty}</p>;
  }

  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => (
        <li key={item.slug}>
          <Link
            href={`${basePath}/${item.slug}`}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h2 className="font-serif text-xl group-hover:text-teal">
                {item.title}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate">{item.summary}</p>
            </div>
            <time className="shrink-0 text-xs uppercase tracking-wider text-slate">
              {item.date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
