import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type SeriesType = {
  chuva: number;
  date: string;
};

type ChartProps = {
  series: SeriesType[];
};

export const ChartGroupedRain = ({ series }: ChartProps) => {
  const rainGroupedOptions: Highcharts.Options = {
    title: {
      text: "Chuva acumulada por dia",
    },
    colors: ["#122A4E"],
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Chuva (ml)",
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
    },
    series: [
      {
        type: "column",
        name: "Chuva acumulada por dia",
        data: series
          .filter((item) => item.chuva)
          .map((item) => [item.date, item.chuva]),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={rainGroupedOptions} />
    </div>
  );
};
