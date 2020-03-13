import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/Header";
import SignInSignUp from "./pages/SignUpSignIn";
import Checkout from "./pages/checkout";
import { selecctCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import "./App.scss";

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

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
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
