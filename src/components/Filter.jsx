import React from 'react'
import searchIcon from '../assets/Icon.svg'
import GridIcon from '../assets/grid.png'
import ListIcon from '../assets/list.svg'
import GridTwo from '../assets/Frame (2).svg'
import AddIcon from '../assets/Date Range.svg'
import ScaneIcon from '../assets/Frame (3).svg'
import Frame4 from '../assets/Frame (4).svg'


const Filter = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <div className='flex items-center gap-2 border border-[#DAE4EE] py-1 pr-1 pl-2'>
                    <img src={searchIcon} alt="" />
                    <input className='outline-none' type="text" placeholder='Search Products' />
                </div>
                <div className='flex'>
                    <div className='bg-blue-600 h-full w-8 flex items-center justify-center'>
                        <img src={GridIcon} alt="" />
                    </div>
                    <div className='bg-[#F4F4F4] h-full w-8 flex items-center justify-center'>
                        <img src={ListIcon} alt="" />
                    </div>
                    <div className='bg-[#F4F4F4] h-full w-8 flex items-center justify-center'>
                        <img src={GridTwo} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-12 p-2 text-[#7E8084] border border-[#DAE4EE] whitespace-nowrap'>Add Remarks  </p>
                <p className='text-12 p-2 text-[#7E8084] border border-[#DAE4EE] whitespace-nowrap'>Show by : <span className='text-blue-600'> Sizes</span> </p>
                <img className='h-full' src={AddIcon} alt="" />
            </div>
            <div className='flex items-center gap-2 border border-[#DAE4EE] py-1 pr-1 pl-2'>
                <img src={ScaneIcon} alt="" />
                <input className='outline-none' type="text" placeholder='Search Products' />
                <div className='flex gap-2'>
                    <select className='text-12 text-blue-600 bg-grey-400 p-1 px-3 outline-none font-semibold'>
                        <option value="" selected> Design No</option>
                        <option value="" selected> Design No</option>
                        <option value="" selected> Design No</option>
                    </select>
                    <img className='border-l pl-2 border-grey-400' src={Frame4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Filter