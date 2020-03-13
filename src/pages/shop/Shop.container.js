import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

import Shop from "./Shop";

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(Shop);
