import { ImageResponse } from "next/og";

export const alt = "Artur Bytyqi — Applikationsentwicklung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#11110f",
          color: "#f3f0e8",
          padding: "70px 76px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "62px",
                height: "62px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #6f7cff",
                borderRadius: "50%",
                color: "#6f7cff",
                fontWeight: 700,
                fontSize: "23px",
              }}
            >
              AB
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "26px", fontWeight: 700 }}>Artur Bytyqi</span>
              <span style={{ fontSize: "18px", color: "#aaa79f" }}>Baden, Schweiz</span>
            </div>
          </div>
          <span style={{ fontSize: "17px", letterSpacing: "2px", color: "#aaa79f" }}>
            PORTFOLIO / 2026
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ color: "#6f7cff", fontSize: "24px", fontWeight: 700 }}>
            APPLIKATIONSENTWICKLUNG
          </span>
          <span style={{ fontSize: "72px", lineHeight: 1.04, letterSpacing: "-3px", maxWidth: "980px" }}>
            Ich bin Artur. Das sind meine Projekte.
          </span>
        </div>
        <div style={{ height: "2px", width: "100%", background: "#2b2b28" }} />
      </div>
    ),
    size,
  );
}
