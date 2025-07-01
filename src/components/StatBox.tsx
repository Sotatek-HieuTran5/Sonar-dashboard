import React, { useState, useRef } from "react";
import "./StatBox.css";

interface StatBoxProps {
  title: string;
  value: string;
}

export const StatBox: React.FC<StatBoxProps> = ({ title, value }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="card stat-box-card">
      <div className="stat-box-menu-container" ref={menuRef}>
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
      <div className="stat-box-title" title={title}>
        {title}
      </div>
      <div className="stat-box-value">{value}</div>
    </div>
  );
};
