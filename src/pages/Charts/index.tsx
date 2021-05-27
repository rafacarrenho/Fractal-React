import { useEffect, useState } from "react";
import { ChartGroupedRain } from "../../components/ChartGroupedRain";
import { ChartLevel } from "../../components/ChartLevel";
import { ChartRain } from "../../components/ChartRain";
import { api } from "../../services/api";

type SeriesType = {
  nivel: string;
  chuva: number;
  date: string;
  data_hora: string;
};

export const Charts = () => {
  const [series, setSeries] = useState([] as SeriesType[]);

  const rainSerie = (series: SeriesType[]) => {
    return series
      .filter((item) => item.chuva)
      .map((item) => {
        const date = item.data_hora;
        return { date, chuva: item.chuva };
      });
  };

  const groupedRainSerie = (series: SeriesType[]) => {
    const newSeries = series.map((serie) => ({
      ...serie,
      date: serie?.data_hora?.slice(0, 10),
    }));

    const result = Array.from(
      newSeries.reduce(
        (m, { date, chuva }) => m.set(date, (m.get(date) || 0) + chuva),
        new Map()
      ),
      ([date, chuva]) => ({ date, chuva })
    );
    return result;
  };

  const levelSerie = (series: SeriesType[]) => {
    return series
      .filter((item) => item.nivel)
      .map((item) => {
        const data_hora = item.data_hora;
        return { data_hora, nivel: item.nivel };
      });
  };

  useEffect(() => {
    api.get("series.json").then((res) => {
      setSeries(res.data);
    });
  }, []);

  if (!series.length) return null;
  return (
    <div style={{ width: "100%" }}>
      <ChartRain series={rainSerie(series)} />
      <ChartGroupedRain series={groupedRainSerie(series)} />
      <ChartLevel series={levelSerie(series)} />
    </div>
  );
};
