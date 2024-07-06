import { Spin } from "antd";
import { title } from "process";
import React, { ReactNode } from "react"

interface CustomButtonProps{
    className?: string;
    onButtonClick?: () => void;
    children: ReactNode;
    isLoading?: boolean;
    useAccentVariant?: boolean;
    inputType?: "button" | "submit" | null;
}
const CustomButton: React.FC<CustomButtonProps> = ({onButtonClick, className, children, isLoading, useAccentVariant, inputType })=>{
    
    return (
        <div>
            <button 
                onClick={onButtonClick} className={`${useAccentVariant ? `bg-accent` : `bg-primary`} text-white flex mt-1 mb-3 rounded-3xl py-2 px-4 md:py-3 md:px-8 ${className || ''}`}
                disabled={isLoading}
                type={inputType || 'button'}>
                {
                    isLoading 
                        ? (<Spin size="large"/>)
                        : children 
                }
                
            </button>
        </div>
    )
}

// const CustomButtonAccentVariant: React.FC<CustomButtonProps> = ({onButtonClick, className, children,isLoading })=>{
    
//     return (
//         <div>
//             <button 
//                 onClick={onButtonClick} className={` text-white flex mt-1 mb-3 rounded-3xl py-2 px-4 md:py-3 md:px-8 ${className || ''}`}
//                 disabled={isLoading}>
//                 {children}
//             </button>
//         </div>
//     )
// }

export {CustomButton}//, CustomButtonAccentVariant}