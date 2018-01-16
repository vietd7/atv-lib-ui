# installation

``` shell
npm i atv-table --save
```
 
# usage

``` javascript
import {Table, TableHeader, Item, TableContent} from 'atv-table'

<Table>
    <TableHeader>
        <Item width="20%">Account</Item>
        <Item width="20%">Phone</Item>
        <Item width="30%">Gold</Item>
        <Item width="30%">Gold Cashin</Item>
        <Item width="20%">Exchange</Item>
    </TableHeader>
    <TableContent>
        <Item width="20%">Abc123</Item>
        <Item width="20%">0123 456 789</Item>
        <Item width="30%">777777</Item>
        <Item width="30%">777777777</Item>
        <Item width="20%">pendding</Item>
    </TableContent>

</Table>
```
