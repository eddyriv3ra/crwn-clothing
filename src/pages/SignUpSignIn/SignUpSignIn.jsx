import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import styles from "./signUpSignIn.module.scss";

const SignUpSignIn = () => {
  return (
    <div className={styles["sign-in-and-sign-up"]}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignUpSignIn;
