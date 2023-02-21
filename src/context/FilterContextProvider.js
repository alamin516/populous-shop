import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./AppProvider";
import reducer from '../reducer/productFilterReducer'

export const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: 'lowest',
    filters: {
        text: '',
        category: "all",
        company: "all",
        colors: 'all',
        maxPrice: 0,
        price: 0,
        minPrice: 0
    }
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductsContext()

    const [state, dispatch] = useReducer(reducer, initialState)

    // Grid view product
    const setGridView = () => {
        return dispatch({ type: 'LOAD_GRID_VIEW' })
    }

    // List view product
    const setListView = () => {
        return dispatch({ type: 'LOAD_List_VIEW' })
    }

    // Sort Function
    const sorting = (event) => {
        const sortValue = event.target.value;
        return dispatch({ type: 'GET_SORTING_VALUE', payload: sortValue })
    }

    // Sorting products function
    // useEffect(() => {
    //     return dispatch({ type: 'SORTING_PRODUCTS', payload: products })
    // }, [products, state.sorting_value])

    // console.log(state.sorting_value)


    // Search product 
    const updateFilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value

        dispatch({ type: 'GET_UPDATE_FILTER_VALUE', payload: { name, value } })
    }

    // TO CLEAR FILTER
    const clearFilter = () =>{
        dispatch({type: 'CLEAR_FILTER'})
    }

    // Filter Data
    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS' })
        dispatch({ type: 'SORT_PRODUCTS' })
    }, [products, state.sorting_value, state.filters])

    // All Products
    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
    }, [products])

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilter }}>
        {children}
    </FilterContext.Provider>
};

export const useFilterContext = () => {
    return useContext(FilterContext)
}
