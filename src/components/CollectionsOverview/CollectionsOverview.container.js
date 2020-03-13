import CollectionOverview from "./CollectionsOverview";
import { connect } from "react-redux";
import { compose } from "redux";
import Spinner from "../../components/Spinner";

import {
  selectCollectionsForPreview,
  selectIsCollectionFetching
} from "../../redux/shop/shop.selectors";

const mapStateToProps = state => ({
  collections: selectCollectionsForPreview(state),
  isLoading: selectIsCollectionFetching(state)
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
