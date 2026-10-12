import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg space-y-4">
      <h1 className="font-serif text-4xl">Missing, like a lost chart.</h1>
      <p className="text-slate">That page is not here.</p>
      <Link href="/" className="text-teal">
        Back home
      </Link>
    </div>
  );
}
