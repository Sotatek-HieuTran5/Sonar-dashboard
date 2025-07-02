import React, { useState, useRef } from "react";
import "./DataGrid.css";
import { IconButton } from "./IconButton";
import moreOptionIcon from "../assets/icons/more-option.svg";
import previousEndIcon from "../assets/icons/previous-end.svg";
import previousIcon from "../assets/icons/previous.svg";
import nextIcon from "../assets/icons/next.svg";
import nextEndIcon from "../assets/icons/next-end.svg";

const PAGE_SIZE = 10;
const TOTAL_ROWS = 47;
const sampleRows = Array.from({ length: TOTAL_ROWS }).map((_, i) => ({
  id: i + 1,
  date: "2025-00-00 00:00:00",
  ip: "111.111.111.111",
  port: "88888",
  protocol: "UDP",
  ssl: "ssl",
  action: "PERMIT",
  src: "111.111.111.111",
  dst: "111.111.111.111",
  code: "99999",
}));

export const DataGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_ROWS / PAGE_SIZE);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const pageRows = sampleRows.slice(startIdx, startIdx + PAGE_SIZE);

  let pageNumbers: number[] = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      pageNumbers = [1, 2, 3, 4, 5];
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pageNumbers = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    }
  }

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
    <div className="card data-grid-card">
      <div className="data-grid-menu-container" ref={menuRef}>
        <IconButton
          className="data-grid-menu-button"
          icon={<img src={moreOptionIcon} alt="more-option" />}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="More options"
        />
        {menuOpen && (
          <div className="data-grid-menu-dropdown">
            <div className="data-grid-menu-item">옵션 1</div>
            <div className="data-grid-menu-item">옵션 2</div>
            <div className="data-grid-menu-item">옵션 3</div>
          </div>
        )}
      </div>
      <div className="data-grid-title">최근 탐지 내역</div>
      <div className="data-grid-table-container">
        <table className="table custom-table data-grid-table">
          <thead className="custom-table-header">
            <tr>
              <th className="table-cell-fit">#</th>
              <th>탐지일시</th>
              <th>출발지 IP</th>
              <th>출발지 Port</th>
              <th>프로토콜</th>
              <th>SSL</th>
              <th>조치</th>
              <th>목적지 IP</th>
              <th>목적지 Port</th>
              <th>코드</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row) => (
              <tr key={row.id} className="custom-table-row">
                <td className="table-cell-fit">{row.id}</td>
                <td>{row.date}</td>
                <td>{row.ip}</td>
                <td>{row.port}</td>
                <td>{row.protocol}</td>
                <td>{row.ssl}</td>
                <td>{row.action}</td>
                <td>{row.src}</td>
                <td>{row.dst}</td>
                <td>{row.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="data-grid-pagination-container">
        <div className="pagination custom-pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            <img src={previousEndIcon} alt="previous" />
          </button>
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={previousIcon} alt="previous" />
          </button>
          {pageNumbers.map((num) => (
            <button
              key={num}
              className={`pagination-btn${
                num === currentPage ? " active" : ""
              }`}
              onClick={() => handlePageChange(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={nextIcon} alt="next" />
          </button>
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <img src={nextEndIcon} alt="next" />
          </button>
          <button className="pagination-btn pagination-count" disabled>
            {TOTAL_ROWS} 건
          </button>
        </div>
      </div>
    </div>
  );
};
