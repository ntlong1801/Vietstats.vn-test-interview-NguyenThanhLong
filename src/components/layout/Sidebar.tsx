'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React, { useState } from 'react';

import { CustomNextLink } from '@/components/shared';
import { MENU_LIST } from '@/constants/menu';
import {
  Accordion,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@/libs/material-tailwind';

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ isOpen = false }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(0);

  const handleOpen = (value: number) => {
    setMenuOpen(value === menuOpen ? 0 : value);
  };

  return (
    <div
      className={classNames(
        'flex h-full w-[256px] flex-col justify-between bg-white transition-all duration-300 ',
        isOpen ? 'px-4' : '!w-[60px] overflow-x-hidden px-0',
      )}
    >
      <div className="flex flex-col py-2">
        <List
          className="p-0 pr-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {MENU_LIST.map((menuItem, index) => {
            const { icon: PrefixIcon } = menuItem;
            const isActive = menuItem.route === `/${pathname.split('/')[1]}`;

            return (
              <CustomNextLink key={menuItem.id} href={menuItem.route}>
                <Accordion
                  open={menuOpen === index}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItem
                    className={classNames(
                      'group py-0 hover:bg-primary hover:bg-opacity-20',
                      {
                        'bg-primary': isActive,
                      },
                    )}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index)}
                      className="border-b-0 px-1 py-2"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <ListItemPrefix
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {PrefixIcon && (
                          <PrefixIcon
                            className={`size-6 ${isActive ? 'text-white' : 'text-blueGray'} group-hover:text-white`}
                          />
                        )}
                      </ListItemPrefix>

                      {isOpen && (
                        <Typography
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          className={`mr-auto !text-body-medium ${isActive ? '!font-semibold text-white' : 'text-blueGray'} group-hover:text-white`}
                        >
                          {menuItem.title}
                        </Typography>
                      )}
                    </AccordionHeader>
                  </ListItem>
                </Accordion>
              </CustomNextLink>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
