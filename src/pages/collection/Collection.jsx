import React from "react";
import CollectionItem from "../../components/collectionItem";
import styles from "./collection.module.scss";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className={styles["collection-page"]}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
