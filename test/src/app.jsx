import React from "react";
import {connect} from "react-redux"
// import {Table, TableHeader, Item, TableContent} from 'atv-table'
// require('./style.scss')
import Paginator from 'atv-paginator'
class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
  <Paginator totalPage={7} clickHandler={(page)=>{
    console.log(page);
}} />
         )
    }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Application);
