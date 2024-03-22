import React from 'react'
import HomeLayout from '../hoc/HomeLayout'
import Products from '../components/Products'
import ProductDetailsSidebar from '../components/ProductDetailsSidebar'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <div className='p-3 flex gap-4 lg:flex-wrap'>
      <div className='w-[80%] lg:w-full flex flex-col gap-4'>
        <div className='bg-[#fff] p-3'>
          <Filter />
        </div>
        <Products />
      </div>
      <div className='w-1/5 lg:w-full md:w-full'>
        <ProductDetailsSidebar />
      </div>
    </div>
  )
}

export default HomeLayout(Home)