'use client';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { Input } from '@/libs/material-tailwind';
import { PasswordType } from '@/types/common';

type FieldProps = {
  label?: string;
  type?: string;
  placeholder?: string;
};

type FormInputProps<T extends FieldValues> = {
  fieldProps: FieldProps;
  formProps: UseControllerProps<T>;
};

const FormInput = <T extends FieldValues>({
  fieldProps,
  formProps,
}: FormInputProps<T>) => {
  const { name } = formProps;
  const { label, type: initType, placeholder } = fieldProps;
  const { field, fieldState } = useController(formProps);
  const { error } = fieldState;

  const [type, setType] = useState(initType);

  const togglePasswordVisibility = () => {
    if (type === PasswordType.TEXT) {
      setType(PasswordType.PASSWORD);
    } else {
      setType(PasswordType.TEXT);
    }
  };
  return (
    <div className="grid gap-1">
      <label className="text-body-bold text-second" htmlFor={name}>
        {label}
      </label>
      {error && (
        <p className="-mt-2 text-body-regular text-[#FF0000]">
          {error.message}
        </p>
      )}
      <div className="relative">
        <Input
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
          id={name as string}
          {...field}
          className="!rounded-[4px] !border-[#D9D9D9] bg-white px-3 py-[5px] text-body-regular placeholder:opacity-100 focus:!border focus:!border-primary focus:!opacity-100 focus:ring-primary/10 active:!opacity-100"
          labelProps={{
            className: 'hidden',
          }}
          label={label}
          name={name as string}
          placeholder={placeholder}
          type={type}
        />
        {initType === PasswordType.PASSWORD && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
            {type === PasswordType.PASSWORD ? (
              <EyeSlashIcon
                className="size-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <EyeIcon
                className="size-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default FormInput;
