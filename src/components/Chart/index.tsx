import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type SeriesType = {
  nivel: string;
  chuva: number;
  date: string;
  data_hora: string;
};

type ChartProps = {
  series: SeriesType[];
};

export const Chart = ({ series }: ChartProps) => {
  const groupByDate = (data: SeriesType[]) => {
    const res = Array.from(
      data.reduce(
        (m, { date, chuva }) => m.set(date, (m.get(date) || 0) + chuva),
        new Map()
      ),
      ([date, chuva]) => ({ date, chuva })
    );
    return res;
  };

  const rainByDate = groupByDate(series);

  const rainOptions: Highcharts.Options = {
    title: {
      text: "Quantidade de chuva",
    },
    xAxis: {
      type: "category",

      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      reversed: true,
      title: {
        text: "Chuva (ml)",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Quantidade de chuva: <b>{point.y:.1f} ml</b>",
    },
    series: [
      {
        type: "column",
        name: "Chuva",
        data: series
          .filter((item) => item.chuva)
          .map((item) => [item.data_hora, item.chuva]),
      },
    ],
  };

  const rainGroupedOptions: Highcharts.Options = {
    title: {
      text: "Quantidade de chuva",
    },
    xAxis: {
      type: "category",

      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
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
        data: rainByDate.map((item) => [
          new Date(item.date).toLocaleDateString(),
          item.chuva,
        ]),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={rainOptions} />
    </div>
  );
};
