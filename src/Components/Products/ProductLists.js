import React from 'react';
import { useFilterContext } from '../../context/FilterContextProvider';
import GridView from './GridView';
import ListView from './ListView';

const ProductLists = () => {
    const {filter_products, grid_view} = useFilterContext();

    if(grid_view === true){
        return <GridView products={filter_products}></GridView>
    }

    if(grid_view === false){
        return <ListView products={filter_products}></ListView>
    }
};

export default ProductLists;