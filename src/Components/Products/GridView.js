import React from 'react';
import Product from '../Home/Product';

const GridView = ({products}) => {
    return (
        <div className='py-2'>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                products.map((product, i )=> {
                    return <Product key={i} product={product}></Product>
                })
                }
            </div>
        </div>
    );
};

export default GridView;