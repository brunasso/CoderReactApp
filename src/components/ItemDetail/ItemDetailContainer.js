import React, { useState, useEffect } from 'react'
import {ItemDetail} from './ItemDetail'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../Backend/Firebase'


export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});
    const {id} = useParams();
    
    
    useEffect(() => {
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
        })
        .catch((e) => console.log(`Ocurrió un error:: ${e}`))
    }, [id])


    return(
        <>
        <div>
            <ItemDetail detail={detail}/> 
        </div>
        </>
    )
} 