import dynamic from 'next/dynamic';

import {
  ClassIcon,
  StudentIcon,
  TotalRevenueIcon,
  TutorIcon,
} from '@/assets/icons';
import type { ITopInfoBlockProps } from '@/types/dashboard';

const TopInfoBlockItem = dynamic(() => import('./TopInfoBlockItem'));

const TopInfoBlock = ({ summaryData }: ITopInfoBlockProps) => {
  const ICons = [ClassIcon, TutorIcon, StudentIcon, TotalRevenueIcon];

  return (
    <div className="flex w-full gap-6">
      {summaryData.map((item, index) => (
        <TopInfoBlockItem
          key={`datafake-${item.name}`}
          data={item}
          icon={ICons?.[index]}
        />
      ))}
    </div>
  );
};

export default TopInfoBlock;
