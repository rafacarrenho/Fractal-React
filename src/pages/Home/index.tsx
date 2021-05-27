import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeMain: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontWeight: 700,
    marginBottom: 40,
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeMain}>
      <Typography variant="h3" component="h1" className={classes.title}>
        Bem vindo à<br />
        Fractal Engenharia
      </Typography>
      <p>
        Para visualizar os <b>gráficos</b> ou <b>mapas</b> utilize o menu
        lateral.
      </p>
    </div>
  );
};
