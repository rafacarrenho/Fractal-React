import { useEffect, useState } from "react";
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

  useEffect(() => {
    api.get(`pontos.json`).then((res) => {
      setMarkers(res.data);
    });
    api.get("poligono.json").then((res) => {
      setPolygon(res.data);
    });
    api.get("linhas.json").then((res) => {
      setLines(res.data);
    });
  }, []);

  if (!polygon.length || !markers.length || !lines.length) return null;
  return <Map lines={lines} markers={markers} polygon={polygon} />;
};
