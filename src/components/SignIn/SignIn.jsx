import React, { useState } from "react";
import FormInput from "../FormInput";
import Button from "../Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import styles from "./signIn.module.scss";

const SignIn = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = formState;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
