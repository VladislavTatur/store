import { useState } from 'react';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/icons/logo.svg?react';
import Bag from '../../assets/icons/menuIcons/bag.svg?react';
import Garage from '../../assets/icons/menuIcons/garage.svg?react';
import Like from '../../assets/icons/menuIcons/heart.svg?react';
import MenuIcon from '../../assets/icons/menuIcons/Menu_Icons_UIA.svg?react';
import User from '../../assets/icons/menuIcons/user.svg?react';
import { addressData, headerMenuLinks } from '../../constants/common.ts';
import { ROUTES } from '../../constants/links.ts';
import { Button } from '../Button/Button.tsx';
import { Input } from '../Input/Input.tsx';
import { MainContact } from '../MainContact/MainContact.tsx';
import { BasketModal } from '../modal/BasketModal.tsx';
import { Select } from '../Select/Select.tsx';
import { Wrapper } from '../wrapper/Wrapper.tsx';

const iconButtonClass = 'flex flex-col justify-center items-center';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickBagHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const onCloseHandler = () => {
    setIsOpen(false);
  };
  return (
    <header className="border-b-[1px] border-separator sticky top-0 z-10 bg-white ">
      <BasketModal isOpen={isOpen} onClose={onCloseHandler} />
      <Wrapper className="py-2 lg:pt-4 lg:pb-3">
        <div className="hidden lg:flex justify-between items-center pb-5 ">
          <Select data={addressData} />
          <MainContact />
          <div className="flex gap-[24px] items-center">
            <Select data={headerMenuLinks} defaultValue="Клиентам" className="text-right" />
            <NavLink to="#" className="cursor-pointer">
              Контакты
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-6 ">
            <NavLink
              to={ROUTES.main}
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  lg:static lg:translate-x-0 lg:translate-y-0 cursor-pointer"
            >
              <Logo className="w-25 h-7 lg:w-28 lg:h-11.5" />
            </NavLink>
            <Button variant="ghost" className="flex items-center text-base gap-2">
              <MenuIcon className="w-7.5 h-6 lg: " />
              <span className="hidden lg:block">Каталог</span>
            </Button>
          </div>
          <div className="hidden lg:flex flex-1 px-6">
            <Input placeholder="Введите код или название товара" />
          </div>
          <div className="flex gap-4 ">
            <Button variant="ghost" className={iconButtonClass}>
              <Garage />
              <span className="hidden lg:block">Гараж</span>
            </Button>
            <NavLink
              to={ROUTES.liked}
              className={clsx(iconButtonClass, 'hover:text-black/80 active:text-black/60')}
            >
              <Like />
              <span className="hidden lg:block">Избранное</span>
            </NavLink>
            <Button variant="ghost" className={iconButtonClass} onClick={clickBagHandler}>
              <Bag />
              <span className="hidden lg:block">Корзина</span>
            </Button>
            <Button variant="ghost" className={`${iconButtonClass} hidden lg:flex`}>
              <User />
              <span>Войти</span>
            </Button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
