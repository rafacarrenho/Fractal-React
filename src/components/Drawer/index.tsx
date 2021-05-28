import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AssessmentIcon from "@material-ui/icons/Assessment";
import RoomIcon from "@material-ui/icons/Room";
import { ReactNode, useEffect, useState } from "react";
import Logo from "../../assets/img/logo-white.svg";
import { Link, NavLink } from "react-router-dom";
import * as Highcharts from "highcharts";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: "drawerWidth",
    zIndex: theme.zIndex.drawer + 9999,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100% - 60px)",
    marginTop: "60px",
    flexGrow: 1,
    overflowY: "scroll",
    width: `100%`,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: -drawerWidth,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  activeLink: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "& svg": {
      color: "white",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  logoImg: {
    height: "40px",
  },
}));

type MenuDrawerProps = {
  children: ReactNode;
};

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
            <img src={Logo} alt="Logo Fractal" className={classes.logoImg} />
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
            component={NavLink}
            to="/graficos"
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary={"Gráficos"} />
          </ListItem>
          <ListItem
            button
            onClick={handleDrawer}
            component={NavLink}
            to="/mapa"
            activeClassName={classes.activeLink}
          >
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
