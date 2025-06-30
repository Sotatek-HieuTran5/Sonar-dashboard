import type { PieDatum, BarDatum } from "./interfaces/chart";

export const pieData: PieDatum[] = [
  { name: "차트 이름", y: 30, color: "#FF7043" },
  { name: "차트 이름", y: 20, color: "#FFD54F" },
  { name: "차트 이름", y: 15, color: "#EF5350" },
  { name: "차트 이름", y: 10, color: "#42A5F5" },
  { name: "차트 이름", y: 10, color: "#26A69A" },
  { name: "차트 이름", y: 15, color: "#7E57C2" },
];

export const barCategories1: string[] = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
];
export const barData1: BarDatum[] = [
  {
    type: "bar",
    name: "차트 이름",
    data: [2, 3, 5, 8, 13, 16, 6, 2],
    color: "#FFAB91",
  },
  {
    type: "bar",
    name: "차트 이름",
    data: [1, 2, 3, 4, 5, 6, 7, 8],
    color: "#FFD54F",
  },
  {
    type: "bar",
    name: "차트 이름",
    data: [2, 1, 2, 3, 1, 2, 3, 1],
    color: "#FF8A65",
  },
  {
    type: "bar",
    name: "차트 이름",
    data: [3, 2, 1, 2, 3, 1, 2, 3],
    color: "#FFD54F",
  },
  {
    type: "bar",
    name: "차트 이름",
    data: [1, 3, 2, 1, 2, 3, 1, 2],
    color: "#FFAB91",
  },
  {
    type: "bar",
    name: "차트 이름",
    data: [2, 2, 2, 2, 2, 2, 2, 2],
    color: "#42A5F5",
  },
  {
    type: "bar",
    name: "차트 이름",
    data: [0, 1, 2, 3, 4, 5, 6, 7],
    color: "#26A69A",
  },
  {
    type: "bar",
    name: "차트 이름",
    data: [1, 0, 1, 0, 1, 0, 1, 0],
    color: "#7E57C2",
  },
];

export const barCategories2: string[] = [
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
];
export const barData2: BarDatum[] = [
  {
    type: "column",
    name: "차트 이름",
    data: [10, 0, 0, 0, 0, 0, 0, 0, 6, 15],
    color: "#FFD54F",
  },
  {
    type: "column",
    name: "차트 이름",
    data: [7, 0, 0, 0, 0, 0, 0, 0, 4, 5],
    color: "#EF5350",
  },
  {
    type: "column",
    name: "차트 이름",
    data: [0, 1, 3, 2, 0, 0, 0, 0, 0, 0],
    color: "#42A5F5",
  },
  {
    type: "column",
    name: "차트 이름",
    data: [0, 0, 2, 1, 0, 0, 0, 0, 0, 0],
    color: "#26A69A",
  },
  {
    type: "column",
    name: "차트 이름",
    data: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    color: "#7E57C2",
  },
  {
    type: "column",
    name: "차트 이름",
    data: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    color: "#FF7043",
  },
];

export const statData = [
  { title: "탐지 이벤트", value: "32건" },
  { title: "탐지 호스트", value: "2대" },
  { title: "실행", value: "1대" },
  { title: "권한 상승", value: "1대" },
  { title: "방어 우회", value: "1대" },
  { title: "크리덴셜 접근", value: "1대" },
  { title: "탐색", value: "1대" },
  { title: "명령 제어", value: "1대" },
];
