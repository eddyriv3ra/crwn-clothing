import { connect } from "react-redux";
import Directory from "./Directory";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);
