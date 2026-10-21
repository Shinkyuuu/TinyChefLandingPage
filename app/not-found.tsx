import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-dvh max-w-170 flex-col items-start justify-center px-4 py-32">
      <p className="text-sm font-semibold text-accent">Error 404</p>
      <h1 className="mt-4 text-5xl text-fg">That page is not on the menu</h1>
      <p className="mt-6 text-lg text-muted">
        The link may be out of date, or the page may have moved. Head back home to find what you were after.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-xl bg-primary px-3 py-2 text-base font-semibold text-primary-ink transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:translate-y-px active:scale-[0.98]"
      >
        Back to home
      </Link>
    </section>
  );
}
