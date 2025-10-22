import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const UserCartContext = createContext({
    userSelectedProducts : [],
    addItemToCart : (selectedProduct) => {},
    totalItems : 0,
})

export const UserCartProvider = ({ children }) => {
    const [userSelectedProducts, setUserSelectedProducts] = useState([])
    const [totalItems, setTotalItems] = useState(0);

    // useEffect(()=>{
    //     const countItems = userSelectedProducts.reduce((total, item)=> total + item.quantity, 0);
    //     setTotalItems(countItems);
    // },[userSelectedProducts])

    const addItemToCart = (selectedProduct) => {
        setTotalItems(prev => prev + 1);
        setUserSelectedProducts(prevSelectedproducts => {
        const existingItem = prevSelectedproducts.find(item => item.id == selectedProduct.id);
        // product already exist -> increase quantity
        if(existingItem){
            return prevSelectedproducts.map(item => 
                item.id === selectedProduct.id
                ? {...item, quantity : item.quantity + 1}
            : item
            )
        }
        return [...prevSelectedproducts, {...selectedProduct, quantity : 1 }]
        })
}
    

    const value = {userSelectedProducts, addItemToCart, totalItems}
    return (
        <UserCartContext.Provider value={value}>
            {children}
        </UserCartContext.Provider>
    )
}

