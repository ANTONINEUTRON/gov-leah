import { Children, ReactNode } from "react"

interface CustomRoundButtonProps{
    children: ReactNode;
    onClick: ()=>void;
    className?: string;
}

const CustomRoundButton: React.FC<CustomRoundButtonProps> = ({onClick, children, className})=>{
    return (
        <div 
          className={`bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:border-primary hover:border ${className || ''}`}
          onClick={onClick}>
            {children}
        </div>
    )
}

export default CustomRoundButton