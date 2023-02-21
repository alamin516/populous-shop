import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ data }) => {
    const { name } = data
    return (
        <div className='lg:w-10/12 mx-auto grid lg:grid-cols-2 gap-10 gap-row-10 lg:min-h-[80vh] py-10 px-2'>
            <div className='flex items-center'>
                <div>
                    <p className='text-xl mb-3'>Welcome to</p>
                    <h1 className='text-5xl font-semibold mb-5'>{name}</h1>
                    <p className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci similique temporibus. Quas dicta perspiciatis omnis corrupti fuga esse, recusandae culpa excepturi inventore earum deserunt doloremque eaque! Hic, modi impedit.</p>
                    <Link to={`/products`}>
                        <button className='text-xl text-white bg-orange-600 px-6 py-2 hover:bg-black duration-200'>Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className='flex items-center'>
                <figure style={{ position: 'relative' }}>
                    <img
                        className="lg:w-8/12 shadow-lg"
                        src="images/hero.jpg"
                        alt="hero-section"

                    />
                    <span
                        className='lg:visible invisible'
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '70%',
                            color: 'red',
                            top: 50,
                            left: 50,
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}>
                    </span>

                </figure>

            </div>
        </div >
    );
};

export default HeroSection;