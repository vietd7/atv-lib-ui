import React from 'react'
import Paginator from './index'

const Test = (props) => {
    return (<Paginator totalPage={7} clickHandler={(currentPage)=>{
        console.log("currentPage", currentPage);
    }}/>)
}
export default Test;
