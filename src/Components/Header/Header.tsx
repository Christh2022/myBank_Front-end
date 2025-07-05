import React from 'react';
import { MobileHeader } from './MobileHeader';
import profile from '../../assets/profile.jpg';
import { Icons } from './Icons';
import Search from './Search';
export const Header = () => {
  const profileData = {
    img: profile,
    name: 'Ethan Raynolds',
  };
  return (
    <div className="flex flex-row fixed top-8 left-3 lg:left-[110px] right-5">
      <div className='flex flex-1 xl:justify-between items-center w-[100%]'>
        <div>
          <Search/>
        </div>
        <div className='flex xl:flex-row flex-row-reverse flex-1 items-center xl:justify-end mr-14 lg:mr-0 justify-between gap-2.5 '>
          <Icons/>
          <MobileHeader {...{ profileData }} />
        </div>
      </div>
    </div>
  );
};
