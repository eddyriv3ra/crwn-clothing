import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import styles from "./CartIcon.module.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className={styles["cart-icon"]} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{itemCount}</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  itemCount: PropTypes.number
};

export default CartIcon;
