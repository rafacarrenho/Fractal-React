import { CircularProgress } from "@material-ui/core";

import styles from "./styles.module.css";

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <CircularProgress className={styles.center} />
    </div>
  );
};
