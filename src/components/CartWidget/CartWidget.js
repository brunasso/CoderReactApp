import React, {useContext} from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import {CartContext} from '../../components/CartContext/CartContext'
import './CartWidget.css'

export const CartWidget = () => {

    const {quantity} = useContext(CartContext)

    return(
        <Link to='/cart'>
        <div className="counterCart">
            <span >{quantity}</span>
            <FontAwesomeIcon icon={faShoppingCart} size='lg'/>
        </div>
        </Link>
    )

}