import React from 'react'
import { ItemCountContainer } from '../ItemCount/ItemCountContainer';
import './Item.css'
import {Link} from 'react-router-dom'

export const Item = ({producto}) =>{

    return(
        <>
            <div className="col-md-4 col-sm-6 col-xl-3 item">
                <Link to={`/item/${producto.id}`}>
                <img src={producto.imagen} alt={producto.alt}/><br/>
                </Link>
                <h3>{producto.nombre}</h3>
                <ItemCountContainer stock={producto.stock} initial={producto.initial}/>
            </div>
        </>

    );
}