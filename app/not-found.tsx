import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <div className="prose">
        <h1>Page not found</h1>
        <p><Link href="/">Back to home</Link></p>
      </div>
    </div>
  );
}
