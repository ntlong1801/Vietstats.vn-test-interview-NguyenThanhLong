import dynamic from 'next/dynamic';
import type { FC, ReactNode } from 'react';

const DashboardLayout = dynamic(
  () => import('@/components/layout/DashboardLayout'),
);
type PublicWrapperProps = {
  children: ReactNode;
};
const PublicWrapper: FC<PublicWrapperProps> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default PublicWrapper;
