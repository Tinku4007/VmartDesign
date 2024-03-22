import React from 'react'
import BrandImg from '../assets/Rectangle 755.png'
import DeletIcon from '../assets/Group 289599.png'
import EditIcon from '../assets/Frame.png'
import { ProductData } from '../data.js/ProductData'

const Products = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className='flex justify-between flex-wrap gap-4'>
        {
          ProductData.map((item, i) => (
            <div key={i} className='w-[18.7%] box-product flex flex-col '>
              <div className='relative'>
                <img className='w-full' src={BrandImg} alt="" />
                <span className='absolute w-5 h-5 bg-[#fff] top-2 left-2 border-2 border-[#C7D3DF]'></span>
                <span className='text-9 text-[#fff] bg-blue-600 p-1 rounded-md absolute right-1 top-1'>10% Off</span>
              </div>
              <div className='bg-[#fff] p-3 flex flex-col gap-2'>
                <div className='flex items-center gap-2 text-9'>
                  <div className='border-yellow-500 border-[1.3px] rounded-sm flex gap-1 items-center py-[2px] px-1'>
                    <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                    <p>{item.color}</p>
                  </div>
                  <div className='border border-[#E3E4E7] rounded-sm py-[2px] px-1'>
                    <p>{item.multipler}</p>
                  </div>
                </div>
                <div>
                  <p className='text-9 font-normal text-grey-300'>Item Name</p>
                  <h5 className='text-12 text-blue-600'>{item.itemName}</h5>
                  <p className='text-9 font-normal text-grey-300 pt-1'>Design Number</p>
                  <p className='text-11 text-blue-600 font-normal'>{item.designNumber}</p>
                </div>
                <div className='text-9 flex gap-3'>
                  <span className='bg-blue-100 p-[2px] px-1'>{item.size}</span>
                  <span className='bg-blue-100 p-[2px] px-1'>{item.inStock}</span>
                </div>
                <div>
                  <p className='text-12 text-blue-600'>{item.price} <del className='text-12'>{item.delPrice}</del></p>
                </div>
                <div className='flex items-center justify-between'>
                  <img className='border p-1 border-[#DDDEDE]' src={DeletIcon} alt="" />
                  <div className='bg-grey-400 py-2 px-2 flex gap-3'>
                    <p className='text-11 font-bold'>XL <span className='bg-[#fff] font-medium py-1 px-2 rounded-3xl ml-2'>+5 More</span></p>
                    <img className='border-l pl-2 border-[#DDDEDE] object-contain' src={EditIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>

  )
}

export default Products