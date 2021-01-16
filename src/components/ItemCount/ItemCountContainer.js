import React, {useState, useEffect} from 'react'
import { ItemCount } from './ItemCount'

export const ItemCountContainer = ({initial, stock}) => {

    var realInitial;
    stock < initial ? realInitial = stock: realInitial = initial
    
    const [total, setTotal] = useState(realInitial);

    const plusTotal = () => {
        stock <= 0 ? console.log("No hay stock disponible") : 
        total < stock ? setTotal(total+1) : console.log(`Solamente hay ${total} artículo/s`) 
    }

    const minusTotal = () => {
        stock <= 0 ? console.log("No hay stock disponible") :
        total <= 1 ? console.log("Debe tener al menos 1 artículo") : setTotal(total-1)
    }

    const agregarCarrito = () => {
        stock <= 0 ? console.log("No hay stock disponible") :
        console.log(`Se agregaron ${total} artículos al carrito`)
    }

    return(
        <>
            <ItemCount minTotal={minusTotal} maxTotal={plusTotal} onAdd={agregarCarrito} total={total}/>
        </>
    )
}