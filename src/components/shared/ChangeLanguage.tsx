import { ChevronDownBlackIcon, EnglishLanguageIcon } from '@/assets/icons';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@/libs/material-tailwind';

const ChangeLanguage = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button
          variant="text"
          className="block rounded-full p-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="flex items-center gap-2">
            <EnglishLanguageIcon />
            <p className="text-body-bold">EN</p>
            <ChevronDownBlackIcon />
          </div>
        </Button>
      </MenuHandler>
      <MenuList
        className="top-10 w-fit min-w-28"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <MenuItem
          className="flex items-center justify-between gap-2.5 hover:!bg-primary"
          style={{}}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Việt Nam
        </MenuItem>
        <MenuItem
          className="flex items-center justify-between gap-2.5 hover:!bg-primary"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ChangeLanguage;
