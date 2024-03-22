import React from 'react';
import { ImagesPath } from '../imagesPath/SidebarImagesPath';

const Sidebar = () => {
    return (
            <div className='flex flex-col gap-8 w-[60px] h-screen p-4 bg-[#FCFAFF]'>
                {
                    ImagesPath.map((item, index) => (
                        <img className='w-[24px]' key={index} src={item.src} alt="" />
                    ))
                }
            </div>
    );
};

export default Sidebar;
