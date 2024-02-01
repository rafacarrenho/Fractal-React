import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import RoomIcon from "@material-ui/icons/Room";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Highcharts from "highcharts";
import { MenuDrawerProps } from "./types";
import { LogoWhite } from "../../assets/svg/LogoWhite";
import { useStyles } from "./styles";

export const MenuDrawer = ({ children }: MenuDrawerProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setTimeout(() => {
      Highcharts?.charts.forEach((e) => e?.reflow());
    }, 200);
  }, [open]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={(classes.appBar, classes.appBarShift)}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <LogoWhite />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}></div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={handleDrawer}
            component={Link}
            to="/graficos"
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary={"Gráficos"} />
          </ListItem>
          <ListItem button onClick={handleDrawer} component={Link} to="/mapa">
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary={"Mapa"} />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  );
};
