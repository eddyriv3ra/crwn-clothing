import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import SignUp from "./SignUp";

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
