import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Research" };

const threads = [
  {
    title: "Questions first",
    body: "What would change a clinical decision? That is the filter before any notebook. Exploratory analysis in R or pandas is cheap; an unasked question is expensive.",
  },
  {
    title: "The data stack I actually use",
    body: "R for statistics and reporting. Python with NumPy and pandas for wrangling. Plots that argue. When a linear model is enough, it stays a linear model.",
  },
  {
    title: "When it becomes ML",
    body: "Neural nets and TensorFlow enter when the representation is high-dimensional or the mapping is not something I can write as a GLM and still sleep. Evaluation beats architecture theatre.",
  },
  {
    title: "Reproducibility",
    body: "Scripts, not screenshots. A README that says how to rerun. If a finding cannot be regenerated, it is a rumour.",
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-teal">Research</p>
        <h1 className="mt-3 font-serif text-4xl">Data, models, and clinical questions</h1>
        <p className="mt-4 text-lg text-slate">
          This page is the research identity: not a list of course certificates,
          a stance on how analysis should earn its keep in medicine.
        </p>
      </header>

      <div className="space-y-8">
        {threads.map((thread) => (
          <article key={thread.title}>
            <h2 className="font-serif text-2xl">{thread.title}</h2>
            <p className="mt-3 leading-relaxed text-slate">{thread.body}</p>
          </article>
        ))}
      </div>

      <aside className="rounded-2xl bg-mist/70 p-6 text-sm text-slate">
        Replace this with papers, posters, GitHub analyses, and Kaggle-or-not
        notebooks as they exist. Link them from{" "}
        <Link href="/blog" className="text-teal">
          the blog
        </Link>{" "}
        when a write-up helps more than a PDF.
      </aside>
    </div>
  );
}
