import classNames from 'classnames';

import { ArrowDownIcon, ArrowTopIcon } from '@/assets/icons';
import type { IClassItem } from '@/types/dashboard';

interface RightInfoBlockProps {
  data: IClassItem;
}

const RightInfoBlockItem = ({ data }: RightInfoBlockProps) => {
  const { name, quantity, trend, percent } = data;
  return (
    <div className="flex items-end justify-between rounded-2xl bg-white py-5 pl-8 pr-11 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col gap-[6px]">
        <p className="text-body-regular text-blueGray">{name}</p>
        <h3 className="text-h3-bold">{quantity} CLASSES</h3>
      </div>
      {trend !== null && (
        <div
          className={classNames(
            'flex items-center gap-1 w-[120px] h-7 px-5 rounded-3xl border mb-2',
            trend === 'increase'
              ? 'border-[#43C37833] bg-[#43C37833]'
              : 'border-red-500 bg-[#FF6968]',
          )}
        >
          {trend === 'increase' ? <ArrowTopIcon /> : <ArrowDownIcon />}
          <p className="text-body-regular">{percent}</p>
        </div>
      )}
    </div>
  );
};

export default RightInfoBlockItem;
