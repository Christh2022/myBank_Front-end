import React from 'react';
import ButtonSave from '../../UI/Profile/ButtonSave';
import { Avatar, Badge, styled } from '@mui/material';
import profile from '../../assets/profile.jpg';
import { IoIosCamera } from 'react-icons/io';
import CountrySelect from '../../UI/Profile/ChooseCountry';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#1B1919',
    color: '#1B1919',
    width: 30,
    height: 30,
    borderRadius: '50%',
    cursor: 'pointer',
  },
}));

export default function RightProfilePart() {
  const [image, setImage] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const triggerFileSelect = () => {
    inputRef.current?.click();
  };

  return (
    <div className=" flex-8/12 ">
      <div className="flex flex-row w-[calc(100%-32px)] items-center justify-between">
        <h2 className=" text-[21px] font-bold text-white ">
          Personal information
        </h2>
        <ButtonSave />
      </div>
      <div className="border-b border-t mt-5 border-[rgba(255,255,255,0.2)] py-6 w-[calc(100%-32px)] ">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <span className="text-[25px] text-white">
              <IoIosCamera />
            </span>
          }
          onClick={triggerFileSelect}
        >
          <Avatar
            sx={{
              bgcolor: '#fca311',
              width: {
                xs: 45, // petite taille
                sm: 60, // small ≥600px
                md: 80, // medium ≥900px
                lg: 100, // large ≥1200px
              },
              height: {
                xs: 45,
                sm: 60,
                md: 80,
                lg: 100,
              },
            }}
            alt="Remy Sharp"
            src={image ?? profile}
            className=" w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
          />
        </StyledBadge>
      </div>

      <div className="mt-6 w-[calc(100%-32px)] grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col">
          <label className="text-[15px] text-white font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] font-medium  py-2 px-3 outline-0 text-white focus:outline-0 focus:ring-1 focus:ring-[#fca311] focus:border-[#fca311] rounded-[18px]"
            placeholder="Enter your first name"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[15px] text-white font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] font-medium  py-2 px-3 outline-0 text-white focus:outline-0 focus:ring-1 focus:ring-[#fca311] focus:border-[#fca311] rounded-[18px]"
            placeholder="Enter your last name"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[15px] text-[rgba(255,255,255,0.3)] font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] font-medium  py-2 px-3 outline-0 text-[rgba(255,255,255,0.3)] focus:outline-0 focus:ring-1 focus:ring-[#fca311] focus:border-[#fca311] rounded-[18px]"
            placeholder="Enter your email"
            value="arafat.nayeem@gmail.com"
            disabled
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[15px] text-white font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] font-medium  py-2 px-3 outline-0 text-white focus:outline-0 focus:ring-1 focus:ring-[#fca311] focus:border-[#fca311] rounded-[18px]"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] text-white font-medium mb-2">
            Country
          </label>
          <CountrySelect />
        </div>
        <div className="flex flex-col">
          <label className="text-[15px] text-white font-medium mb-2">
            City
          </label>
          <input
            type="text"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] font-medium  py-2 px-3 outline-0 text-white focus:outline-0 focus:ring-1 focus:ring-[#fca311] focus:border-[#fca311] rounded-[18px]"
            placeholder="Enter your city"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] text-white font-medium mb-2">
            Zip Code
          </label>
          <input
            type="text"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] font-medium  py-2 px-3 outline-0 text-white focus:outline-0 focus:ring-1 focus:ring-[#fca311] focus:border-[#fca311] rounded-[18px]"
            placeholder="Enter your zip code"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[15px] text-white font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] font-medium  py-2 px-3 outline-0 text-white focus:outline-0 focus:ring-1 focus:ring-[#fca311] focus:border-[#fca311] rounded-[18px]"
            placeholder="Enter your address"
          />
        </div>
      </div>
    </div>
  );
}
