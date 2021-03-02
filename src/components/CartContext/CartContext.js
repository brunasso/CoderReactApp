import React, {useState, useContext} from 'react'

export const CartContext = React.createContext(0)

export const useCartContext = () => useContext(Context);

export const Context = ({children}) => {

    
    
    const [globalQuantity, setGlobalQuantity] = useState(0);

    //Loading
    const [loading, setLoading] = useState(true)
    

    //Carritos que estan en el cart
    const [itemsCart, setItemCart] = useState ([])

    //Ad items to cart
    const addItem = (item, quantity) => {
        let itemToAddCart = itemsCart.find(itemCart => itemCart.id === item.id)
        let plusGlobalQuantity = globalQuantity + quantity
        setGlobalQuantity(plusGlobalQuantity)
        if (itemToAddCart){
            itemToAddCart.quantity += quantity;
            setItemCart([...itemsCart])
            console.log(itemsCart)
        }
        else{
            setItemCart([...itemsCart, {...item, quantity}])
        }
    }

    const removeItem = (idItemToRemove, itemQuantity) => {
        itemsCart.splice(itemsCart.findIndex(itemCart => itemCart.id === idItemToRemove), 1)
        setItemCart([...itemsCart])
        setGlobalQuantity(globalQuantity-itemQuantity)

    }

    const clearCart = () => {
        setItemCart([]);
        setGlobalQuantity(0)
    }


    
    return (
    <CartContext.Provider value={{loading, globalQuantity, itemsCart, setLoading, setGlobalQuantity, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>)
}