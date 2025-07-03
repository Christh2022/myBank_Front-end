import { HiHome } from 'react-icons/hi';
import logo from './../../assets/logo.svg';
import { NavLink } from 'react-router';
import { BsFillGridFill } from 'react-icons/bs';
import { FaChartBar } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa6';
import { Badge } from '@mui/material';
import { IoSettingsOutline } from 'react-icons/io5';
import { ImExit } from 'react-icons/im';
export default function Nav() {
  const navigationTab = [
    {
      path: '/home',
      Icon: <HiHome size={35} />,
    },
    {
      path: '/category',
      Icon: <BsFillGridFill className='xl:text-[30px] lg:text-[25px] md:text-[20px]' />,
    },
    {
      path: '/transactions',
      Icon: <FaChartBar className='xl:text-[30px] lg:text-[25px] md:text-[20px]' />,
    },
    {
      path: '/chat',
      Icon: (
        <span>
          <Badge
            color="secondary"
            badgeContent=" "
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{
              '& .MuiBadge-badge': {
                width: 10, // ✅ Largeur du badge
                height: 10, // ✅ Hauteur du badge
                minWidth: 0,
                boxShadow: '0px 0px 4px 1px #FCA311',
                backgroundColor: '#FCA311', // ✅ couleur du badge
                color: '#FCA311', // ✅ couleur du texte du badge (inutile ici car badgeContent = " ")
              },
            }}
          >
            <MdEmail className='xl:text-[30px] lg:text-[25px] md:text-[20px]' />
          </Badge>
        </span>
      ),
    },
    {
      path: '/profile',
      Icon: <FaUser className='xl:text-[30px] lg:text-[25px] md:text-[20px]' />,
    },
  ];

  const footerTab = [
    {
      path: '/setting',
      Icon: <IoSettingsOutline className='xl:text-[30px] lg:text-[25px] md:text-[20px]' />,
    },
    {
      path: '/Logout',
      Icon: <ImExit  className='xl:text-[30px] lg:text-[25px] md:text-[20px]' />,
    },
  ];

  return (
    <div className="absolute z-[999] top-0 bottom-0 left-5 flex items-center  ">
      <div
        style={{
          boxShadow: '0 0 4px 0 rgba(255,255,255,0.1)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)', // pour Safari
        }}
        className=" hidden lg:flex w-[78px] h-[95%] bg-[#FFFFFF0D] rounded-[100px]  flex-col justify-center"
      >
        <div className=" flex flex-col flex-1/12 items-center justify-center gap-[19px]">
          <img src={logo} alt="logo" />
          <div className="w-[60px] h-[1px] bg-[#A2A2A2] " />
        </div>

        <div className="flex flex-col flex-8/12 items-center 2xl:gap-[30px] xl:gap-[25px] lg:gap-[20px] ">
          {navigationTab.map((nav, index) => (
            <NavLink
              to={nav.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center justify-center ${isActive ? 'white bg-[#FCA311] rounded-[10px] lg:w-[45px] lg:h-[45px]   2xl:w-[50px] 2xl:h-[50px] ' : 'text-[#FFFFFFB3]'}`
              }
            >
              {nav.Icon}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col flex-2/12  2xl:gap-[30px] xl:gap-[25px] lg:gap-[20px]  items-center justify-end pb-10 gap-[37px]">
          {footerTab.map((nav, index) => (
            <NavLink
              to={nav.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center justify-center ${isActive ? 'white bg-[#FCA311] rounded-[10px] lg:w-[45px] lg:h-[45px]   2xl:w-[50px] 2xl:h-[50px] ' : 'text-[#FFFFFFB3]'}`
              }
            >
              {nav.Icon}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
