import styles from "./Error.module.css";

export default function Error({ error }) {
  if (!error) return null;
  return <p className={styles.error}>{error}</p>;
}
