import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'


export const CartWidget = () => {

    return(
        <Link to='/cart'>
        <div>
            <FontAwesomeIcon icon={faShoppingCart} size='lg'/>
        </div>
        </Link>
    )

}