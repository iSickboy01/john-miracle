import type { Metadata } from "next";
import { skillGroups } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-teal">About</p>
        <h1 className="mt-3 font-serif text-4xl">A medical student who ships.</h1>
      </header>

      <div className="space-y-5 text-lg leading-relaxed text-slate">
        <p>
          I am training in medicine and spending as much time with data and
          software as with textbooks. The interesting problems sit between those
          worlds: a clinical question that needs a dataset, a dataset that needs
          a model, a model that needs a product someone will actually use.
        </p>
        <p>
          On the analysis side that means R and the Python stack — NumPy,
          pandas — and, when the question warrants it, neural networks in
          TensorFlow. On the building side it means Go and JavaScript. On the
          operations side it means ClickUp, GoHighLevel, Make, Zapier, and
          websites that convert because the system behind them is clear.
        </p>
        <p>
          The poems are not a branding exercise. They are the other half of
          attention: what does not fit in a methods section.
        </p>
      </div>

      <section>
        <h2 className="font-serif text-2xl">How to read this site</h2>
        <ul className="mt-4 space-y-3 text-slate">
          <li>
            <strong className="text-ink">Work</strong> — case studies from
            marketing, automation, and ops. Proof of shipped systems.
          </li>
          <li>
            <strong className="text-ink">Research</strong> — data science and
            machine learning, in the language of questions rather than badges.
          </li>
          <li>
            <strong className="text-ink">Blog</strong> — notes you can comment
            on. Thinking in public.
          </li>
          <li>
            <strong className="text-ink">Poems</strong> — a quieter room.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-2xl">Tools, grouped by job</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-ink/10 p-5">
              <h3 className="text-sm font-medium uppercase tracking-wider text-teal">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-sm text-slate">
        Edit this page and <code className="text-ink">src/lib/site.ts</code> with
        your name, links, and the real story. Sample case studies live in{" "}
        <code className="text-ink">content/</code>.
      </p>
    </div>
  );
}
