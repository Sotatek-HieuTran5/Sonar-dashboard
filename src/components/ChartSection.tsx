import React, { useEffect, useState, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type {
  PieDatum,
  BarDatum,
  ChartSectionProps,
} from "../interfaces/chart";
import "./ChartSection.css";

function getVar(name: string, fallback: string) {
  if (typeof window !== "undefined") {
    return (
      getComputedStyle(document.documentElement).getPropertyValue(name) ||
      fallback
    );
  }
  return fallback;
}

const getChartColors = () => ({
  text: getVar("--color-table-row-text", "#fff"),
  bg: getVar("--color-card-bg", "#23262F"),
  legendInactive: getVar("--color-chart-legend-inactive", "#888"),
});

const commonChartStyle = () => {
  const c = getChartColors();
  return {
    color: c.text,
    fontFamily: "inherit",
  };
};

const PieChartWithCustomLegend: React.FC<{ data: PieDatum[] }> = ({ data }) => {
  const c = getChartColors();
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      style: commonChartStyle(),
    },
    title: { text: "" },
    credits: { enabled: false },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: { color: c.text, fontSize: 15 },
      itemHoverStyle: { color: c.text },
      itemHiddenStyle: { color: c.legendInactive },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          style: { color: c.text, textOutline: "none" },
        },
      },
    },
    series: [
      {
        type: "pie",
        data,
        showInLegend: true,
      },
    ],
  };
  return (
    <div className="pie-chart-container">
      <div className="pie-chart-content">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

const BarChart1: React.FC<{ data: BarDatum[]; categories: string[] }> = ({
  data,
  categories,
}) => {
  const c = getChartColors();
  const options = {
    chart: {
      type: "bar",
      backgroundColor: "transparent",
      style: commonChartStyle(),
    },
    title: { text: "" },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: { color: c.text, fontSize: 15 },
      itemHoverStyle: { color: c.text },
      itemHiddenStyle: { color: c.legendInactive },
    },
    xAxis: {
      categories,
      title: { text: undefined },
      labels: { style: { color: c.text, fontSize: 15 } },
      gridLineWidth: 0,
      lineColor: "#444",
      tickColor: "#444",
    },
    yAxis: {
      min: 0,
      title: { text: undefined },
      labels: { style: { color: c.text, fontSize: 15 } },
      gridLineWidth: 1,
      gridLineColor: "#444",
    },
    plotOptions: {
      bar: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
          style: { color: c.text, textOutline: "none" },
        },
        pointPadding: 0.1,
        groupPadding: 0.15,
        borderWidth: 0,
        pointWidth: 16,
      },
      series: {
        borderWidth: 0,
        groupPadding: 0.15,
        pointPadding: 0.1,
        stacking: "normal",
      },
    },
    series: data,
    credits: { enabled: false },
    tooltip: {
      style: { color: c.text, fontSize: 14 },
      backgroundColor: c.bg,
      borderColor: c.text,
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const BarChart2: React.FC<{ data: BarDatum[]; categories: string[] }> = ({
  data,
  categories,
}) => {
  const c = getChartColors();
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      style: commonChartStyle(),
    },
    title: { text: "" },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: { color: c.text, fontSize: 15 },
      itemHoverStyle: { color: c.text },
      itemHiddenStyle: { color: c.legendInactive },
    },
    xAxis: {
      categories,
      title: { text: undefined },
      labels: { style: { color: c.text, fontSize: 15 } },
      gridLineWidth: 0,
      lineColor: "#444",
      tickColor: "#444",
    },
    yAxis: {
      min: 0,
      title: { text: undefined },
      labels: { style: { color: c.text, fontSize: 15 } },
      gridLineWidth: 1,
      gridLineColor: "#444",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
          style: { color: c.text, textOutline: "none" },
        },
        pointPadding: 0.1,
        groupPadding: 0.15,
        borderWidth: 0,
        pointWidth: 24,
      },
      series: {
        borderWidth: 0,
        groupPadding: 0.15,
        pointPadding: 0.1,
        stacking: "normal",
      },
    },
    series: data,
    credits: { enabled: false },
    tooltip: {
      style: { color: c.text, fontSize: 14 },
      backgroundColor: c.bg,
      borderColor: c.text,
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

function getGridColumn(
  spanLarge: number,
  spanMedium: number,
  spanSmall: number
) {
  const width = window.innerWidth;
  if (width <= 900) return "1 / -1";
  if (width <= 1199) return `span ${spanSmall}`;
  if (width <= 1399) return `span ${spanMedium}`;
  return `span ${spanLarge}`;
}

function MoreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <div className="chart-menu-container" ref={ref}>
      <button
        className="btn btn-primary chart-menu-button"
        onClick={() => setOpen((v) => !v)}
        aria-label="More options"
      >
        <span className="chart-menu-icon">⋮</span>
      </button>
      {open && (
        <div className="chart-menu-dropdown">
          <div className="chart-menu-item">Option 1</div>
          <div className="chart-menu-item">Option 2</div>
          <div className="chart-menu-item">Option 3</div>
        </div>
      )}
    </div>
  );
}

export const ChartCards: React.FC<ChartSectionProps> = ({
  pieData,
  barData1,
  barCategories1,
  barData2,
  barCategories2,
}) => {
  const [pieCol, setPieCol] = useState(() => getGridColumn(2, 2, 2));
  const [barCol, setBarCol] = useState(() => getGridColumn(3, 2, 2));

  useEffect(() => {
    const handleResize = () => {
      setPieCol(getGridColumn(2, 2, 2));
      setBarCol(getGridColumn(3, 2, 2));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [
    <div
      className="card chart-card chart-card-pie"
      style={{ gridColumn: pieCol }}
      key="pie"
    >
      <MoreMenu />
      <div className="chart-title">위젯 제목</div>
      <div className="chart-container">
        <PieChartWithCustomLegend data={pieData} />
      </div>
    </div>,
    <div
      className="card chart-card chart-card-bar"
      style={{ gridColumn: barCol }}
      key="bar1"
    >
      <MoreMenu />
      <div className="chart-title">위젯 제목</div>
      <div className="chart-container">
        <BarChart1 data={barData1} categories={barCategories1} />
      </div>
    </div>,
    <div
      className="card chart-card chart-card-bar"
      style={{ gridColumn: barCol }}
      key="bar2"
    >
      <MoreMenu />
      <div className="chart-title">위젯 제목</div>
      <div className="chart-container">
        <BarChart2 data={barData2} categories={barCategories2} />
      </div>
    </div>,
  ];
};
