import React, {useContext} from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import {CartContext} from '../../components/CartContext/CartContext'
import './CartWidget.css'

export const CartWidget = () => {

    const {globalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart'>
        <div className="counterCart">
            { globalQuantity > 0 &&
                <span >{globalQuantity}</span>
            }
            <FontAwesomeIcon icon={faShoppingCart} size='lg'/>
        </div>
        </Link>
    )

}