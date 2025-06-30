import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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

const pieData = [
  { name: "차트 이름", y: 30, color: "#FF7043" },
  { name: "차트 이름", y: 20, color: "#FFD54F" },
  { name: "차트 이름", y: 15, color: "#EF5350" },
  { name: "차트 이름", y: 10, color: "#42A5F5" },
  { name: "차트 이름", y: 10, color: "#26A69A" },
  { name: "차트 이름", y: 15, color: "#7E57C2" },
];

const pieOptions = () => {
  const c = getChartColors();
  return {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      style: commonChartStyle(),
    },
    title: {
      text: "",
    },
    credits: { enabled: false },
    legend: {
      enabled: true,
      align: "center",
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
      maxHeight: 48,
      itemWidth: 120,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          style: { color: c.text, textOutline: "none" },
        },
      },
    },
    series: [
      {
        type: "pie",
        data: pieData,
        showInLegend: true,
      },
    ],
  };
};

const barOptions1 = () => {
  const c = getChartColors();
  const barColors = [
    "#FFAB91",
    "#FFD54F",
    "#FF8A65",
    "#FFD54F",
    "#FFAB91",
    "#42A5F5",
    "#26A69A",
    "#7E57C2",
  ];
  return {
    chart: {
      type: "bar",
      backgroundColor: "transparent",
      style: commonChartStyle(),
    },
    title: {
      text: "",
    },
    legend: {
      enabled: true,
      align: "center",
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
      maxHeight: 48,
    },
    xAxis: {
      categories: [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
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
    series: [
      {
        type: "bar",
        name: "차트 이름",
        data: [2, 3, 5, 8, 13, 16, 6, 2],
        color: barColors[0],
      },
      {
        type: "bar",
        name: "차트 이름",
        data: [1, 2, 3, 4, 5, 6, 7, 8],
        color: barColors[1],
      },
      {
        type: "bar",
        name: "차트 이름",
        data: [2, 1, 2, 3, 1, 2, 3, 1],
        color: barColors[2],
      },
      {
        type: "bar",
        name: "차트 이름",
        data: [3, 2, 1, 2, 3, 1, 2, 3],
        color: barColors[3],
      },
      {
        type: "bar",
        name: "차트 이름",
        data: [1, 3, 2, 1, 2, 3, 1, 2],
        color: barColors[4],
      },
      {
        type: "bar",
        name: "차트 이름",
        data: [2, 2, 2, 2, 2, 2, 2, 2],
        color: barColors[5],
      },
      {
        type: "bar",
        name: "차트 이름",
        data: [0, 1, 2, 3, 4, 5, 6, 7],
        color: barColors[6],
      },
      {
        type: "bar",
        name: "차트 이름",
        data: [1, 0, 1, 0, 1, 0, 1, 0],
        color: barColors[7],
      },
    ],
    credits: { enabled: false },
    tooltip: {
      style: { color: c.text, fontSize: 14 },
      backgroundColor: c.bg,
      borderColor: c.text,
    },
  };
};

const barOptions2 = () => {
  const c = getChartColors();
  const colColors = [
    "#FF7043", // orange
    "#FFD54F", // yellow
    "#EF5350", // red
    "#42A5F5", // blue
    "#26A69A", // green
    "#7E57C2", // purple
  ];
  return {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      style: commonChartStyle(),
    },
    title: {
      text: "",
    },
    legend: {
      enabled: true,
      align: "center",
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
      maxHeight: 48,
      itemWidth: 120,
    },
    xAxis: {
      categories: [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2022",
        "2023",
      ],
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
    series: [
      {
        type: "column",
        name: "차트 이름",
        data: [10, 0, 0, 0, 0, 0, 0, 0, 6, 15],
        color: colColors[1],
      },
      {
        type: "column",
        name: "차트 이름",
        data: [7, 0, 0, 0, 0, 0, 0, 0, 4, 5],
        color: colColors[2],
      },
      {
        type: "column",
        name: "차트 이름",
        data: [0, 1, 3, 2, 0, 0, 0, 0, 0, 0],
        color: colColors[3],
      },
      {
        type: "column",
        name: "차트 이름",
        data: [0, 0, 2, 1, 0, 0, 0, 0, 0, 0],
        color: colColors[4],
      },
      {
        type: "column",
        name: "차트 이름",
        data: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        color: colColors[5],
      },
      {
        type: "column",
        name: "차트 이름",
        data: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        color: colColors[0],
      },
    ],
    credits: { enabled: false },
    tooltip: {
      style: { color: c.text, fontSize: 14 },
      backgroundColor: c.bg,
      borderColor: c.text,
    },
  };
};

function PieChartWithCustomLegend() {
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
        <HighchartsReact highcharts={Highcharts} options={pieOptions()} />
      </div>
    </div>
  );
}

export const ChartSection: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        width: "100%",
        maxWidth: "100%",
        flexWrap: "wrap",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="card"
        style={{
          background: "var(--color-card-bg)",
          borderRadius: 8,
          padding: 16,
          minHeight: 320,
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          maxWidth: "33.3333%",
        }}
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
          <PieChartWithCustomLegend />
        </div>
      </div>
      <div
        className="card"
        style={{
          background: "var(--color-card-bg)",
          borderRadius: 8,
          padding: 16,
          minHeight: 320,
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          maxWidth: "33.3333%",
        }}
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
          <HighchartsReact highcharts={Highcharts} options={barOptions1()} />
        </div>
      </div>
      <div
        className="card"
        style={{
          background: "var(--color-card-bg)",
          borderRadius: 8,
          padding: 16,
          minHeight: 320,
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          maxWidth: "33.3333%",
        }}
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
          <HighchartsReact highcharts={Highcharts} options={barOptions2()} />
        </div>
      </div>
    </div>
  );
};
