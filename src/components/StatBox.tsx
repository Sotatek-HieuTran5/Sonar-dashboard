import React from "react";

interface StatBoxProps {
  title: string;
  value: string;
}

export const StatBox: React.FC<StatBoxProps> = ({ title, value }) => (
  <div
    className="card"
    style={{
      background: "var(--color-card-bg)",
      color: "var(--color-table-row-text)",
      minWidth: 160,
      width: "100%",
      height: 80,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        fontSize: 15,
        fontWeight: 400,
        marginBottom: 4,
        width: "100%",
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: 1.2,
      }}
      title={title}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
        lineHeight: 1.2,
      }}
    >
      {value}
    </div>
  </div>
);
