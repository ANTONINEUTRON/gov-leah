import { ReactNode } from "react"

interface FloatingActionButtonProps{
    children: ReactNode;
    onClick: ()=>void;
    className?: string;
}
const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({children, onClick, className})=>{
    return (
        <button onClick={onClick} className={`bg-accent text-white p-4 rounded-full shadow-lg fixed bottom-6 right-6 ${className}`}>
            {children}
        </button>
    )
}

export default FloatingActionButton