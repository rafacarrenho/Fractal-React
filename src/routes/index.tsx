import { Route, Switch } from "react-router-dom";

import { Charts } from "../pages/Charts";
import { Home } from "../pages/Home";
import { Maps } from "../pages/Maps";

export const Routes = () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/mapa`} component={Maps} />
      <Route path={`${process.env.PUBLIC_URL}/graficos`} component={Charts} />
      <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
    </Switch>
  );
};
