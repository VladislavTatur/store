import type { dataProductsType } from './dataCard.types.ts';

import { ProductCard } from '../components/ProductCard/ProductCard.tsx';

type Props = {
  products: dataProductsType[];
};

export const ListProducts = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7 lg:gap-y-6 auto-rows-fr">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
