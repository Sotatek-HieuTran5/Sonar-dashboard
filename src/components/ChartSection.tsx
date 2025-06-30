import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type {
  PieDatum,
  BarDatum,
  ChartSectionProps,
} from "../interfaces/chart";

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
      align: "left",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: { color: c.text, fontSize: 15 },
      itemHoverStyle: { color: c.text },
      itemHiddenStyle: { color: c.legendInactive },
      symbolRadius: 8,
      symbolHeight: 16,
      symbolWidth: 16,
      margin: 8,
      padding: 0,
      itemDistance: 24,
      maxHeight: 100,
      width: 400,
      itemWidth: 120,
      floating: false,
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
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      align: "right",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: { color: c.text, fontSize: 15 },
      itemHoverStyle: { color: c.text },
      itemHiddenStyle: { color: c.legendInactive },
      symbolRadius: 8,
      symbolHeight: 16,
      symbolWidth: 16,
      margin: 8,
      padding: 0,
      itemDistance: 24,
      maxHeight: 100,
      width: 500,
      itemWidth: 120,
      floating: false,
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
      align: "right",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: { color: c.text, fontSize: 15 },
      itemHoverStyle: { color: c.text },
      itemHiddenStyle: { color: c.legendInactive },
      symbolRadius: 8,
      symbolHeight: 16,
      symbolWidth: 16,
      margin: 8,
      padding: 0,
      itemDistance: 24,
      maxHeight: 100,
      width: 400,
      itemWidth: 120,
      floating: false,
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
      className="card"
      style={{
        background: "var(--color-card-bg)",
        borderRadius: 8,
        padding: 16,
        minHeight: 320,
        flex: "1 1 300px",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        gridColumn: pieCol,
      }}
      key="pie"
    >
      <div
        className="chart-title"
        style={{
          width: "100%",
          fontWeight: 600,
          color: "var(--color-table-row-text)",
          fontSize: 16,
          textAlign: "left",
          marginBottom: 8,
        }}
      >
        위젯 제목
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PieChartWithCustomLegend data={pieData} />
      </div>
    </div>,
    <div
      className="card"
      style={{
        background: "var(--color-card-bg)",
        borderRadius: 8,
        padding: 16,
        minHeight: 320,
        flex: "1 1 300px",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        gridColumn: barCol,
      }}
      key="bar1"
    >
      <div
        className="chart-title"
        style={{
          width: "100%",
          fontWeight: 600,
          color: "var(--color-table-row-text)",
          fontSize: 16,
          textAlign: "left",
          marginBottom: 8,
        }}
      >
        위젯 제목
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BarChart1 data={barData1} categories={barCategories1} />
      </div>
    </div>,
    <div
      className="card"
      style={{
        background: "var(--color-card-bg)",
        borderRadius: 8,
        padding: 16,
        minHeight: 320,
        flex: "1 1 300px",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        gridColumn: barCol,
      }}
      key="bar2"
    >
      <div
        className="chart-title"
        style={{
          width: "100%",
          fontWeight: 600,
          color: "var(--color-table-row-text)",
          fontSize: 16,
          textAlign: "left",
          marginBottom: 8,
        }}
      >
        위젯 제목
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BarChart2 data={barData2} categories={barCategories2} />
      </div>
    </div>,
  ];
};
