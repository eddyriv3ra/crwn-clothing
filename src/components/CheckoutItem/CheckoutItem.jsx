import React from "react";
import styles from "./checkoutItem.module.scss";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const removeItemfromCart = () => clearItemFromCart(cartItem);

  const decreaseOrRemoveItemFromCart = () => removeItem(cartItem);

  const addItemToCart = () => addItem(cartItem);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={styles["checkout-item"]}>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={decreaseOrRemoveItemFromCart}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={addItemToCart}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div className={styles["remove-button"]} onClick={removeItemfromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
