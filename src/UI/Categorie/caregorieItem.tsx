import React from 'react';
import type { Category } from '../../utils/Types';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { transactionCategories } from '../../utils/IconCategory';

export const CategorieItem = ({ category }: { category: Category }) => {
  const data = transactionCategories.filter(
    (item) => item.label === category.icon_name
  );
  const Icon = data[0].icon;
  return (
    <div className=" flex flex-row items-center justify-start px-3.5 h-[80px] gap-3.5 bg-[rgba(255,255,255,0.1)] rounded-[6px]  ">
      <span className=" w-[65px] h-[65px] bg-[rgba(252,163,17,0.28)] flex justify-center rounded-full text-[30px] items-center ">
        <Icon className="" />
      </span>
      <div className=" flex flex-col gap-1 ">
        <h6 className="font-medium text-[15px]">
          {category.title.length > 20
            ? `${category.title.slice(0, 20)}...`
            : category.title}
        </h6>
        <div className="text-[#FFFFFF66] text-[23px] flex flex-row gap-1.5 ">
          <MdDelete className="cursor-pointer hover:text-[#fca311]  " />
          <FaEdit className="cursor-pointer hover:text-[#fca311]  " />
        </div>
      </div>
    </div>
  );
};
