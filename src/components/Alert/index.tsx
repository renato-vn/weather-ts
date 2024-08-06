import { PropsWithChildren } from "react";
import styles from "./Alert.module.css";

const Alert = ({ children }: PropsWithChildren) => {
  return <div className={styles.alert}>{children}</div>;
};

export default Alert;
