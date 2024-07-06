import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Eye, EyeOff, Lock } from 'react-feather';
import CustomTextField from './input_components/CustomTextfield';
import { Button, Input } from 'antd';

interface CustomPasswordTextfieldProps{
    className?: string,
    onInputChange: (value: string) => void;
    value: string;
}

const CustomPasswordTextfield: React.FC<CustomPasswordTextfieldProps> = ({ className, onInputChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <Input.Password
        placeholder="Password"
        className={`w-full p-2 h-14 rounded  ${className}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)}
        prefix={<Lock className='text-primary'/>}
        iconRender={(visible) => (visible ? <Eye/> : <EyeOff/>)}
        value={value}
        />
  );
};

export default CustomPasswordTextfield;