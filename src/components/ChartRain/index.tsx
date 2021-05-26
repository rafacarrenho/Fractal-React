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

export const ChartRain = ({ series }: ChartProps) => {
  const rainOptions: Highcharts.Options = {
    title: {
      text: "Quantidade de chuva",
    },
    xAxis: {
      type: "category",
      labels: {
        // rotation: -45,
        // style: {
        //   fontSize: "13px",
        //   fontFamily: "Verdana, sans-serif",
        // },
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
        data: series.map((item) => [item.date, item.chuva]),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={rainOptions}
        // constructorType={"mapChart"}
        allowChartUpdate={true}
        immutable={false}
        updateArgs={[true, true, true]}
        containerProps={{ className: "chartContainer" }}
      />
    </div>
  );
};
