import React, { createContext, useState, useContext, useEffect } from "react";

export const ContextGlobal = createContext('');
export const useCartContext = () => useContext(ContextGlobal);

export default function ContextContainer({children}) {
    const [Cart, setCart] = useState( JSON.parse(localStorage.getItem('Cart')) || []);
    const [User, setUser] = useState( JSON.parse(localStorage.getItem('User')) || '');

    const isInCart = (id) => Cart.find(product => product.id === id) ? true : false;

    const addItemToCart = (item, quantity, size) => {
        if(isInCart(item.id)) {
            setCart(Cart.map((product) => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity, size: size} : product
            }));
        } else {
            setCart([...Cart, {...item, quantity, size}]);
        }
    }

    const addItemWithNewQuantity = (item, quantity, size) => {
        if(isInCart(item.id)) {
            setCart(Cart.map((product) => {
                return product.id === item.id ? {...product, quantity: quantity, size: product.size} : product
            }));
        } else {
            setCart([...Cart, {...item, quantity, size}]);
        }
    }

    const removeItemCart = (id) => setCart(Cart.filter(product => product.id !== id));

    const clearCart = () => setCart([]);

    const AddNewUser = (userInfo, Password, Preference) => {
        setUser({...userInfo, password: Password, preference: Preference})
    }

    useEffect(() => {
        localStorage.setItem('Cart', JSON.stringify(Cart));
    }, [Cart])

    useEffect(() => {
        localStorage.setItem('User', JSON.stringify(User));
    }, [User])

    return (
    <ContextGlobal.Provider value={{
        isInCart,
        addItemToCart,
        addItemWithNewQuantity,
        removeItemCart,
        clearCart,
        AddNewUser,
        Cart,
        User,
    }}>
        {children}
    </ContextGlobal.Provider>
    )
}