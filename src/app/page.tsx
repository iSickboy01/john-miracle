import Link from "next/link";
import { ContentList } from "@/components/ContentList";
import { listContent } from "@/lib/content";
import { lanes, site } from "@/lib/site";

export default function HomePage() {
  const posts = listContent("blog").slice(0, 3);
  const poems = listContent("poems").slice(0, 2);
  const work = listContent("work").slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="max-w-3xl pt-6">
        <p className="text-xs uppercase tracking-[0.2em] text-teal">{site.role}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          Not a stack dump. A record of how a clinician-in-training thinks:
          research questions, messy datasets, shipped automations, and the odd
          poem when the lab notebook is not the right form.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="rounded-full bg-ink px-5 py-2 text-sm text-paper"
          >
            See the work
          </Link>
          <Link
            href="/research"
            className="rounded-full border border-ink/20 px-5 py-2 text-sm"
          >
            Research & data
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {lanes.map((lane) => (
          <article
            key={lane.title}
            className="rounded-2xl border border-ink/10 bg-mist/50 p-6"
          >
            <h2 className="font-serif text-xl">{lane.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">{lane.body}</p>
          </article>
        ))}
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-3xl">Selected work</h2>
          <Link href="/work" className="text-sm text-teal">
            All case studies
          </Link>
        </div>
        <ContentList
          items={work}
          basePath="/work"
          empty="Case studies will land here."
        />
      </section>

      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-serif text-3xl">From the notebook</h2>
            <Link href="/blog" className="text-sm text-teal">
              Blog
            </Link>
          </div>
          <ContentList items={posts} basePath="/blog" empty="No posts yet." />
        </div>
        <div>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-serif text-3xl">Poems</h2>
            <Link href="/poems" className="text-sm text-teal">
              All poems
            </Link>
          </div>
          <ContentList items={poems} basePath="/poems" empty="No poems yet." />
        </div>
      </section>
    </div>
  );
}
