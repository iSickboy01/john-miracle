import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Comments } from "@/components/Comments";
import { Mdx } from "@/components/Mdx";
import { getContent, getSlugs } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent("blog", slug);
  return { title: item?.title ?? "Blog" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getContent("blog", slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-prose">
      <p className="text-xs uppercase tracking-[0.2em] text-teal">Blog</p>
      <h1 className="mt-3 font-serif text-4xl">{item.title}</h1>
      <p className="mt-3 text-sm text-slate">{item.date}</p>
      <div className="mt-10">
        <Mdx source={item.body} />
      </div>
      <Comments />
    </div>
  );
}
