import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import { getContent, getSlugs } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return getSlugs("poems").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent("poems", slug);
  return { title: item?.title ?? "Poem" };
}

export default async function PoemPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getContent("poems", slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-xs uppercase tracking-[0.2em] text-teal">Poem</p>
      <h1 className="mt-3 font-serif text-4xl">{item.title}</h1>
      <p className="mt-3 text-sm text-slate">{item.date}</p>
      <div className="mt-10 font-serif text-lg leading-loose">
        <Mdx source={item.body} />
      </div>
    </div>
  );
}
