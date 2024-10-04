'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';

import loginBackground from '@/assets/images/loginBackground.png';
import loginBGSecond from '@/assets/images/loginBGSecond.png';
import { ChangeLanguage, Input } from '@/components/shared';
import { Button } from '@/libs/material-tailwind';

export default function Login() {
  const { control } = useForm({ mode: 'onChange' });
  return (
    <div className="relative h-screen w-full ">
      <Image src={loginBackground} alt="bg-login" />
      <div className="absolute left-1/2 top-1/2 h-[486px] w-[880px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border-blue-500 bg-[#F9F9F9] shadow-custom">
        <h2 className="ml-[180px] mt-[60px] text-h2-bold text-second">
          Sign In
        </h2>
        <form className="ml-[40px] mt-8 w-[384px]">
          <div className="flex flex-col gap-[20px]">
            <Input
              fieldProps={{
                label: 'User ID',
                type: 'text',
                placeholder: 'Enter your ID',
              }}
              formProps={{
                name: 'userid',
                control,
              }}
            />
            <Input
              fieldProps={{
                label: 'Password',
                type: 'password',
                placeholder: 'Enter your password',
              }}
              formProps={{
                name: 'password',
                control,
              }}
            />
          </div>
          <Button
            className="mt-[40px] flex h-10 w-full cursor-pointer items-center justify-center gap-4 rounded-[20px] bg-primary !text-body-bold text-white"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Sign In
          </Button>
        </form>
        <div className="absolute left-1/2 top-10 ">
          <ChangeLanguage />
        </div>

        <div className="absolute right-[-62px] top-[-40px] h-[642.68px] w-[435.31px] rotate-[20.64deg] bg-primary" />
        <div className="absolute bottom-[96px] right-[40px] h-[228px] w-[291px]">
          <Image src={loginBGSecond} alt="bg-second" />
        </div>
      </div>
    </div>
  );
}
