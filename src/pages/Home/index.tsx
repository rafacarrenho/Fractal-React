import { Typography } from "@material-ui/core";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h3" component="h1" className={styles.title}>
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
