import React, { useState } from "react";
import FormInput from "../FormInput";
import Button from "../Button";
import styles from "./signIn.module.scss";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = formState;
    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    e.preventDefault();
    setFormState({ ...formState, [name]: value });
  };

  const { email, password } = formState;
  return (
    <div className={styles["sign-in"]}>
      <h2>I already have and account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        />
        <div className={styles.buttons}>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
