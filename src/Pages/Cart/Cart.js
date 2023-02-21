import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../Components/SingleProduct/CartItem'
import { useCartContext } from '../../context/CartContext'
import FormatPrice from '../../Helper/FormatPrice'

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fees } = useCartContext()

  if (cart?.length === 0) {
    return <div className='lg:w-10/12 mx-auto lg:p-16 px-2 py-5 flex justify-center items-center min-h-[50vh]'>
      <div>
        <h1 className='text-xl text-gray-200 mb-5'>No Cart available</h1>
        <Link to='/products'>
          <button className='text-xl text-white px-6 py-2 bg-orange-600 rounded-lg'>Product Page</button>
        </Link>
      </div>
    </div>
  }

  return (
    <div className='lg:w-10/12 mx-auto lg:p-16 px-2 py-5'>
      <div className='flex text-center font-semibold mb-2'>
        <p className='lg:w-3/12 w-5/12'>Item</p>
        <p className='lg:block lg:w-2/12 hidden '>Price</p>
        <p className='lg:w-3/12 w-5/12'>Quantity</p>
        <p className='lg:block lg:w-2/12 hidden'>Subtotal</p>
        <p className='w-2/12'>Remove</p>
      </div>
      <hr />
      <div className='my-3'>
        {
          cart.map((item) => {
            return <CartItem key={item.id} item={item}></CartItem>

          })
        }
      </div>
      <div className='lg:flex justify-end lg:m-5'>
        <div className='lg:w-3/12 bg-gray-200 p-5'>
          <div className=' flex justify-between py-2'>
            <p>Sub-total:</p>
            <p><FormatPrice price={total_price}></FormatPrice></p>
          </div>
          <div className=' flex justify-between py-2'>
            <p>Shippping-fees:</p>
            <p><FormatPrice price={shipping_fees}></FormatPrice></p>
          </div>
          <hr className='my-2 border-gray-400 ' />
          <div className=' flex justify-between py-2'>
            <p>Total Price:</p>
            <p><FormatPrice price={shipping_fees + total_price}></FormatPrice></p>
          </div>
        </div>
      </div>
      <hr />
      <div className='lg:flex justify-end items-center mt-6'>
        <div></div>
        <div>
          <Link to={'/checkout'}>
            <button className='text-xl px-6 py-2 text-white bg-black mr-5'>Continue Shopping</button>
          </Link>
          <button
            onClick={clearCart}
            className='text-xl px-6 py-2 text-white bg-orange-600'>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
