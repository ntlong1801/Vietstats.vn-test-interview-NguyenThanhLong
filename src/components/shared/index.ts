import dynamic from 'next/dynamic';

export const Input = dynamic(() => import('./Input'));
export const ChangeLanguage = dynamic(() => import('./ChangeLanguage'));
export const CustomNextLink = dynamic(() => import('./CustomNextLink'));
export const TopInfoBlock = dynamic(() => import('../dashboard/TopInfoBlock'));
