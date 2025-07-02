import React, { useState } from "react";
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
import { IconButton } from "./components/IconButton";
import settingIcon from "./assets/icons/setting.svg";
import filterIcon from "./assets/icons/filter.svg";
import arrowDownIcon from "./assets/icons/arrow-down.svg";

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabNames = ["탐지", "사고", "원격 세션", "감사"];
  const statBoxLabels = [
    "위젯 제목",
    "위젯 제목이 길어질 경우 이렇게 표현해야하는가?",
    "짧은 제목",
    "이것은 매우 매우 긴 위젯 제목 예시입니다. 실제로는 더 길 수도 있습니다.",
    "중간 길이의 제목",
  ];

  function getLabel(idx: number) {
    return statBoxLabels[idx % statBoxLabels.length];
  }

  return (
    <div className="dashboard-root">
      <div>
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #333",
            alignItems: "center",
          }}
        >
          {tabNames.map((name, idx) => (
            <button
              key={name}
              onClick={() => setActiveTab(idx)}
              style={{
                background: "none",
                border: "none",
                color:
                  activeTab === idx
                    ? "var(--color-base-100)"
                    : "var(--color-base-content)",
                padding: "16px",
                cursor: "pointer",
                borderBottom:
                  activeTab === idx
                    ? "3px solid var(--color-primary-100)"
                    : "3px solid transparent",
                fontWeight: activeTab === idx ? "bold" : "normal",
                fontSize: 14,
                outline: "none",
              }}
            >
              {name}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <div className="dashboard-setting-filter-container">
            <IconButton
              icon={<img src={settingIcon} alt="setting" />}
              rightIcon={<img src={arrowDownIcon} alt="arrow-down" />}
            >
              설정
            </IconButton>
            <IconButton
              icon={<img src={filterIcon} alt="filter" />}
              rightIcon={<img src={arrowDownIcon} alt="arrow-down" />}
            >
              필터
            </IconButton>
          </div>
        </div>
      </div>
      {activeTab === 0 ? (
        <div className="dashboard-container">
          <div className="dashboard-unified-grid">
            {statData.map((stat, idx) => (
              <StatBox key={idx} {...stat} label={getLabel(idx)} />
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
      ) : (
        <div
          style={{
            color: "#888",
            textAlign: "center",
            padding: "48px 0",
            fontSize: 24,
          }}
        >
          No data
        </div>
      )}
    </div>
  );
};
