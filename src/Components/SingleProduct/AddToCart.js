import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartToToggleCounter from './CartToToggleCounter';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext()
    const { id, stock, colors } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const handleDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    const handleIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    return (
        <div className='py-3'>
            <div className='mb-5'>
                <p className='flex items-center'>Colors:
                    {
                        colors.map((curColor, i) => {
                            return <button
                                onClick={() => setColor(curColor)}
                                style={{
                                    backgroundColor: color
                                }}
                                className={color === curColor ? 'flex justify-center items-center w-6 h-6 rounded-full ml-1 opacity-100 text-white' : 'w-6 h-6 rounded-full ml-1 opacity-50'}
                                key={i}>
                                {color === curColor ? <FaCheck></FaCheck> : null}
                            </button>
                        })
                    }
                </p>
            </div>
            <div className='lg:w-3/12 w-4/12'>
                <CartToToggleCounter
                    amount={amount}
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                ></CartToToggleCounter>
            </div>
            <div className='mt-5'>
                <Link to='/cart'
                    onClick={() => addToCart(id, color, amount, product)}
                >
                    <button className='text-xl font-semibold px-5 py-2 bg-orange-600 text-white'>Add to card</button>
                </Link>
            </div>
        </div>
    );
};

export default AddToCart;