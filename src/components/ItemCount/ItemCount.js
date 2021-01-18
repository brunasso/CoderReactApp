import React from 'react'

export const ItemCount = ({minTotal, maxTotal, onAdd, total}) => {

    return(
        <div>
            <button class="btn btn-light" onClick={minTotal} > - </button> 
                <strong><span style={{margin: '3%', fontSize: '125%'}}>{total}</span></strong>
            <button className="btn btn-light" onClick={maxTotal}> + </button><br/><br/> 

            <button className="btn btn-light" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}