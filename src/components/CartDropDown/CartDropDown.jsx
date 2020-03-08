import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import CartItem from "../CartItem";
import styles from "./CartDropDown.module.scss";

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {
  const onClick = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <div className={styles["cart-dropdown"]}>
      <div className={styles["cart-items"]}>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles["empty-message"]}>Your cart is empty</span>
        )}
      </div>
      <Button onClick={onClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

CartDropDown.propTypes = {
  cartItems: PropTypes.array
};

CartDropDown.defaultProps = {
  cartItems: []
};

export default CartDropDown;
