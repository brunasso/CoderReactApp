import React from 'react'
import './ItemDetail.css'
import { ItemCountContainer } from '../ItemCount/ItemCountContainer';
import {useState} from 'react';
import { Link } from 'react-router-dom'

export const ItemDetail = ({detail}) => {

        
        
    return(
        <>
            <div>
                <h1>{detail.nombre}</h1><br/><br/>
                <div>
                    <img className="detail" src={detail.imagen} alt={detail.alt}/><br/><br/>
                </div>
                <h4 className="detail">{detail.detalle}</h4><br/><br/>
                <h2>Precio: ${detail.precio}</h2><br/>
                { detail.initial &&
                <ItemCountContainer initial={detail.initial} stock={detail.stock} />
                }
            </div>
        </>
    )
}