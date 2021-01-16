import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const CartWidget = () => {

    return(
        <div>
            <FontAwesomeIcon icon={faShoppingCart} size='lg'/>
        </div>
    )

}