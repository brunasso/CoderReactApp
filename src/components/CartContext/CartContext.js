import React, {useState, useContext} from 'react'

export const CartContext = React.createContext(0)

export const useCartContext = () => useContext(Context);

export const Context = ({children}) => {

    
    
    const [quantity, setQuantity] = useState(0);

    //Items agregados en el carrito 
    const itemToAdd = [];
    const [itemsCart, setItemCart] = useState ([])

    //Ad items to cart
    const addItem = (item, quantity) => {
        
        if (isInCart(item)){ 
            itemsCart.splice(item.id-1,0,item)
        }
        console.log(itemsCart)
    }

    const removeItem = (item, quantity) => {
        let removeItemId = itemsCart.filter(itemCart => itemCart.id === item)
        
    }

    const clear = () => {
        setItemCart([]);
    }

    const isInCart = (item) => {
        let itemToAddCart = itemsCart.filter(itemCart => itemCart.id === item.id)
        if (itemToAddCart.length === 0)
        {
            return true
        }else{
            return false
        }
    }
    
    return (
    <CartContext.Provider value={{quantity, setQuantity, addItem}}>
        {children}
    </CartContext.Provider>)
}