import React from "react";
import styles from "./spinner.module.scss";

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  const result = isLoading ? (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer}></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
  return result;
};

export default Spinner;
