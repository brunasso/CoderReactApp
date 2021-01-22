import React, {useState, useEffect} from 'react'
import { ItemCount } from './ItemCount'

export const ItemCountContainer = ({initial, stock}) => {

    //useState para mostrar mensajes de errores en pantalla
    const [error, setError ] = useState('')

    var realInitial;
    stock < initial ? realInitial = stock: realInitial = initial

    // Utilizo este useEffect, para que una vez enviado el mensaje de error, no lo deje estático en la pantalla, y lo retire luego de 5 segundos.
    useEffect(()=> {
        setTimeout(()=>{
            setError('');
        },5000)
    },[error])
    
    const [total, setTotal] = useState(realInitial);

    const plusTotal = () => {
        stock <= 0 ? setError ("No hay stock disponible") : 
        total < stock ? setTotal(total+1) : setError (`Solamente hay ${total} artículo/s`) 
    }

    const minusTotal = () => {
        stock <= 0 ? setError ("No hay stock disponible") :
        total <= 1 ? setError ("Debe tener al menos 1 artículo") : setTotal(total-1)
    }

    const agregarCarrito = () => {
        stock <= 0 ? setError ("No hay stock disponible") :
        setError `Se agregaron ${total} artículos al carrito`
    }

    return(
        <>
            <ItemCount minTotal={minusTotal} maxTotal={plusTotal} onAdd={agregarCarrito} total={total} error={error}/>
        </>
    )
}