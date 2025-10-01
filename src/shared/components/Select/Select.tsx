import clsx from 'clsx';

type Props = {
  data: string[];
  defaultValue?: string;
  className?: string;
};

export const Select = ({ data, defaultValue = '', className }: Props) => {
  return (
    <form>
      <select
        id="menuLinks"
        defaultValue=""
        className={clsx(' outline-none focus:outline-none ', className)}
      >
        <option value="" disabled hidden>
          {defaultValue ? defaultValue : data[0]}
        </option>
        {data.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};
