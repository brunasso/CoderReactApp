import React, {useContext} from 'react'
import './ItemDetail.css'
import { ItemCountContainer } from '../ItemCount/ItemCountContainer';
import {useState} from 'react';
import { Link } from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'

export const ItemDetail = ({detail}) => {

        const [hayAlgo, setHayAlgo] = useState(false);
        const initial = 1;
        const {addItem} = useContext(CartContext)
        
        const onAdd = (total) =>{
            if (total > 0) setHayAlgo(true);
            addItem(detail, total)
        }


    return(
        <>
            <div>
                <h1>{detail.nombre}</h1><br/><br/>
                <div>
                    <img className="detail" src={detail.imagen} alt={detail.alt}/><br/><br/>
                </div>
                <h4 className="detail">{detail.detalle}</h4><br/><br/>
                { hayAlgo ?
                <Link to='/cart'>
                <button className="btn btn-light">Terminar compra</button>
                <br/><br/>
                </Link>  : 
                <>
                <h2>Precio: ${detail.precio}</h2><br/>
                <ItemCountContainer initial={initial} stock={detail.stock} onAdd={onAdd} />
                </>
                }
                
            </div>
        </>
    )
}