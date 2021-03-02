import React, {useState, useEffect, useContext} from 'react'
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import {getFirestore} from '../Backend/Firebase/index'
import {CartContext} from '../CartContext/CartContext'


export const ItemListContainer = () => {

        const [categoryProducts, setCategoryProducts] = useState([]);
        //const [products, setProductos] = useState([])
        const {category} = useParams();

        const {loading, setLoading} = useContext(CartContext)
        

        useEffect(() => {
            setLoading(true)
            let db = getFirestore();
            let itemsDb;
            category !== undefined ? itemsDb = db.collection("items").where('categoria', '==', `${category}`) : itemsDb = db.collection("items");
            itemsDb.get()
            .then((querySnapshot)=>{
                let arrayItems = querySnapshot.docs.map(doc => {
                    return({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setCategoryProducts(arrayItems);
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