const productFilterReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_FILTER_PRODUCTS':
            const priceArr = action.payload.map(curElem => curElem.price)
            const maxPrice = Math.max(...priceArr)


            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }
            }

        case 'LOAD_GRID_VIEW':
            return {
                ...state,
                grid_view: true
            }

        case 'LOAD_List_VIEW':
            return {
                ...state,
                grid_view: false
            }

        case 'GET_SORTING_VALUE':
            return {
                ...state,
                sorting_value: action.payload
            }

        case 'SORT_PRODUCTS':
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortProducts = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = tempSortProducts.sort(sortingProducts)
            return {
                ...state,
                filter_products: newSortData
            }

        //     if(state.sorting_value === "lowest"){
        //         const lowestPrice = (a, b) =>{
        //             return a.price - b.price;
        //         }
        //         newSortData = tempSortProducts.sort(lowestPrice)
        //    }

        //     if(state.sorting_value === "highest"){
        //         const highestPrice = (a, b) =>{
        //             return b.price - a.price;
        //         }
        //         newSortData = tempSortProducts.sort(highestPrice)
        //    }

        //    if(state.sorting_value === "a-z"){
        //         newSortData = tempSortProducts.sort((a, b)=> a.name.localeCompare(b.name))
        //    }

        //    if(state.sorting_value === "z-a"){
        //         newSortData = tempSortProducts.sort((a, b)=> b.name.localeCompare(a.name))
        //    }

        //    return{
        //             ...state,
        //             filter_products: newSortData
        //         }


        case 'GET_UPDATE_FILTER_VALUE':
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case 'FILTER_PRODUCTS':
            let { all_products } = state
            let tempFilterProducts = [...all_products]

            const { text, company, category, colors, price } = state.filters;

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return curElem.name.toLowerCase().startsWith(text)
                })
            }

            if (category !== 'all') {
                tempFilterProducts = tempFilterProducts.filter(
                    (c) => { return c.category === category }
                );
            }

            if (company !== "all") {
                tempFilterProducts = tempFilterProducts.filter(
                    (curElem) => { return curElem.company.toLowerCase() === company.toLowerCase() }
                );
            }

            if (colors !== 'all') {
                tempFilterProducts = tempFilterProducts.filter(
                    (curElem) => curElem.colors.includes(colors)
                );
            }

            if (price) {
                tempFilterProducts = tempFilterProducts.filter(
                    (curElem) => curElem.price <= price
                );
            }

            return {
                ...state,
                filter_products: tempFilterProducts
            }


        case 'CLEAR_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: "all",
                    company: "all",
                    colors: 'all',
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice
                },
            };

        default:
            return state;

    }
};

export default productFilterReducer;