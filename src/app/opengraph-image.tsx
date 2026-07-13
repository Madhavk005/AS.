import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akshita Sharma - Visual Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          color: "#F5F5F7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 32,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C8A86B",
              marginBottom: "20px",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 600,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              fontFamily: "serif",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontStyle: "normal" }}>Akshita</span>
            <span style={{ fontStyle: "italic", color: "#C8A86B" }}>Sharma.</span>
          </div>
        </div>
        
        <div
          style={{
            fontSize: 40,
            color: "rgba(245, 245, 247, 0.6)",
            maxWidth: "800px",
          }}
        >
          Visual Designer crafting cohesive brand identities, editorial visuals, and seamless digital experiences.
        </div>
      </div>
    ),
    { ...size }
  );
}
