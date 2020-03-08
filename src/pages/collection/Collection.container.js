import Collection from "./Collection";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Collection);
