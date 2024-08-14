"use client"
import { Bell, Briefcase, Calendar, Home, Menu, MessageSquare, User, X } from "react-feather"
import Logo from "../logo"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItem from "./NavItem";
import { Drawer } from "antd";

interface NavbarProps{
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({className})=>{
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={className || ''}>
            <Menu className={`w-10 h-12 lg:hidden ${isOpen ? 'hidden' : 'block'}`} onClick={()=>{setIsOpen(!isOpen)}}/>
            <nav className="hidden lg:flex h-screen flex-col bg-gray-100 shadow-md pr-4 py-2">
                <div className="flex justify-between">
                    <div className="flex items-center px-2 my-1 mb-8">
                        <Logo/>
                    </div>
                    {/* <X onClick={()=>{setIsOpen(false)}} className="lg:hidden"/> */}
                </div>
                <NavbarContents />
                
            </nav>
            <Drawer
                title={<Logo />}
                placement={'left'}
                width={365}
                onClose={()=>setIsOpen(false)}
                open={isOpen}
                className="lg:hidden bg-black"
                style={{
                    background: 'rgb(31 41 55)',
                    color: 'white'
                }}
                closeIcon={<X className="text-white"/>}
            >
                <NavbarContents />
            </Drawer>
        </div>
    )
}

const NavbarContents = ()=>{
    var path = usePathname();
    const [cPath, setPath] = useState("");
    useEffect(()=>{
        if(path){
            setPath(path);
        }
    }, [path]);

    return (
        <>
            <ul className="font-medium flex flex-col space-y-2">
                <NavItem 
                    icon={<Home />}
                    title="Policies"
                    path="/home"
                    highlightCondition={(cPath.includes("home") || cPath == "/")}/>
                <NavItem 
                    title="Feedbacks"
                    icon={<Briefcase />}
                    path="/feedbacks"
                    highlightCondition={cPath.includes("feedbacks")}/>
                {/* <NavItem 
                    title="Chats"
                    icon={<MessageSquare />}
                    path="/chat"
                    highlightCondition={cPath.includes("chat")}/>
                <NavItem 
                    path="/schedules"
                    icon={<Calendar/>}
                    title="Schedules"
                    highlightCondition={cPath.includes("schedules")}/>
                <NavItem 
                    title="Notifications"
                    icon={<Bell />}
                    path="/notifications"
                    highlightCondition={cPath.includes("notifications")}/> */}
                <NavItem 
                    title="Profile"
                    icon={<User />}
                    path="/profile"
                    highlightCondition={cPath.includes("profile")}/>
                
                {/* <NavItem 
                    title=""
                    icon
                    path=""
                    highlightCondition/> */}
            </ul>
        </>
    )
}

export default Navbar