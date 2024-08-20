"use client"
import { Bell, Briefcase, Calendar, ChevronDown, ChevronUp, Home, Menu, MessageSquare, User, X } from "react-feather"
import Logo from "../logo"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItem from "./NavItem";
import { Drawer, Popover } from "antd";
import AccountContent from "../AccountContent";

interface NavbarProps{
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({className})=>{
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={className || 'sticky'}>
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
                    title="Feedbacks"
                    icon={<Briefcase />}
                    path="/feedbacks"
                    highlightCondition={cPath.includes("feedbacks")}/>
                <NavItem 
                    icon={<Home />}
                    title="Policies"
                    path="/policy"
                    highlightCondition={(cPath.includes("policy") || cPath == "/")}/>
                <div className="mt-2">
                    <ProfileItem />
                </div>
            </ul>
        </>
    )
}

export default Navbar

const ProfileItem = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover
            className="flex items-center"
            content={<AccountContent />}
            trigger={"click"}
            
            open={isOpen}
            onOpenChange={() => setIsOpen(!isOpen)}>

            <div className=" h-8 flex justify-between">
                <NavItem
                    title="Profile"
                    icon={<User />}
                    path="#" 
                    highlightCondition={false}/>

                {
                    isOpen
                        ? (
                            <ChevronUp />
                        )
                        : (
                            <ChevronDown />
                        )
                }
            </div>
        </Popover>
                
    );
}