import React from "react";
import {connect} from "react-redux"
import Test from './ui/paginator/test.js'
// require('./style.scss')
class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Test/>
         )
    }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Application);
