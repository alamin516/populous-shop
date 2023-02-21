import React from 'react';
import { Link } from 'react-router-dom';
import FormatPrice from '../../Helper/FormatPrice';

const Product = ({ product }) => {
    const { id, name, image, category, price } = product

    return (
        <Link to={`/product/${id}`} className='p-2 pb-3 relative bg-white bg-blend-lighten hover:bg-blend-darken z-10 shadow-lg rounded-lg border border-1'>
            <figure className='overflow-hidden'>
                <img className='h-[230px] w-full hover:scale-150 duration-300' src={image} alt={name} />
                <figcaption className='absolute top-4 right-5 bg-orange-600 px-3 py-2 text-sm text-white z-10'>{category}</figcaption>
            </figure>
            <div className='flex justify-between p-2'>
                <h2 className='text-xl'>{name}</h2>
                <p><FormatPrice price={price}></FormatPrice></p>
            </div>

        </Link>
    );
};

export default Product;