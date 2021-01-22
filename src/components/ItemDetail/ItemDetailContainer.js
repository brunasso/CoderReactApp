import React, { useState, useEffect } from 'react'
import {ItemDetail} from './ItemDetail'
import {useParams} from 'react-router-dom'

const itemDetail = [
    {id: 1, nombre: "IPA", imagen: "https://i.ibb.co/2cXKTgv/IPA.png", alt: "IPA", detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo y IPA cebada ', initial: 4, stock:7, precio: 160},
    {id: 2, nombre: "STOUT",imagen: "https://i.ibb.co/4fF9XPM/STOUT.png", alt: "STOUT", detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo y STOUT cebada ', initial: 1, stock:7, precio: 170},
    {id: 3, nombre: "BLONDE",imagen: "https://i.ibb.co/FBNYM0X/BLONDE.png", alt: "BLONDE", detalle: 'De color dorado la Blonde Ale Libertad es el más accesible y universal para el paladar, sin dejar de ser pretenciosa en su sabor con notas suaves a malta y lúpulo tanto en nariz como en paladar, perfectamente bien equilibrada, fácil de tomar y muy refrescante. ', initial: 4, stock:7, precio: 140},
    {id: 4, nombre: "LAGER",imagen: "https://i.ibb.co/cwtcr45/LAGER.png", alt: "LAGER", detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo LAGER y cebada ', initial: 2, stock:0, precio: 120}
]

export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        console.log(id);
    },[id])
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
    }, [])

    return(
        <>
        <div>
            <ItemDetail detail={detail}/> 
        </div>
        </>
    )
} 