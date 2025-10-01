type Props = {
  title: string;
  data: string | number;
  description?: string;
  className?: string;
  fontSize?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl';
};

export const InformationForCard = ({
  data,
  title,
  description,
  className,
  fontSize = 'text-sm',
}: Props) => {
  return (
    <p className={`flex justify-between ${fontSize}`}>
      <span className="text-black-60">{title}</span>
      <span className="flex flex-1 border-b border-dashed mx-1"></span>
      <span className={className}>
        {data} {description}
      </span>
    </p>
  );
};
