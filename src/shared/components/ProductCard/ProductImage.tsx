import clsx from 'clsx';

import Liked from '../../assets/icons/menuIcons/heart.svg?react';
import RedLiked from '../../assets/icons/menuIcons/redHeart.svg?react';
import { Button } from '../Button/Button.tsx';
type Props = {
  photo: string;
  name: string;
  liked: boolean;
  onClick?: () => void;
  className?: string;
};
export const ProductImage = ({ photo, name, liked, onClick, className }: Props) => {
  return (
    <div className={clsx(' h-50 rounded-lg overflow-hidden relative', className)}>
      {photo !== '' ? (
        <img src={photo} alt={name} className="w-full h-full object-cover rounded-lg" />
      ) : (
        <div className="w-full h-full bg-black-8 rounded-lg" />
      )}
      <Button onClick={onClick} variant="ghost">
        <div className="rounded-[50%] bg-white absolute  top-2 right-2 p-2">
          {liked ? <RedLiked /> : <Liked className="w-5 h-5" />}
        </div>
      </Button>
    </div>
  );
};
