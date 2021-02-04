import React, {useState, useEffect} from 'react'
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'

const productos = [
    {id: 1, nombre: "IPA", imagen: "https://i.ibb.co/2cXKTgv/IPA.png", alt: "IPA", categoria:'IPA', detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo y IPA cebada ', initial: 4, stock:7},
    {id: 2, nombre: "STOUT",imagen: "https://i.ibb.co/4fF9XPM/STOUT.png", alt: "STOUT", categoria:'STOUT', detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo y STOUT cebada ', initial: 1, stock:7},
    {id: 3, nombre: "BLONDE",imagen: "https://i.ibb.co/FBNYM0X/BLONDE.png", alt: "BLONDE", categoria:'BLONDE', detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo BLONDE y cebada ', initial: 4, stock:7},
    {id: 4, nombre: "LAGER",imagen: "https://i.ibb.co/cwtcr45/LAGER.png", alt: "LAGER", categoria:'LAGER', detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo LAGER y cebada ', initial: 2, stock:0}
]

export const ItemListContainer = () => {

        const [categoryProducts, setCategoryProducts] = useState([]);
        //const [products, setProductos] = useState([])
        const {category} = useParams();


        useEffect(() => {
            const promesa = new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve(productos);
                }, 2000)
            })

    
            promesa.then( data =>{
                let result = data.filter(producto => producto.categoria == `${category}`)
                result.length > 0? setCategoryProducts(result) : setCategoryProducts(data);
                
            })
        }, [category])

        
    return(
        <>
        <div>
            <ItemList products={categoryProducts}/><br/>
        </div>
        </>
    )
}