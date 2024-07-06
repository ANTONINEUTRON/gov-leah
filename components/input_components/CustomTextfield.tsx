"use client"
import { Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Mail } from 'react-feather';
import TextArea from 'antd/es/input/TextArea';

interface CustomTextFieldProps {
    icon?: ReactNode;
    hint?: string;
    onInputChange: (value: string) => void;
    className?: string;
    multiline?: boolean;
    inputType?: string;
    value?: string;
  }

const CustomTextField: React.FC<CustomTextFieldProps> = ({ icon, hint, onInputChange,className, multiline, inputType, value }) => {
  
  return (
    <div className='w-full'>
      {
        multiline ?
        (
          <div>
            <TextArea 
              rows={4}
              placeholder={hint}
              className={`w-full h-14 rounded mt-2 pt-4 ${className || ''}`}
              autoSize={{
                minRows: 3,
                maxRows: 8,
              }}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                onInputChange(e.target.value)
              }}
              value={value}
              />
          </div>
        ) 
        : (
          <div>
              <Input
                type={inputType || 'text'}
                className={`w-full p-2 h-14 rounded  ${className}`}
                placeholder={hint}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  onInputChange(e.target.value)
                }}
                prefix={icon}
                size={"large"}
                value={value}
                />
            
          </div>
        )
      }
    </div>
        
  );
};

export default CustomTextField;