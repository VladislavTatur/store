import { Wrapper } from '../shared/components/wrapper/Wrapper.tsx';
import { dataProducts } from '../shared/ListProducts/dataCard.ts';
import { ListProducts } from '../shared/ListProducts/ListProducts.tsx';

export const ShopHome = () => {
  return (
    <Wrapper className=" lg:py-7">
      <h2 className="text-4xl font-bold pb-7">Популярные товары</h2>
      <ListProducts products={dataProducts} />
    </Wrapper>
  );
};
