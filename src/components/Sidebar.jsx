import React from 'react';
import { ImagesPath } from '../imagesPath/SidebarImagesPath';

const Sidebar = () => {
    return (
            <div className='flex flex-col gap-8 w-[4%] h-screen p-4 bg-[#FCFAFF]'>
                {
                    ImagesPath.map((item, index) => (
                        <img className='w-6' key={index} src={item.src} alt="" />
                    ))
                }
            </div>
    );
};

export default Sidebar;
