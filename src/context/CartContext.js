import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext()

const getLocalCartData = () => {
    let localCartData = localStorage.getItem('Cart')
    if (localCartData === [] || localCartData === null) {
        return []
    } else {
        return JSON.parse(localCartData)
    }
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fees: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } })
    }


    const setDecrease = (id) => {
        dispatch({ type: 'SET_DECREMENT', payload: id })
    }

    const setIncrease = (id) => {
        dispatch({ type: 'SET_INCREMENT', payload: id })
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_CART_ITEM', payload: id })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART_ITEMS' })
    }

    useEffect(() => {
        // dispatch({type: 'SET_CART_TOTAL_ITEMS'})
        // dispatch({type: 'SET_TOTAL_PRICE'})
        dispatch({ type: 'TOTAL_CART_TOTAL_PRICE' })
        localStorage.setItem('Cart', JSON.stringify(state.cart))
    }, [state.cart])


    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                clearCart,
                setDecrease,
                setIncrease
            }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };