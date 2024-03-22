import React from 'react'
import useIcon from '../assets/Frame.svg'
import slideIcon from '../assets/Group 289570.svg'
import slideIconRev from '../assets/Group 289570 (1).svg'
import DiscountIcon from '../assets/Frame (1).png'

const ProductDetailsSidebar = () => {
  return (
    <div className='bg-[#fff] p-3 flex flex-col gap-3'>
      <div className='flex flex-col gap-3 border-b pb-4 border-[#EEEFEF]'>
        <div className='flex gap-2 bg-grey-700 p-2 items-start'>
          <img src={useIcon} alt="" />
          <div>
            <p className='text-10 leading-none'>Customer</p>
            <span className='text-12 text-blue-600 leading-none font-semibold'>SRG India Pvt Ltd</span>
          </div>
        </div>
        <div className='flex gap-2 bg-grey-700 p-2 items-start'>
          <img src={slideIcon} alt="" />
          <div>
            <p className='text-10 leading-none'>Delivery Location</p>
            <span className='text-12 text-blue-600 leading-none font-semibold'>Gurugram-017838</span>
          </div>
        </div>
        <div className='flex gap-2 bg-grey-700 p-2 items-start'>
          <img src={slideIconRev} alt="" />
          <div>
            <p className='text-10 leading-none'>Dispatch Location</p>
            <span className='text-12 text-blue-600 leading-none font-semibold'>Gurugram-017838</span>
          </div>
        </div>
        <div className=' bg-grey-700 p-2 text-center'>
          <button className='text-12'>Show More</button>
        </div>
      </div>
      <div className='flex flex-col gap-3 border-b pb-4 border-[#EEEFEF]'>
        <p className='text-12 text-blue-600 font-semibold'>Summary</p>
        <div className='flex gap-2 bg-grey-400 p-2 items-start'>
          <span className='text-12 text-blue-600 leading-none font-semibold'>#SO_DRAFT_00000017_2024</span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-11 text-[#7E8084]'>Total Quantity</p>
          <span className='text-[13px] text-[#7E8084] font-medium'>21</span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-11 text-[#7E8084]'>Total Items</p>
          <span className='text-[13px] text-[#7E8084] font-medium'>7</span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-11 text-[#7E8084]'>Order Quantity</p>
          <span className='text-[13px] text-[#7E8084] font-medium'>21</span>
        </div>

        <div className='flex gap-2 bg-grey-700 px-2 py-4 rounded-md items-start justify-between'>
          <p className='text-11 leading-none'>Total Bag Price</p>
          <span className='text-12 text-blue-600 leading-none font-semibold'>₹ 23031.808</span>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-12 text-blue-600 font-semibold'>Price Breakup</p>
        <div className='flex items-center justify-between'>
          <p className='text-11 text-[#7E8084]'>IGST</p>
          <span className='text-[13px] text-[#7E8084] font-medium'>₹ 230.80</span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-11 text-[#7E8084]'>CGST</p>
          <span className='text-[13px] text-[#7E8084] font-medium'>₹ 230.80</span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-11 text-[#7E8084]'>SGST</p>
          <span className='text-[13px] text-[#7E8084] font-medium'>₹ 230.80</span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-11 text-[#7E8084]'>CESS</p>
          <span className='text-[13px] text-[#7E8084] font-medium'>₹ 0.00</span>
        </div>

        <div className='flex gap-2 bg-grey-700 px-2 py-4 rounded-md items-start justify-between'>
          <div className='flex items-center gap-2'>
            <img src={DiscountIcon} alt="" />
            <p className='text-11 text-[#52924C] leading-none'>Discount</p>
          </div>
          <span className='text-12 text-[#52924C] leading-none font-semibold'>₹ 690.00</span>
        </div>
        <div className='flex gap-2 bg-grey-700 px-2 py-4 rounded-md items-start justify-between'>
          <p className='text-11 leading-none'>Total Bag Price</p>
          <span className='text-12 text-blue-600 leading-none font-semibold'>₹ 23031.808</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsSidebar