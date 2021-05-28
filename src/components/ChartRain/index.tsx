import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type SeriesType = {
  chuva: number;
  data_hora: string | number;
};

type ChartProps = {
  series: SeriesType[];
};

export const ChartRain = ({ series }: ChartProps) => {
  const rainOptions: Highcharts.Options = {
    title: {
      text: "Quantidade de chuva",
    },
    colors: ["#122A4E"],
    xAxis: {
      type: "category",
      labels: {},
    },
    yAxis: {
      reversed: true,
      title: {
        text: "Chuva (ml)",
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
    },
    tooltip: {
      pointFormat: "Quantidade de chuva: <b>{point.y:.1f} ml</b>",
    },
    series: [
      {
        type: "column",
        name: "Chuva",
        data: series.map((item) => [item.data_hora, item.chuva]),
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
