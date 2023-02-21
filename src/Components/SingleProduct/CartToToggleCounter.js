import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartToToggleCounter = ({ amount, handleDecrease, handleIncrease }) => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <button className='font-semibold px-5 py-2' onClick={() => handleDecrease()}>
                    <FaMinus />
                </button>
                <div><p className='font-semibold text-xl px-5 py-2'>{amount}</p></div>
                <button className='font-semibold px-5 py-2' onClick={() => handleIncrease()}>
                    <FaPlus ></FaPlus>
                </button>
            </div>
        </div>
    );
};

export default CartToToggleCounter;