import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from '../../Components/SingleProduct/ImageGallery'
import Pagination from '../../Components/SingleProduct/Pagination'
import { useProductsContext } from '../../context/AppProvider'
import FormatPrice from '../../Helper/FormatPrice'
import { TbReplace, TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import StarRating from '../../Components/SingleProduct/StarRating'
import AddToCart from '../../Components/SingleProduct/AddToCart'

const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductsContext()
  const { id } = useParams()

  const {
    id: ala,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image

  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, []);

  if (isSingleLoading) {
    return <div className='flex justify-center items-center min-h-[50vh]'>
      <span className='w-10 h-10 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
      <span className='w-8 h-8 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
      <span className='w-6 h-6 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
      <p className='text-xl font-bold ml-4'> Loading...</p>
    </div>
  }

  return (
    <div>
      <Pagination title={name}></Pagination>

      <div className='lg:w-10/12 grid lg:grid-cols-2 md:grid-cols-2 lg:gap-5 lg:my-10 mx-auto lg:px-16'>
        <div>
          <ImageGallery imgs={image}></ImageGallery>
        </div>
        <div className='px-2'>
          <h2 className='text-2xl font-semibold capitalize mb-2'>{name}</h2>
          <div className='flex mb-2'>
            <StarRating stars={stars} reviews={reviews}></StarRating>
          </div>
          <p className='mb-2 text-xl font-semibold'>MRP: {' '}
            <del>  { 
                <FormatPrice price={ price + 25000}></FormatPrice>
              }
            </del>
          </p>
          <p className='mb-2 text-xl font-semibold text-blue-400'>Deal of the day: {' '}
             {
              <FormatPrice price={price}></FormatPrice>
            }
          </p>
          <p className='text-justify mb-2'>{description}</p>
          <div className='flex justify-between lg:gap-5 pb-2 px-2 border-b-2 border-gray-200 mb-4'>
            <div className='text-center'>
              <div className='flex justify-center'>
                <TbTruckDelivery className='text-4xl'></TbTruckDelivery>
              </div>
              <p>Free Delivery</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center'>
                <TbReplace className='text-4xl'></TbReplace>
              </div>
              <p>30 Days Replacement</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center'>
                <TbTruckDelivery className='text-4xl'></TbTruckDelivery>
              </div>
              <p>Free Delivery</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center'>
                <MdSecurity className='text-4xl'></MdSecurity>
              </div>
              <p>2 Years Warranty</p>
            </div>
          </div>
          <div>
            <p className='mb-2'>Available: <b>{stock > 0 ? "In Stock" : "Not Available"}</b></p>
            <p className='mb-2'>ID: <strong>{ala}</strong></p>
            <p className='mb-2'>Brand: <strong>{company}</strong></p>
            <p className='mb-2'>Category: <strong>{category}</strong></p>
          </div>
          <hr className='w-10/12 bg-black h-1'/>
          {stock > 0 && <AddToCart product={singleProduct}></AddToCart>}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
