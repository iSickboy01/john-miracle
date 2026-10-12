import { MDXRemote } from "next-mdx-remote/rsc";

export function Mdx({ source }: { source: string }) {
  return (
    <article className="prose-site">
      <MDXRemote source={source} />
    </article>
  );
}
