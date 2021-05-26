import "./styles/global.scss";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme";
import { MenuDrawer } from "./components/Drawer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuDrawer></MenuDrawer>
    </ThemeProvider>
  );
}

export default App;
