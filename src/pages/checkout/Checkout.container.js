import { connect } from "react-redux";
import Checkout from "./Checkout";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  totalValue: selectCartTotal(state)
});

export default connect(mapStateToProps)(Checkout);
