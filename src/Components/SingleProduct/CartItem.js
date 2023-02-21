import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';
import FormatPrice from '../../Helper/FormatPrice';
import CartToToggleCounter from './CartToToggleCounter';

const CartItem = ({item}) => {
    const {removeItem, setDecrease, setIncrease} = useCartContext()
    const { id, image, name, color, price, amount} = item


    return (
        <div className='flex justify-between items-center p-2'>
            <div className='lg:w-3/12 w-5/12 flex gap-2 items-center '>
                <div className='lg:w-4/12 w-4/12'>
                    <figure>
                        <img className='lg:h-[100px] h-[60px]' src={image} alt={name} />
                    </figure>
                </div>
                <div className='lg:w-8/12'>
                    <p className='lg:font-bold'>{name}</p>
                    <div className='flex items-center lg:font-bold'>
                        <p>color:</p>
                        <div
                            style={{ backgroundColor: color }}
                            className='lg:w-4 w-3 lg:h-4 h-3  rounded-full ml-1'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/12 lg:block hidden text-center font-bold'>
                <p>
                    <FormatPrice price={price}></FormatPrice>
                </p>
            </div>
            <div className='lg:w-3/12 w-5/12 lg:px-10 flex justify-center items-center'>
                <div>
                    <CartToToggleCounter
                        amount={amount}
                        handleDecrease={()=> setDecrease(id)}
                        handleIncrease={()=> setIncrease(id)}
                    ></CartToToggleCounter>
                </div>
            </div>
            <div className='lg:w-2/12 lg:block hidden py-3 text-center font-bold'>
                <p>
                    <FormatPrice price={price * amount}></FormatPrice>
                </p>
            </div>
            <div className='w-2/12 flex justify-center items-center'>
                <div>
                    <FaTrash 
                    onClick={()=> removeItem(id)}
                    className='text-red-600 cursor-pointer'>
                    </FaTrash>
                    </div>
            </div>
        </div>
    );
};

export default CartItem;