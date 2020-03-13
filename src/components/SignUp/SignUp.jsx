import React, { useState } from "react";
import FormInput from "../FormInput/";
import Button from "../Button";
import styles from "./signUp.module.scss";

const SignUp = ({ signUpStart }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userInfo;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userInfo;

  return (
    <div className={styles["sign-up"]}>
      <h2 className={styles.title}>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={styles["sign-up-form"]} onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="Submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
