import React from "react";
import {connect} from "react-redux"
import Test from './ui/table/test.js'
// require('./style.scss')
import PopupManager from './ui/popup'
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
