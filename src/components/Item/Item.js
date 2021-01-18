import React from 'react'
import { ItemCountContainer } from '../ItemCount/ItemCountContainer';
import './Item.css'

export const Item = ({producto}) =>{

    return(
        <>
            <div className="col-md-4 col-sm-6 col-xl-3 item">
                <img src={producto.imagen} alt={producto.alt}/><br/>
                {producto.nombre} <br/><br/>
                <ItemCountContainer stock={producto.stock} initial={producto.initial}/>
            </div>
        </>

    );
}