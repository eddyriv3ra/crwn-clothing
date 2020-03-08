import CollectionOverview from "./CollectionsOverview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionOverview);
