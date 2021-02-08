import React, { useState, useEffect } from 'react'
import {ItemDetail} from './ItemDetail'
import {useParams} from 'react-router-dom'

const itemDetail = [
    {id: 1, nombre: "IPA", imagen: "https://i.ibb.co/2cXKTgv/IPA.png", alt: "IPA", detalle: 'Esta Ipa de centeno Libertad es parte de nuestra serie InExtremis. Esta cerveza se caracteriza por tener un buen balance entre el amargor de sus lúpulos y los grados de alcohol en la cerveza. Es una cerveza aromática y con notas frutales, herbales y cítricas. Para los amantes del lúpulo es una buena elección. Es una cerveza refrescante con un buen amargor.    ', initial: 4, stock:7, precio: 160},
    {id: 2, nombre: "STOUT",imagen: "https://i.ibb.co/4fF9XPM/STOUT.png", alt: "STOUT", detalle: 'Esta Stout Imperial Libertad es negra como la noche, de nuestra serie InExtremis, se caracteriza por la intensidad en sus sabores y aromas de gran cuerpo y potencia alcohólica perfectamente bien balanceados. Sus notas a frutos secos, maltas tostadas, café, cacao, jerez, ligera vainilla y avellanas, son solo la punta del iceberg de la complejidad de esta cerveza.', initial: 1, stock:7, precio: 170},
    {id: 3, nombre: "BLONDE",imagen: "https://i.ibb.co/FBNYM0X/BLONDE.png", alt: "BLONDE", detalle: 'De color dorado la Blonde Ale Libertad es el más accesible y universal para el paladar, sin dejar de ser pretenciosa en su sabor con notas suaves a malta y lúpulo tanto en nariz como en paladar, perfectamente bien equilibrada, fácil de tomar y muy refrescante. ', initial: 4, stock:7, precio: 140},
    {id: 4, nombre: "RED",imagen: "https://i.ibb.co/cwtcr45/LAGER.png", alt: "RED", detalle: 'De color ámbar – rojizo, esta Red Ale es una interpretación muy accesible para cualquier paladar del estilo, suave y fácil de tomar. Maltas y lúpulos se encuentran bien balanceados. Sabores sutiles a madera, caramelo y frutos secos. Es una cerveza seca y poco amarga con un ligero toque de la malta tostada al final del trago.', initial: 2, stock:4, precio: 120}
]

export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});
    const {id} = useParams();
    
    

    useEffect(() => {
        
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemDetail)
            },2000)
        })
            promise.then(response => {
                //console.log(response)
                setDetail(response[id -1])
                //console.log(detail)
            })
    }, [id])

    return(
        <>
        <div>
            <ItemDetail detail={detail}/> 
        </div>
        </>
    )
} 