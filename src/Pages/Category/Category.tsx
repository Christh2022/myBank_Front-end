import { IoMdSearch } from 'react-icons/io';
import ControlledStates from '../../Components/Inputs/ControlledStates';
import PageWithLoader from '../../Components/PageWithLoader/PageWithLoader';
import { CategorieItem } from '../../UI/Categorie/caregorieItem';
import CustomIcon from '../../UI/Icon/CustomIcon';

export default function Category() {
  return (
    <PageWithLoader>
      <div className="flex flex-row justify-between fixed top-28 left-6  lg:left-[110px] right-5">
        <div className="bg-[#1B1919] rounded-[20px] h-[100%] min-h-[600px] w-[73%]">
          <div className="flex flex-row items-center justify-between px-6 py-4">
            <h3 className="text-[21px] font-bold">My Categories</h3>
            <div className="flex flex-row gap-[12px] ">
              <div className="h-[24px] border px-3 border-[#FFFFFF97] flex items-center justify-between h-[24px] w-[180px] rounded-[15px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="font-semibold w-[80%] text-[15px] "
                />
                <IoMdSearch size={15} className="text-white cursor-pointer" />
              </div>
              <div className="bg-[#fca311] rounded-[5px] h-[24px] w-[103px] flex flex-row items-center justify-center gap-1 cursor-pointer">
                <CustomIcon />
                <p className="font-semibold text-[13px]">Filter</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-4 px-6">
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
          </div>
        </div>
        <div className="w-[25%] px-10 py-6 flex flex-col gap-5 bg-[#1B1919] rounded-[20px] h-[536]">
          <h3 className="text-[21px] font-bold">Add Category</h3>
          <form
            method="post"
            onSubmit={() => {}}
            className="flex flex-col gap-[20px]"
          >
            <div className="flex flex-col gap-[17px]">
              <label htmlFor="name" className="font-semibold text-[16px]">
                Name<span className="text-[#FCA113]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Category's Name"
                name="name"
                className="px-3 border font-semibold border-[#FFFFFF97] outline-0 focus:border-[#fca311] h-[50px] rounded-[3px] "
              />
            </div>
            <div className="flex flex-col gap-[17px]">
              <label htmlFor="icon" className="font-semibold text-[16px]">
                Icon<span className="text-[#FCA113]">*</span>
              </label>
              <ControlledStates />
            </div>
            <div className="flex flex-col gap-[17px]">
              <label htmlFor="name" className="font-semibold text-[16px]">
                Description (optional)
              </label>
              <textarea
                placeholder="Add a description"
                className="text-[#FFFFFF97] font-semibold px-3 border border-[#FFFFFF97] pt-2  h-[152px] rounded-[3px] resize-none outline-0 focus:border-[#fca311]  "
              />
            </div>
            <button
              type="submit"
              className="text-[20px] font-bold rounded-[3px] bg-[#fca311] w-full text-center h-[50px] mt-5 "
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </PageWithLoader>
  );
}
