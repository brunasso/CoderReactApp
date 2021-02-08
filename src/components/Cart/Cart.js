import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'

export const Cart = () => {

    const {itemsCart, removeItem} = useContext(CartContext)

    const quitarItem = (id) => {
        removeItem(id)
    }

    return(
        <>
        <div>
            <h1>Este es el Cart</h1>
        </div>
        <table width='70%' style={{marginLeft:'8%'}} >
            { itemsCart.length > 0 &&
                <tr>
                <th>Artículo</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
                <th>Eliminar Item</th>
            </tr>}
        {
            itemsCart.map(itemCart => 
            <tr>
                <td>{itemCart.nombre}</td>
                <td>{itemCart.precio} </td>
                <td>{itemCart.quantity}</td>
                <td>{itemCart.quantity * itemCart.precio} </td>
                <td><button id={`${itemCart.id}`}>Quitar item</button></td>
            </tr>
            )
        }{ itemsCart.length > 0 ?
         <><br/>
        <tr>
            <td>Precio final: </td>
       </tr>
       </>
       :
        <>
       <h2>No hay productos en el carrito</h2>
       <Link to='/'>
       <button className='btn btn-light'>Ir a comprar algo</button>
       </Link>
       </>
       } 
        </table>
        
        </>
    )
}