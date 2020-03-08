import React from "react";
import cx from "classnames";
import styles from "./formInput.module.scss";

const FormInput = ({ handleChange, label, name, type, value }) => {
  const labelStyle = cx(styles["form-input"], {
    [styles.shrink]: value.length
  });
  return (
    <div className={styles.group}>
      <input
        className={styles["form-input"]}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
      />
      {label ? <label className={labelStyle}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
