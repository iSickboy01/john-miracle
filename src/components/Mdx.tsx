import { MDXRemote } from "next-mdx-remote/rsc";

export async function Mdx({ source }: { source: string }) {
  return (
    <article className="prose-site">
      <MDXRemote source={source} />
    </article>
  );
}
