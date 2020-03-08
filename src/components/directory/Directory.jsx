import React from "react";
import MenuItem from "../menuItem";
import styles from "./directory.module.scss";

const Directory = ({ sections }) => {
  return (
    <div className={styles["directory-menu"]}>
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
