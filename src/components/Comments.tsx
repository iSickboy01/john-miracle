"use client";

import { useEffect, useRef } from "react";

export function Comments() {
  const ref = useRef<HTMLDivElement>(null);
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "Announcements";
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  useEffect(() => {
    if (!ref.current || !repo || !repoId || !categoryId) return;
    if (ref.current.querySelector("iframe")) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    ref.current.appendChild(script);
  }, [repo, repoId, category, categoryId]);

  if (!repo || !repoId || !categoryId) {
    return (
      <p className="mt-12 rounded-xl border border-dashed border-ink/20 bg-mist/60 p-5 text-sm text-slate">
        Comments go here once Giscus is connected. Create a public GitHub repo
        with Discussions enabled, then set{" "}
        <code className="text-ink">NEXT_PUBLIC_GISCUS_REPO</code>,{" "}
        <code className="text-ink">NEXT_PUBLIC_GISCUS_REPO_ID</code>, and{" "}
        <code className="text-ink">NEXT_PUBLIC_GISCUS_CATEGORY_ID</code> in{" "}
        <code className="text-ink">.env.local</code>.
      </p>
    );
  }

  return <div ref={ref} className="mt-12" />;
}
