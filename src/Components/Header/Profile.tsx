import { Avatar } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
import { DropDownMenu } from './DoprDownMenu';

export default function Profile({
  profileData,
}: {
  profileData: { name: string; img: string };
}) {
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: '#FCA311',
        width: 50,
        height: 50,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className="flex flex-row gap-[11px] items-center justify-center ">
      {profileData && profileData.img.length < 0 ? (
        <Avatar
          alt={profileData.name}
          src={profileData.img}
          sx={{ width: 50, height: 50 }}
        />
      ) : (
        <Avatar {...stringAvatar(profileData.name)} />
      )}
      <div className="flex flex-col gap-0 ">
        <h6 className="font-semibold text-[15px] text-[#ffffff]">
          {profileData.name}
        </h6>
        <span className="font-semibold text-[15px] text-[#FFFFFF80]">
          @{profileData.name.replace(' ', '_').toLocaleLowerCase()}
        </span>
      </div>
      <span className="ml-3 cursor-pointer text-[20px] items-center justify-center">
        <DropDownMenu {...{ FaAngleDown }} />
      </span>
    </div>
  );
}
