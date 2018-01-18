import React from 'react'
require('./style.scss')
class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPage: props.totalPage || 1,
            currentPage: 1
        }
    }
    changePage(page) {
        if ((page > 0) && (page <= this.state.totalPage)) {
            this.setState({
                currentPage: page
            }, () => {
                // console.log(this.state.totalPage);
                this.props.clickHandler(this.state.currentPage)
            })
        }
    }

    render() {
        var currentPage = this.state.currentPage;
        var totalPage = this.state.totalPage;
        return (<ul className="atv-pagination">
            <li className={currentPage === 1
                    ? "li-not-allowed"
                    : ""} onClick={() => {
                    if (currentPage !== 1) {
                        this.changePage(1)
                    }
                }}>First</li>
            <li className={currentPage === 1
                    ? "li-not-allowed"
                    : ""} onClick={() => {
                    this.changePage(currentPage - 1)
                }}>Previous</li>
            <li style={{
                    display: ((currentPage - 2) < 1)
                        ? "none"
                        : "block"
                }} onClick={() => {
                    this.changePage(currentPage - 2)
                }}>{currentPage - 2}</li>
            <li style={{
                    display: ((currentPage - 1) < 1)
                        ? "none"
                        : "block"
                }} onClick={() => {
                    this.changePage(currentPage - 1)
                }}>{currentPage - 1}</li>
            <li className="li-active">{currentPage}</li>
            <li style={{
                    display: ((currentPage + 1) > totalPage)
                        ? "none"
                        : "block"
                }} onClick={() => {
                    this.changePage(currentPage + 1)
                }}>{currentPage + 1}</li>
            <li style={{
                    display: ((currentPage + 2) > totalPage)
                        ? "none"
                        : "block"
                }} onClick={() => {
                    this.changePage(currentPage + 2)
                }}>{currentPage + 2}</li>
            <li className={currentPage === totalPage
                    ? "li-not-allowed"
                    : ""} onClick={() => {
                    this.changePage(currentPage + 1)
                }}>Next</li>
            <li className={currentPage === totalPage
                    ? "li-not-allowed"
                    : ""} onClick={() => {
                    if (currentPage !== totalPage) {
                        this.changePage(totalPage)
                    }
                }}>Last</li>

        </ul>)
    }
}

export default Paginator;
