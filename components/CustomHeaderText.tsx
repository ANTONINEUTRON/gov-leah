import { Montserrat } from 'next/font/google';
import React from 'react';


const montserrat = Montserrat({subsets: ['latin']})

interface CustomHeaderTextProps {
  text: string;
  className?: string;
}

const CustomHeaderText: React.FC<CustomHeaderTextProps> = ({ text, className }) => {
  return (
    <h1 className={`${montserrat.className} text-xl md:text-3xl font-semibold text-primary ${className || ''}`}>{text}</h1>
  );
};

export default CustomHeaderText;
