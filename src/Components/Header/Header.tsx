import React from 'react';
import { MobileHeader } from './MobileHeader';
import profile from '../../assets/profile.jpg';
export const Header = () => {
  const profileData = {
    img: profile,
    name: 'Ethan Raynolds',
  };
  return (
    <div className="flex flex-row fixed top-6 left-3 lg:left-[250px] ">
      <MobileHeader {...{ profileData }} />
    </div>
  );
};
