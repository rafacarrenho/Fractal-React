import {
  MapContainer,
  TileLayer,
  Polygon,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";

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

type MapProps = {
  polygon: PolygonType[];
  lines: LinesType[];
  markers: MarkersType[];
};

const Map = ({ polygon, lines, markers }: MapProps) => {
  return (
    <MapContainer
      center={polygon[0]}
      zoom={9}
      style={{ height: "100%", width: "100%" }}
      minZoom={5}
      maxBounds={[
        [-180, 180],
        [180, -180],
      ]}
    >
      <Polygon pathOptions={{ color: "purple" }} positions={polygon} />
      <Polyline pathOptions={{ color: "purple" }} positions={lines} />
      {markers.map((marker) => {
        return (
          <Marker
            key={marker.id_stt}
            position={[marker.lat_stt, marker.lng_stt]}
          >
            <Popup>
              <b>Código:</b> {marker.codigo_stt} <br />
              <b>Responsavel:</b> {marker.responsavel_stt} <br />
              <b>Cidade:</b> {marker.nome_stt} <br />
              <b>Estado:</b> {marker.uf_stt} <br />
            </Popup>
          </Marker>
        );
      })}

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default Map;
