import Collection from "./Collection";
import { connect } from "react-redux";
import { compose } from "redux";
import Spinner from "../../components/Spinner";
import {
  selectCollection,
  selectIsCollectionFetching
} from "../../redux/shop/shop.selectors";

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
  isLoading: selectIsCollectionFetching(state)
});

const CollectionPageWithSpinner = compose(
  connect(mapStateToProps),
  Spinner
)(Collection);

export default CollectionPageWithSpinner;
