import React from 'react';
import { FaTruck } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'

const Services = () => {
    return (
        <div className='lg:w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-x-5 gap-y-5 py-10 px-2'>
            <div className='flex  lg:flex-col lg:justify-center items-center lg:p-10 p-5 bg-orange-600 rounded-lg h-70 gap-2'>
                <FaTruck className='w-20 h-20 p-4 lg:mb-5 rounded-full bg-white text-orange-600' />
                <p className='text-xl text-white'>Super Fast And Free delivery</p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center p-5 bg-orange-600 rounded-lg h-30 gap-2'>
                    <MdSecurity className='w-20 h-20 p-4 rounded-full bg-white text-orange-600' />
                    <p className='text-xl text-white'>Non-contact Shipping</p>
                </div>
                <div className='flex items-center p-5 bg-orange-600 rounded-lg h-30 gap-2'>
                    <GiReceiveMoney className='w-20 h-20 p-4 rounded-full bg-white text-orange-600' />
                    <p className='text-xl text-white'>Money-back Guaranteed</p>
                </div>
            </div>
            <div className='flex  lg:flex-col lg:justify-center items-center lg:p-10 p-5 bg-orange-600 rounded-lg h-70 gap-2'>
                <RiSecurePaymentFill className='w-20 h-20 p-4 lg:mb-5 rounded-full bg-white text-orange-600' />
                <p className='text-xl text-white'>Super Secure Payment System</p>
            </div>
        </div>
    );
};

export default Services;