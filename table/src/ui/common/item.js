import React from 'react'

const Item = (props) => {
    return (<li style={{width:props.width}}>{props.children}</li>)
}
export {
    Item
}
