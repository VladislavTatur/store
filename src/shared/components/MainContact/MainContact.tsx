import telegram from '../../assets/icons/social_network/Telegram.png';
import viber from '../../assets/icons/social_network/Viber.png';
import { contacts } from '../../constants/common.ts';

export const MainContact = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-wrap max-w-[250px] ">
        {contacts.map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </div>
      <div className="flex gap-2">
        <a href="#">
          <img src={telegram} alt="telegram" className="w-[24px] h-[24px]" />
        </a>
        <a href="#">
          <img src={viber} alt="viber" className="w-[24px] h-[24px]" />
        </a>
      </div>
    </div>
  );
};
