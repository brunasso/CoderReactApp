import React, {useState, useContext} from 'react'

export const CartContext = React.createContext(0)

export const useCartContext = () => useContext(Context);

export const Context = ({children}) => {

    
    
    const [globalQuantity, setGlobalQuantity] = useState(0);

    //Items agregados en el carrito 
    

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

    const removeItem = (idItemToRemove) => {
        itemsCart.splice(itemsCart.findIndex(itemCart => itemCart.id === idItemToRemove), 1)
        setItemCart([...itemsCart])   
    }

    const clear = () => {
        setItemCart([]);
    }

    
    return (
    <CartContext.Provider value={{globalQuantity, itemsCart, setGlobalQuantity, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>)
}