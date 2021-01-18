import React from 'react'
import {Item} from '../Item/Item'
import './ItemList.css'


export const ItemList = ({products}) => {

    return (
        <>
            <div className="item row">
            {products.map(producto => <Item key={producto.id} producto={producto}/>)}
            </div>
        </>
    )
}