import { connect } from "react-redux";
import SignIn from "./SignIn";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
