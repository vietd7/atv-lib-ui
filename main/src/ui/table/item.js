import React from 'react'

const Item = (props) => {
    return (<td className={props.className} style={{width:props.width}}>{props.children}</td>)
}
export {
    Item
}
