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
      text: "Chuva acomulada por dia",
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
      enabled: false,
    },
    tooltip: {
      pointFormat: "Quantidade de chuva por dia: <b>{point.y:.1f} ml</b>",
    },
    series: [
      {
        type: "column",
        name: "Chuva",
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
