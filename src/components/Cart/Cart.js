import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFirestore } from '../Backend/Firebase';
import firebase from 'firebase/app'
import './Cart.css'

export const Cart = () => {

    const {itemsCart, removeItem, clearCart} = useContext(CartContext)

    const [totalPrize, setTotalPrize] = useState(0)
    const [order, setOrder] = useState({})
    const [orderId, setOrderId] = useState('')

    useEffect(() => {
        itemsCart.map(itemCart => setTotalPrize(anteriorTotal=> anteriorTotal+(itemCart.quantity*itemCart.precio)))
    }, [itemsCart])

    useEffect(() => {
        
        const newOrder = {
            buyer: 'Bruno',
            items: itemsCart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrize
        }
        setOrder(newOrder)

    }, [totalPrize])



    const handleCompra = () =>{
        
        let db = getFirestore();
        let orders = db.collection('orders');
        orders.add(order)
        .then(({id}) => {
            let idNueva = id;
            setOrderId(idNueva)
            alert(`El id es ${orderId} o el real ${idNueva}`)
        })
        .catch((error) => console.log("Ocurrió un error: ", error))
        .finally(() => {
            clearCart();
        })
    }
    

    return(
        <>
        <div>
            <h1>Este es el Cart</h1>
        </div>
        <table className="itemsCartUnfolded">
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
                <td> <FontAwesomeIcon className="deleteItem" icon={faTrash} id={itemCart.name} onClick={() => removeItem(itemCart.id, itemCart.quantity)} /></td>
            </tr>
            )
        }{ itemsCart.length > 0 ?
         <><br/>
        <tr>
            <th>Precio final:</th>
            <td></td>
            <td></td>
            <td></td>
            <td>{totalPrize}</td>
       </tr>
       <button className='btn btn-dark'  onClick={handleCompra} >Finalizar Compra</button>
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

