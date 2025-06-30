import React from "react";
import { WarningBox } from "./components/WarningBox";
import { StatBox } from "./components/StatBox";
import { ChartSection } from "./components/ChartSection";
import { DataGrid } from "./components/DataGrid";

const statData = [
  { title: "탐지 이벤트", value: "32건" },
  { title: "탐지 호스트", value: "2대" },
  { title: "실행", value: "1대" },
  { title: "권한 상승", value: "1대" },
  { title: "방어 우회", value: "1대" },
  { title: "크리덴셜 접근", value: "1대" },
  { title: "탐색", value: "1대" },
  { title: "명령 제어", value: "1대" },
];

export const Dashboard: React.FC = () => (
  <div className="dashboard-root">
    <div className="dashboard-container">
      <WarningBox />
      <div className="stat-grid">
        {statData.map((stat, idx) => (
          <StatBox key={idx} {...stat} />
        ))}
      </div>
      <div className="chart-grid">
        <ChartSection />
      </div>
      <div className="table-section">
        <DataGrid />
      </div>
    </div>
  </div>
);
