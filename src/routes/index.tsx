import { Routes as RoutesLib, Route } from "react-router-dom";
import { Charts } from "../pages/Charts";
import { Home } from "../pages/Home";
import { Maps } from "../pages/Maps";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route path={`${process.env.PUBLIC_URL}/mapa`} element={<Maps />} />
      <Route path={`${process.env.PUBLIC_URL}/graficos`} element={<Charts />} />
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    </RoutesLib>
  );
};
