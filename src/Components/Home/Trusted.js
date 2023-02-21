import React from 'react';

const Trusted = () => {
    return (
        <div className='py-20 bg-gray-200'>
            <div className='lg:w-9/12 mx-auto xs:px-3'>
                <h2 className='text-3xl text-center font-semibold '>Trusted By 1000+ Companies</h2>
                <div className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-5 mt-10 px-2'>
                    <div className='flex justify-center'>
                        <img className='min-w-24 h-24' src="images/brand/Nike-Logo.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <img className='min-w-24 h-24' src="images/brand/Nagad-logo.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <img className='min-w-24 h-24' src="images/brand/Nissan_logo.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <img className='min-w-24 h-24' src="images/brand/visa.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <img className='min-w-24 h-24' src="images/brand/youtube.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;