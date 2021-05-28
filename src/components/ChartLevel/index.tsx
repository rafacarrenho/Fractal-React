import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { levelByRange } from "./util";

type SeriesType = {
  nivel: string | number;
  data_hora: string;
};

type ChartProps = {
  series: SeriesType[];
};

export const ChartLevel = ({ series }: ChartProps) => {
  let levelSixHoursRange: SeriesType[] = levelByRange(series);

  const rainOptions: Highcharts.Options = {
    title: {
      text: "Nivel do rio",
    },
    colors: ["#122A4E", "red"],
    xAxis: {
      type: "category",
      labels: {},
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
        type: "line",
        name: "Nivel do rio - Por hora",
        data: series.map((item) => [item.data_hora, Number(item.nivel)]),
      },
      {
        type: "line",
        name: "Nivel do rio - Média a cada 6 horas",
        data: levelSixHoursRange.map((item) => [
          item.data_hora,
          Number(item.nivel),
        ]),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={rainOptions}
        containerProps={{ className: "chartContainer" }}
      />
    </div>
  );
};
function item(item: any, arg1: (SeriesType: any) => any): SeriesType[] {
  throw new Error("Function not implemented.");
}
