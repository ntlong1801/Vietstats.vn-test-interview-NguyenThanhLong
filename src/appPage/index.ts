import dynamic from 'next/dynamic';

export const DashboardPage = dynamic(() => import('./DashboardPage'));
export const LoginPage = dynamic(() => import('./LoginPage'));
