import React from "react";
import { WarningBox } from "./components/WarningBox";
import { StatBox } from "./components/StatBox";
import { ChartCards } from "./components/ChartSection";
import { DataGrid } from "./components/DataGrid";
import {
  pieData,
  barData1,
  barCategories1,
  barData2,
  barCategories2,
  statData,
} from "./mockChartData";

export const Dashboard: React.FC = () => (
  <div className="dashboard-root">
    <div className="dashboard-container">
      <WarningBox />
      <div className="dashboard-unified-grid">
        {statData.map((stat, idx) => (
          <StatBox key={idx} {...stat} />
        ))}
        <ChartCards
          pieData={pieData}
          barData1={barData1}
          barCategories1={barCategories1}
          barData2={barData2}
          barCategories2={barCategories2}
        />
      </div>
      <div className="table-section">
        <DataGrid />
      </div>
    </div>
  </div>
);
