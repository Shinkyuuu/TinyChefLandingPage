import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: a social recipe app`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Placeholder share image. TODO: replace with branded artwork once the app icon is supplied.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        background: "#f6f1ea",
        color: "#3e2f25",
      }}
    >
      <div style={{ fontSize: 112, fontWeight: 700 }}>{site.name}</div>
      <div style={{ fontSize: 48, marginTop: 24, color: "#6f5a48" }}>{site.tagline}</div>
      <div style={{ width: 160, height: 12, marginTop: 48, background: "#ee8c7c", borderRadius: 6 }} />
    </div>,
    size,
  );
}
