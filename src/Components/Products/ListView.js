import React from 'react';
import { Link } from 'react-router-dom';
import FormatPrice from '../../Helper/FormatPrice';


const ListView = ({ products }) => {

    return (
        <div className='my-2'>
            {
                products.map((product, i) => {
                    const { id, name, image, description, price } = product;

                    return (
                        <div key={i} className='flex items-center lg:px-20 lg:py-4 py-2 border border-1 shadow-lg border-gay-200 lg:gap-10 gap-2 mb-5'>
                            <div className='lg:w-5/12 w-6/12 overflow-hidden'>
                                <Link to={`/product/${id}`}>
                                    <figure>
                                        <img className='hover:scale-150 duration-300 cursor-pointer w-full lg:h-full h-[200px]' src={image} alt={name} />
                                    </figure>
                                </Link>
                            </div>
                            <div className='w-7/12'>
                                <h2 className='text-2xl font-semibold mb-2'>{name}</h2>
                                <p className='mb-2'><FormatPrice price={price}></FormatPrice></p>
                                <p className='lg:block hidden'>{description.slice(0, 90)}...</p>
                                <p className='lg:hidden block'>{description.slice(0, 60)}...</p>
                                <Link to={`/product/${id}`}>
                                    <button className='px-4 py-2 bg-orange-600 text-xl mt-2 text-white'>View More</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ListView;