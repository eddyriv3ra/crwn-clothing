import React from "react";
import Directory from "../../components/directory";
import styles from "./homepage.module.scss";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
}

export default Homepage;
