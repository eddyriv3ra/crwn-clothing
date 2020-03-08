import React from "react";
import cx from "classnames";
import { withRouter } from "react-router-dom";
import styles from "./menuItem.module.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  const menuItemStyles = cx(styles["menu-item"], {
    [styles.large]: size === "large"
  });

  const onClick = () => history.push(`${match.url}${linkUrl}`);

  return (
    <div className={menuItemStyles} onClick={onClick}>
      <div
        className={styles["background-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
