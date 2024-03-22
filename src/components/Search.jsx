import React from 'react'
import searchIcon from '../assets/Vector.svg'

const Search = () => {
    return (
        <div className='flex items-center justify-between border border-[#DAE4EE] py-1 pr-1 pl-2 w-[30%]'>
            <div className='flex items-center gap-2'>
                <img src={searchIcon} alt="" />
                <input className='outline-none' type="text" placeholder='Search POs, ASNs, & pages etc' />
            </div>
            <div className='bg-grey-600 px-5 pt-2 pb-2 rounded-md text-12 flex gap-2'>
                <span>+K</span>
                <span>/</span>
                <span>+Shift+K</span>
            </div>
        </div>
    )
}

export default Search