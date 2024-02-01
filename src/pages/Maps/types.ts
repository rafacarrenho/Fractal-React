export type MarkersType = {
  id_stt: string;
  lat_stt: number;
  lng_stt: number;
  codigo_stt: string;
  responsavel_stt: string;
  nome_stt: string;
  uf_stt: string;
};

export type PolygonType = {
  lat: number;
  lng: number;
};

export type LinesType = {
  lat: number;
  lng: number;
};

export type MapData = {
  markers: MarkersType[];
  polygon: PolygonType[];
  lines: LinesType[];
};
