import React from "react";
import PreviewCollection from "../../components/previewCollection";
import styles from "./collectionsOverview.module.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className={styles["collections-overview"]}>
      {collections.map(({ id, items, title }) => (
        <PreviewCollection key={id} items={items} title={title} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
