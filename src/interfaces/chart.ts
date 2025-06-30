export interface PieDatum {
  name: string;
  y: number;
  color: string;
}
export interface BarDatum {
  type: "bar" | "column";
  name: string;
  data: number[];
  color: string;
}

export interface ChartSectionProps {
  pieData: PieDatum[];
  barData1: BarDatum[];
  barCategories1: string[];
  barData2: BarDatum[];
  barCategories2: string[];
}
