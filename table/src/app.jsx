import React from "react";
import {connect} from "react-redux"

class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {this.props.test}
        </div>)
    }
}
const mapStateToProps = (state, ownProps) => ({test: state.utils.test});
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Application);
