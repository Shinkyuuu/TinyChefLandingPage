import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Nunito } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});
const body = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const title = `${site.name}: a social recipe app for cooks you follow`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Applies a saved theme before first paint so the page never flashes the wrong palette.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-primary px-3 py-2 text-base font-semibold text-primary-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
