import styles from "./Error.module.css";
import PropTypes from "prop-types";

export default function Error({ error }) {
  if (!error) return null;
  return <p className={styles.error}>{error}</p>;
}

Error.propTypes = {
  error: PropTypes.string,
};
