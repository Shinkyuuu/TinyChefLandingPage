import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { getLegal } from "@/lib/legal";

const components = {
  h2: (p: React.ComponentProps<"h2">) => <h2 className="mt-12 text-3xl text-fg" {...p} />,
  h3: (p: React.ComponentProps<"h3">) => <h3 className="mt-8 text-2xl text-fg" {...p} />,
  p: (p: React.ComponentProps<"p">) => <p className="mt-4 text-base text-fg" {...p} />,
  ul: (p: React.ComponentProps<"ul">) => <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-fg" {...p} />,
  ol: (p: React.ComponentProps<"ol">) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-base text-fg" {...p} />,
  a: ({ href = "", ...p }: React.ComponentProps<"a">) =>
    href.startsWith("/") ? (
      <Link href={href} className="text-accent underline underline-offset-4 hover:text-fg" {...p} />
    ) : (
      <a href={href} className="text-accent underline underline-offset-4 hover:text-fg" {...p} />
    ),
};

export function LegalPage({ slug }: { slug: string }) {
  const doc = getLegal(slug);
  return (
    <article className="mx-auto max-w-170 px-4 pb-24 pt-32">
      <Link href="/" className="inline-flex items-center gap-2 text-base text-muted hover:text-fg">
        <ArrowLeftIcon size={20} aria-hidden="true" />
        Back to home
      </Link>
      <h1 className="mt-8 text-5xl text-fg">{doc.title}</h1>
      {doc.updated && <p className="mt-4 text-sm text-muted">Last updated: {doc.updated}</p>}
      {doc.status === "draft" && (
        <p role="note" className="mt-6 rounded-2xl border border-border bg-primary-light p-4 text-sm text-fg">
          This page is a draft and is waiting for legal review. Items in square brackets still need to be completed.
        </p>
      )}
      <Markdown components={components}>{doc.body}</Markdown>
    </article>
  );
}

export function legalMetadata(slug: string) {
  const { title, description } = getLegal(slug);
  return { title, description };
}
