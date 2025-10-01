import { formatPrice } from '../../utils/formatPrice.ts';
import { InformationForCard } from '../ProductCard/InformationForCard.tsx';

type Props = {
  totalSum: number;
};

export const TotalAmount = ({ totalSum }: Props) => {
  return (
    <div>
      <h3 className="pb-5 text-xl font-bold">Сумма заказа</h3>
      <InformationForCard
        title="Стоимость запчастей"
        data={formatPrice(totalSum)}
        description="BYN"
        className="font-bold"
        fontSize="text-base"
      />
    </div>
  );
};
