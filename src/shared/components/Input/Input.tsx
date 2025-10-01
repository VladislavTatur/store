import clsx from 'clsx';

import SearchIcon from '../../assets/icons/search-normal.svg?react';

type Props = {
  placeholder?: string;
  className?: string;
};

export const Input = ({ placeholder, className }: Props) => {
  return (
    <div
      className={clsx('bg-main h-11 w-full rounded-lg flex items-center justify-start', className)}
    >
      <input
        name="search"
        placeholder={placeholder}
        className=" bg-white outline-main focus:border-main transition-colors duration-200 h-[90%] w-full text-sm outline-none rounded-lg ml-0.5 p-3 flex shrink-1000"
        type="text"
      />
      <div className=" px-5 cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};
