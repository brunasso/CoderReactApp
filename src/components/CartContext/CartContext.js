import React, {useState, useEffect, useContext} from 'react'

export const CartContext = React.createContext(0)

export const useCartContext = () => useContext(Context);

export const Context = ({children}) => {

    
    
    const [totalPrize, setTotalPrize] = useState(0)

    const [globalQuantity, setGlobalQuantity] = useState(0);

    //Loading
    const [loading, setLoading] = useState(true)
    

    //Carritos que estan en el cart
    const [itemsCart, setItemCart] = useState ([])



    useEffect(() => {
        setTotalPrize(0)
        itemsCart.map(itemCart => setTotalPrize(anteriorTotal=> anteriorTotal+(itemCart.quantity*itemCart.precio)))
    }, [itemsCart])
    

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
        setTotalPrize(0)
    }


    
    return (
    <CartContext.Provider value={{loading, globalQuantity, itemsCart, setLoading, setGlobalQuantity, addItem, removeItem, clearCart, totalPrize}}>
        {children}
    </CartContext.Provider>)
}