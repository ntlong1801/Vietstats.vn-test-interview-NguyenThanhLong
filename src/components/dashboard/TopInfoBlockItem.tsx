import type { ISummaryItem } from '@/types/dashboard';

interface TopInfoBlockITemProps {
  data: ISummaryItem;
  icon: any;
}

const TopInfoBlockItem = ({ data, icon: Icon }: TopInfoBlockITemProps) => {
  const { backgroundColor, name, quantity } = data;
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl bg-white py-4 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.2)]">
      <div className="rounded-full p-3" style={{ background: backgroundColor }}>
        <Icon />
      </div>
      <h2 className="text-h2-bold">
        {name === 'Total Revenue' && '$'}
        {quantity}
      </h2>
      <p className="text-body-regular text-blueGray">{name}</p>
    </div>
  );
};

export default TopInfoBlockItem;
