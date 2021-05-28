import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import Map from "../../components/Map";
import { api } from "../../services/api";

type MarkersType = {
  id_stt: string;
  lat_stt: number;
  lng_stt: number;
  codigo_stt: string;
  responsavel_stt: string;
  nome_stt: string;
  uf_stt: string;
};

type PolygonType = {
  lat: number;
  lng: number;
};

type LinesType = {
  lat: number;
  lng: number;
};

export const Maps = () => {
  const [polygon, setPolygon] = useState([] as PolygonType[]);
  const [markers, setMarkers] = useState([] as MarkersType[]);
  const [lines, setLines] = useState([] as LinesType[]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get markers
    api
      .get(`pontos.json`)
      .then((res) => {
        setMarkers(res.data);
      })
      .catch(() => {
        setError(true);
      });

    // Get polygon
    api
      .get("poligono.json")
      .then((res) => {
        setPolygon(res.data);
      })
      .catch(() => {
        setError(true);
      });

    // Get lines
    api
      .get("linhas.json")
      .then((res) => {
        setLines(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (polygon.length && markers.length & lines.length) {
      setIsLoading(false);
    }
  }, [polygon, markers, lines]);

  if (error) return <Error />;
  if (isLoading) return <Loading />;
  return <Map lines={lines} markers={markers} polygon={polygon} />;
};
