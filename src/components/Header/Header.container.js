import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selecctCurrentUser } from "../../redux/user/user.selectors";

import Header from "./Header";

const mapStateToProps = createStructuredSelector({
  currentUser: selecctCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
