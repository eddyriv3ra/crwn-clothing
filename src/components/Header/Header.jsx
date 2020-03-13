import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon";
import CartDropDown from "../CartDropDown";
import styles from "./header.module.scss";

const Header = ({ currentUser, hidden, signOutStart }) => {
  const singOut = () => {
    signOutStart();
  };

  return (
    <div className={styles.header}>
      <Link className={styles["logo-container"]} to="/">
        <Logo className={styles.Logo} />
      </Link>
      <div className={styles.options}>
        <Link className={styles.option} to="/shop">
          SHOP
        </Link>
        <Link className={styles.option} to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className={styles.option} onClick={singOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className={styles.option} to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? <CartDropDown /> : null}
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool
};

export default Header;
