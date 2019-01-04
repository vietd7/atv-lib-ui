import React from 'react'
const TableContent = (props) => {
    return (<tr className={props.className} 
    //     onClick={()=>{
       
    //     if(typeof props.onClick() === "function"){
    //         props.onClick()
    //     }
    // }}
    >{props.children}</tr>)
}
export {
    TableContent
}
