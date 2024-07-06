import { ReactNode } from "react";

interface CustomChipProps{
    children: ReactNode;
    className?: string;
}

const CustomChip: React.FC<CustomChipProps> = ({children, className})=>{
    return (
        <div className={`m-1 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl ${className}`}>
            {children}
        </div>
    )
}

export default CustomChip