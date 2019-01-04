import React from 'react'

const Table = (props) => {
    return (<table className="atv-table">
        <tbody className={props.className}>
            {props.children}
        </tbody>
    </table>)
}

export {
    Table
}
