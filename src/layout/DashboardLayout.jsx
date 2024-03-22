import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-[96%] md:w-[calc(100%-60px)]'>
                <div className='w-full'>
                    <Header />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout