import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../Components/SingleProduct/CartItem'
import { useCartContext } from '../../context/CartContext'
import FormatPrice from '../../Helper/FormatPrice'

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fees } = useCartContext()

  if (cart?.length === 0) {
    return <div className='lg:w-10/12 mx-auto lg:p-16 px-2 py-5 flex justify-center items-center text-center min-h-[50vh]'>
      <div>
      <h2 className='text-2xl mb-2'>YOUR SHOPPING CART</h2>
        <h1 className='text-2xl text-gray-400 mb-5'>Your cart is currently empty.</h1>
        <div className='text-xl'>
          Continue browsing  
          <Link to='/products'>
            <button className='ml-3 underline'>here</button>
          </Link>
        </div>
      </div>
    </div>
  }

  return (
    <div className='lg:w-10/12 mx-auto lg:p-16 px-2 py-5'>
      <h2 className='text-2xl mb-5'>YOUR SHOPPING CART</h2>
      <div className='flex text-center font-semibold border-2 border-b-0 py-2'>
        <p className='lg:w-3/12 w-5/12'>Item</p>
        <p className='lg:block lg:w-2/12 hidden '>Price</p>
        <p className='lg:w-3/12 w-5/12'>Quantity</p>
        <p className='lg:block lg:w-2/12 hidden'>Subtotal</p>
        <p className='w-2/12'>Remove</p>
      </div>
      <div className='mb-3 border border-2'>
        {
          cart.map((item) => {
            return <CartItem key={item.id} item={item}></CartItem>

          })
        }
      </div>
      <div className='lg:flex justify-end'>
        <div className='lg:w-4/12 bg-gray-200 p-5'>
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
      <div className='lg:flex justify-end items-center mt-6'>
        <div></div>
        <div>
          <Link to={'/checkout'}>
            <button className='text-xl lg:px-9 px-6 py-2 text-white bg-black mr-5'>Continue Shopping</button>
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
