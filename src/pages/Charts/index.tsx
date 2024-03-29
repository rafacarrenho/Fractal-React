import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { ChartGroupedRain } from "../../components/ChartGroupedRain";
import { ChartLevel } from "../../components/ChartLevel";
import { ChartRain } from "../../components/ChartRain";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { SeriesType } from "./types";

export const Charts = () => {
  const [series, setSeries] = useState<SeriesType[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const rainSerie = (series: SeriesType[]) => {
    return series
      .filter((item) => item.chuva)
      .map((item) => {
        const data_hora = item.data_hora;
        return { data_hora, chuva: item.chuva };
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
    api
      .get("chart")
      .then((res) => {
        setSeries(res.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ChartRain series={rainSerie(series)} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartGroupedRain series={groupedRainSerie(series)} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartLevel series={levelSerie(series)} />
      </Grid>
    </div>
  );
};
