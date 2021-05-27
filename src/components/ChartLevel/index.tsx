import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type SeriesType = {
  nivel?: string;
  chuva?: number;
  date?: string;
  data_hora?: string;
};

type ChartProps = {
  series: SeriesType[];
};

export const ChartLevel = ({ series }: ChartProps) => {
  const rainOptions: Highcharts.Options = {
    title: {
      text: "Nivel do rio",
    },
    colors: ["#122A4E"],
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
      enabled: false,
    },
    tooltip: {
      pointFormat: "Nivel do rio: <b>{point.y:.1f} </b>",
    },
    series: [
      {
        type: "line",
        name: "Nivel",
        data: series.map((item) => [item.data_hora, Number(item.nivel)]),
      },
      // {
      //   type: "line",
      //   name: "outra coisa",
      //   data: series.map((item, index) => [
      //     item.data_hora,
      //     Number(item.nivel) + index / 2,
      //   ]),
      // },
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
