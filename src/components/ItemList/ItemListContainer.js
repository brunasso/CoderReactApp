import React, {useState, useEffect} from 'react'
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';

const productos = [
    {id: 1, nombre: "IPA", imagen: "https://i.ibb.co/2cXKTgv/IPA.png", alt: "IPA", detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo y IPA cebada ', initial: 4, stock:7},
    {id: 2, nombre: "STOUT",imagen: "https://i.ibb.co/4fF9XPM/STOUT.png", alt: "STOUT", detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo y STOUT cebada ', initial: 1, stock:7},
    {id: 3, nombre: "BLONDE",imagen: "https://i.ibb.co/FBNYM0X/BLONDE.png", alt: "BLONDE", detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo BLONDE y cebada ', initial: 4, stock:7},
    {id: 4, nombre: "LAGER",imagen: "https://i.ibb.co/cwtcr45/LAGER.png", alt: "LAGER", detalle: 'Es un estilo de Cerveza, que utiliza el Lúpulo LAGER y cebada ', initial: 2, stock:0}
]

export const ItemListContainer = ({greeting}) => {

        const [products, setProductos] = useState([])

        useEffect(() => {
            const promesa = new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve(productos);
                }, 2000)
            })
    
            promesa.then( data =>{
                console.log(data);
                setProductos(data);
            })
        }, [])

        
    return(
        <>
        {/*<h1>
            {greeting} <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst litora nascetur eget cum quam quisque tempus arcu, nulla nec placerat praesent 
                sociosqu justo. Ante ridiculus fringilla cubilia taciti urna erat, convallis consequat felis nascetur habitant odio, per non proin venenatis nostra.

                Mus pharetra sollicitudin velit mauris faucibus ultrices malesuada, class sagittis ligula justo cursus orci, natoque laoreet sociis rhoncus aliquam 
                dui. Mauris natoque sed proin sollicitudin est venenatis conubia, lobortis urna ornare pulvinar fames platea sagittis, dui fusce vehicula aenean ac 
                imperdiet. Scelerisque nostra dictumst netus primis felis tempus hac sem, sodales torquent iaculis commodo aliquet mattis eget magnis, vivamus potenti
                laoreet congue leo inceptos ultricies.</p>
        </h1>*/}
        <div>
            <ItemList products={products}/><br/>
        </div>
        </>
    )
}