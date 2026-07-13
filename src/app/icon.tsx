import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F5F5F7",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "serif",
          borderRadius: "4px",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
