import "./styles/global.scss";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme";
import { MenuDrawer } from "./components/Drawer";
import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <MenuDrawer>
          <Routes />
        </MenuDrawer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
