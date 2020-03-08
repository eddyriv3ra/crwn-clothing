import { connect } from "react-redux";
import CollectionItem from "./CollectionItem";
import { addItem } from "../../redux/cart/cart.actions";

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
