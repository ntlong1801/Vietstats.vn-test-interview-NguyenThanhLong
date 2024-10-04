'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import {
  ChevronDownOrangeIcon,
  MenuICon,
  NotificationIcon,
} from '@/assets/icons';
import avatar from '@/assets/images/avatar.png';
import { Badge, Button } from '@/libs/material-tailwind';

import { ChangeLanguage } from '../shared';

type HeaderProps = {
  onChangeSidebar?: () => void;
};
const Header: FC<HeaderProps> = ({ onChangeSidebar }) => {
  return (
    <header className="flex h-20 justify-between border-b-4 border-primary p-[20px]">
      <div className="ml-2 mt-2 flex items-center gap-6">
        {onChangeSidebar && (
          <Button
            onClick={onChangeSidebar}
            variant="text"
            className="rounded-md p-2"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <MenuICon className="size-6" />
          </Button>
        )}
      </div>

      <div className="mr-2 flex items-center gap-4">
        <ChangeLanguage />
        <Badge content="2" className="p-0 text-base">
          <NotificationIcon className="cursor-pointer hover:bg-gray-900/10" />
        </Badge>

        <Button
          className="flex items-center gap-[5px] pl-4"
          variant="text"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Image
            width={40}
            height={40}
            src={avatar || ''}
            alt="User avatar"
            className="rounded-full"
          />
          <p className="text-sm normal-case dark:text-gray-300">ntlongcbl</p>
          <ChevronDownOrangeIcon />
        </Button>
      </div>
    </header>
  );
};

export default Header;
