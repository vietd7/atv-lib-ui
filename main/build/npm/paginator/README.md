# installation

``` shell
npm i atv-paginator --save
```

# usage

``` javascript
import React from 'react'
import Paginator from 'atv-paginator'

const Test = (props) => {
    return (
                    <Paginator totalPage={7} clickHandler={(pageCurrent)=>{
                        console.log("pageCurrent", pageCurrent);
                    }}/>
            )
}
export default Test;

```
# Note
default pageTotal  : 1 <br />
clickHandler : yourClick;
