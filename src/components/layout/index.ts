import dynamic from 'next/dynamic';

export const Header = dynamic(() => import('./Header'));
export const Sidebar = dynamic(() => import('./Sidebar'));
