import { useEffect, useState } from 'react';

import { Breadcrumbs } from '../shared/components/Breadcrumbs/Breadcrumbs.tsx';
import { Wrapper } from '../shared/components/wrapper/Wrapper.tsx';
import { dataProducts } from '../shared/ListProducts/dataCard.ts';
import { ListProducts } from '../shared/ListProducts/ListProducts.tsx';

type LikedItem = {
  id: number;
};

export const Liked = () => {
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const likedProduct = dataProducts.filter((item) => likedIds.includes(item.id));

  useEffect(() => {
    const updateLikedIds = () => {
      const likedProduct = localStorage.getItem('liked');

      if (likedProduct) {
        try {
          const data = JSON.parse(likedProduct);
          const items = Object.values(data) as LikedItem[];
          const ids = items.map((item: LikedItem) => item.id);
          setLikedIds(ids);
        } catch (error) {
          console.error('Ошибка парсинга liked:', error);
          setLikedIds([]);
        }
      } else {
        setLikedIds([]);
      }
    };

    updateLikedIds();

    const handleLikedUpdate = () => {
      updateLikedIds();
    };

    window.addEventListener('likedUpdated', handleLikedUpdate);

    return () => {
      window.removeEventListener('likedUpdated', handleLikedUpdate);
    };
  }, []);

  return (
    <Wrapper>
      <Breadcrumbs />
      <h1 className="text-4xl mb-6 font-bold">Избранное</h1>
      {likedIds.length === 0 ? (
        <div className="p-6 flex justify-center">
          <h2 className="text-3xl font-bold">Нет избранных товаров!</h2>
        </div>
      ) : (
        <ListProducts products={likedProduct} />
      )}
    </Wrapper>
  );
};
