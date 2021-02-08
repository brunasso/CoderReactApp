import React from 'react'
import './ItemCount.css'

export const ItemCount = ({minTotal, maxTotal, onAdd, error, total}) => {

    

    return(
        <div>
            <span className="error">{error}</span><br/>
            <button class="btn btn-light" onClick={minTotal} > - </button> 
                <strong><span style={{margin: '3%', fontSize: '125%'}}>{total}</span></strong>
            <button className="btn btn-light" onClick={maxTotal}> + </button><br/><br/>
            <button className="btn btn-light" onClick={onAdd}>Quiero {total}</button>
            <br/><br/>
        </div>
    )
}