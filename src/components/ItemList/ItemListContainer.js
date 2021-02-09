import React, {useState, useEffect} from 'react'
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import {getFirestore} from '../Backend/Firebase/index'


export const ItemListContainer = () => {

        const [categoryProducts, setCategoryProducts] = useState([]);
        //const [products, setProductos] = useState([])
        const {category} = useParams();
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            let db = getFirestore();
            let itemsDb = db.collection("items");
            itemsDb.get()
            .then((querySnapshot)=>{
                querySnapshot.size === 1 && console.log('Hay 1 item')
                let arrayItems = querySnapshot.docs.map(doc => {
                    return({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                /// let result = arrayItems.filter(producto => producto.categoria === `${category}`)
                const categorySelected = itemsDb.where('categoria', '===', `${category}`)
                categorySelected.length > 0? setCategoryProducts(categorySelected) : setCategoryProducts(arrayItems);
                setLoading(false);
            })
        },[category])

        
    return(
        <>
        {loading ? 
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
        :
        <div>
            <ItemList products={categoryProducts}/><br/>
        </div>
        }</>
    )
}