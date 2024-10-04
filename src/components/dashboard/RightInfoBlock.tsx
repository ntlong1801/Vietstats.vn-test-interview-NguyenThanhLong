import dynamic from 'next/dynamic';

import type { IRightInfoBlockProps } from '@/types/dashboard';

const RightInfoBlockItem = dynamic(() => import('./RightInfoBlockItem'));

const RightInfoBlock = ({ classData }: IRightInfoBlockProps) => {
  return (
    <div className="flex flex-col gap-6">
      {classData.map(data => (
        <RightInfoBlockItem key={`datafake-${data.name}`} data={data} />
      ))}
    </div>
  );
};

export default RightInfoBlock;
