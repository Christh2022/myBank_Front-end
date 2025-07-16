import { Tab, Tabs } from '@mui/material';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { isMobile } from '../../Constant/Constant';
import { RiShieldUserLine } from 'react-icons/ri';
import { BiSolidNotification } from 'react-icons/bi';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <p>{children}</p>
//         </Box>
//       )}
//     </div>
//   );
// }

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function LeftProfilePart() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className=" flex-4/12">
      <h2 className=" text-[18px] font-bold text-white ">
        User Profile <br />
        management
      </h2>
      <div
        className={
          'mt-4 w-[calc(100%-32px)]' +
          (isMobile ? ' border-b border-[rgba(255,255,255,0.2)]' : ' ')
        }
      >
        <Tabs
          orientation={!isMobile ? 'vertical' : 'horizontal'}
          variant={isMobile ? 'scrollable' : 'fullWidth'}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            '& span.MuiTabs-indicator': {
              backgroundColor: 'rgba(252, 163, 17, 0.07)',
              width: '100%',
              cursor: 'pointer',
              height: 34,
              borderRadius: 10,
              transition: 'all 0.3s ease-in-out',
              top: isMobile ? '50%' : '',
              transform: isMobile ? 'translateY(-50%)' : '',
            },
          }}
        >
          <Tab
            label={
              <div className="flex flex-row gap-[23px] items-center cursor-pointer w-full">
                <FaUser className="text-white" />
                <span className="text-[15px] font-medium text-white ">
                  Personal info
                </span>
              </div>
            }
            sx={{
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 'medium',
              height: 34,
              '& .MuiTab-root': {
                height: '34px',
                minHeight: '34px',
                cursor: 'pointer',
              },
              '& .MuiTouchRipple-root span': {
                backgroundColor: 'transparent !important',
              },
            }}
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div className="flex flex-row gap-[23px] items-center  cursor-pointer w-full">
                <RiShieldUserLine className="text-white" />
                <span className="text-[15px] font-medium text-white ">
                  Emails & password
                </span>
              </div>
            }
            sx={{
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 'medium',
              height: 34,
              '& .MuiTab-root': {
                height: '34px',
                minHeight: '34px',
                cursor: 'pointer',
              },
              '& .MuiTouchRipple-root span': {
                backgroundColor: 'transparent !important',
              },
            }}
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div className="flex flex-row gap-[23px] items-center  cursor-pointer w-full">
                <BiSolidNotification className="text-white" />
                <span className="text-[15px] font-medium text-white ">
                  Notifications
                </span>
              </div>
            }
            sx={{
              textTransform: 'none',
              fontSize: '15px',
              fontWeight: 'medium',
              height: 34,
              '& .MuiTab-root': {
                height: '34px',
                minHeight: '34px',
                cursor: 'pointer',
              },
              '& .MuiTouchRipple-root span': {
                backgroundColor: 'transparent !important',
              },
            }}
            {...a11yProps(2)}
          />
        </Tabs>
      </div>
      
    </div>
  );
}
