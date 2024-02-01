import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import Map from "../../components/Map";
import { api } from "../../services/api";
import { MapData } from "./types";

export const Maps = () => {
  const [mapData, setMapData] = useState<MapData>();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("map")
      .then((res) => {
        setMapData(res.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    setIsLoading(false);
  }, []);

  if (error) return <Error />;
  if (isLoading) return <Loading />;
  if (!mapData) return <></>;
  return (
    <Map
      lines={mapData.lines}
      polygon={mapData.polygon}
      markers={mapData.markers}
    />
  );
};
