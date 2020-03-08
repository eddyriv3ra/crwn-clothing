import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/Header";
import SignInSignUp from "./pages/SignUpSignIn";
import Checkout from "./pages/checkout";
import { setCurrentUser } from "./redux/user/user.actions";
import { selecctCurrentUser } from "./redux/user/user.selectors";
import { auth, createProfileUserDocument } from "./firebase/firebase.utils";
import "./App.scss";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createProfileUserDocument(authUser);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(authUser);
      }
    });
    return () => {
      unlisten();
    };
  }, [setCurrentUser]);

  const RedirectHomePage = () =>
    currentUser ? <Redirect to="/" /> : <SignInSignUp />;

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" render={RedirectHomePage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: selecctCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
