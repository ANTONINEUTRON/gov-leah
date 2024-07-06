import Link from "next/link";
import { ReactNode } from "react"
import { Home } from "react-feather";

interface NavProps {
    icon: ReactNode;
    title: string;
    highlightCondition: boolean;
    path:string;
} 

const NavItem: React.FC<NavProps> = ({highlightCondition, icon, title, path})=>{
    return (
        <Link href={path}>
            <li className={`flex hover:bg-gray-200 items-center pl-4 px-2 py-2 rounded-r-2xl dark:hover:bg-gray-700 my-2 ${highlightCondition && "bg-primary  text-white hover:text-gray-500"}`}>
                {icon}
                <span className="pl-3">{title}</span>
            </li>
        </Link>
    )
}

export default NavItem