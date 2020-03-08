import React from "react";
import CustomButton from "../Button";
import styles from "./collectionItem.module.scss";

const CollectionItem = ({ item, addItem }) => {
  const addItems = () => {
    addItem(item);
  };

  const { imageUrl, name, price } = item;
  return (
    <div className={styles["collection-item"]}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles["collection-footer"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <CustomButton
        inverted
        customStyles={styles["custom-button"]}
        onClick={addItems}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
