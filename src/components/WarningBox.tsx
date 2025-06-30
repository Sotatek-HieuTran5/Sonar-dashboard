import React from "react";

export const WarningBox: React.FC = () => (
  <div
    style={{
      width: "100%",
      background: "var(--color-warning-bg)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px",
      minHeight: 40,
      marginBottom: 24,
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        fontWeight: 700,
        color: "var(--color-warning-text)",
        fontSize: 16,
      }}
    >
      warning 위젯 제목이 길어진 경우 이렇게 표현해야하는가?
    </div>
    <div
      style={{
        fontWeight: 700,
        color: "var(--color-warning-text)",
        fontSize: 16,
        cursor: "pointer",
      }}
    >
      <span className="material-icons-outlined !text-sm cursor-pointer">
        close
      </span>
    </div>
  </div>
);
