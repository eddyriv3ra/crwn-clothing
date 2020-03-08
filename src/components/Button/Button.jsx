import React from "react";
import styles from "./button.module.scss";
import PropTypes from "prop-types";
import noop from "lodash/noop";
import cx from "classnames";

const Button = ({
  children,
  isGoogleSignIn,
  type,
  inverted,
  onClick,
  customStyles
}) => {
  const customButtonStyle = cx(styles["custom-button"], {
    [customStyles]: customStyles,
    [styles["google-sign-in"]]: isGoogleSignIn,
    [styles.inverted]: inverted
  });
  return (
    <button className={customButtonStyle} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
  children: PropTypes.any.isRequired,
  customStyles: PropTypes.string
};

Button.defaultProps = {
  onClick: noop,
  isGoogleSignIn: false,
  customStyles: null
};

export default Button;
