import React, { useState, useEffect, useContext } from 'react'
import {ItemDetail} from './ItemDetail'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../Backend/Firebase'
import {CartContext} from '../CartContext/CartContext'


export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});
    const {id} = useParams();
    const {loading, setLoading} = useContext(CartContext)
    
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore()

        const itemCollection = db.collection("items")
        const item = itemCollection.doc(id)

        item.get()
        .then(doc => {
            doc.exists && console.log('No hay items')
            setDetail({
                id: doc.id,
                ...doc.data()
            });
            setLoading(false);
        })
        .catch((e) => console.log(`Ocurrió un error:: ${e}`))
    }, [id])


    return(
        <>
        {loading ? 
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
        :
        <div>
            <ItemDetail detail={detail}/> 
        </div>
        }
        </>
    )
} 