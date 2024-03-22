import React from 'react'
import searchIcon from '../assets/Vector.svg'
import helpIcon from '../assets/help.svg'
import uploadIcon from '../assets/upload.svg'
import flexTitleIcon from '../assets/file-text-line 1.svg'
import notificatiom from '../assets/notification-line 1.svg'
import userIcon from '../assets/profile-placeholder.svg'
import Home from '../assets/home (1).svg'
import Search from './Search'

const Header = () => {
    return (
        <div className='flex flex-col gap-2 bg-[#fff]'>
            <div className='flex justify-between items-center w-full py-2 px-3 border-b border-grey-100'>
                <Search />
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-6 border-r pr-6 border-[#B7C6DE]'>
                        <img src={helpIcon} alt="" />
                        <img src={uploadIcon} alt="" />
                        <div className='relative'>
                            <span className='absolute -top-1 -right-3 rounded-sm bg-[#5D5FEF] px-1 text-[#fff] text-[10px] font-bold'>20</span>
                            <img src={flexTitleIcon} alt="" />
                        </div>
                        <div className='relative'>
                            <span className='absolute -top-1 -right-3 rounded-sm bg-[#5D5FEF] px-1 text-[#fff] text-[10px] font-bold'>120</span>
                            <img src={notificatiom} alt="" />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <img src={userIcon} alt="" />
                        <div>
                            <p className='text-14 leading-none'>Vmart-Procurement Team</p>
                            <span className='text-12 leading-none'>Ashish Kumar Singla</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between pb-2 px-3'>
                <div className='flex items-center gap-2 text-12'>
                    <div className='flex items-center gap-2 pr-2 #1F2937'>
                        <img src={Home} alt="" />
                        <p>Home</p>
                        <span>/</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='border border-grey-200 rounded-md py-1 px-3'>
                            <select name="" id="" className='outline-none'>
                                <option value="" selected>Sales Order</option>
                                <option value="">test</option>
                                <option value="">test</option>
                                <option value="">test</option>
                            </select>
                        </div>
                        <span>/</span>
                    </div>
                    <div>
                        <p className='text-12 text-blue-900'>
                            Product Catalogue
                        </p>
                    </div>
                </div>
                <div className='bg-blue-500 text-[#fff] py-2 px-8 text-12 font-semibold'>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Header