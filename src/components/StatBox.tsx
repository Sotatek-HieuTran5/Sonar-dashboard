import React, { useState, useRef } from "react";
import "./StatBox.css";

interface StatBoxProps {
  title: string;
  value: string;
  label: string;
}

export const StatBox: React.FC<StatBoxProps> = ({ title, value, label }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="card stat-box-card" style={{ position: "relative" }}>
      <div className="stat-box-label-container">
        <span
          style={{ position: "relative", cursor: "pointer" }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {label.length > 13 ? label.slice(0, 13) + "..." : label}
          {showTooltip && <div className="stat-box-tooltip">{label}</div>}
        </span>
      </div>
      <div
        className="stat-box-menu-container"
        ref={menuRef}
        style={{ position: "absolute", top: 8, right: 12 }}
      >
        <button
          className="btn btn-primary stat-box-menu-button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="More options"
        >
          <span className="stat-box-menu-icon">⋮</span>
        </button>
        {menuOpen && (
          <div className="stat-box-menu-dropdown">
            <div className="stat-box-menu-item">Option 1</div>
            <div className="stat-box-menu-item">Option 2</div>
            <div className="stat-box-menu-item">Option 3</div>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="stat-box-title"
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          {title}
        </div>
        <div className="stat-box-value">{value}</div>
      </div>
    </div>
  );
};
