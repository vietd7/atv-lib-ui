import React from "react";
import {connect} from "react-redux"
import {Table, TableHeader, Item, TableContent} from './'
// require('./style.scss')
class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Table>
                <TableHeader>
                    <Item width="20%">Tên tài khoản</Item>
                    <Item width="20%">Số điện thoại</Item>
                    <Item width="30%">Vàng hiện tại</Item>
                    <Item width="30%">Vàng Tổng nạp</Item>
                    <Item width="20%">Giao dịch</Item>
                </TableHeader>
                <TableContent >
                    <Item width="20%">Tên tài khoản</Item>
                    <Item width="20%">Số điện thoại</Item>
                    <Item width="30%">Vàng hiện tại</Item>
                    <Item width="30%">Vàng Tổng nạp</Item>
                    <Item width="20%">Giao dịch</Item>
                </TableContent>
                <TableContent>
                    <Item width="20%">Tên tài khoản</Item>
                    <Item width="20%">Số điện thoại</Item>
                    <Item width="30%">Vàng hiện tại</Item>
                    <Item width="30%">Vàng Tổng nạp</Item>
                    <Item width="20%">Giao dịch</Item>
                </TableContent>
            </Table>
        </div>)
    }
}
const mapStateToProps = (state, ownProps) => ({test: state.utils.test});
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Test);
