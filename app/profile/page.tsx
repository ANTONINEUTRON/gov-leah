"use client"
import { CustomButton } from "@/components/CustomButton";
import CustomDPHeader from "@/components/CustomDPHeader";
import CustomRoundButton from "@/components/CustomRoundButton";
import FloatingActionButton from "@/components/FloatingActionButton";
import Navbar from "@/components/nav_components/Navbar";
// import { useAppDispatch } from "@/data/redux/hooks";
// import { signOut } from "@/data/redux/slice/authSlice";
// import { AppDispatch } from "@/data/redux/store";
import { Avatar, Divider, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Briefcase, Edit2, Edit3, Heart, LogOut, Mail, Phone, Star, User } from "react-feather";
import { useDispatch } from "react-redux";


export default function Profile(){
    // const dispatch = useAppDispatch()
    // const router = useRouter()

    // const handleLogout = ()=>{
    //     dispatch(signOut())
    //     router.push("/login")
    // }

    return (
        <main className="flex h-full">
            <div>
                <Navbar />
            </div>
            <section className="rounded-lg flex flex-col">
                <div className="pb-20 lg:pb-10">
                    <CustomDPHeader />
                </div>
                <div className="hidden md:flex justify-end pr-12">
                    <Link href="/profile/edit">
                        <CustomButton useAccentVariant={true}>
                            <Edit3 /> Edit
                        </CustomButton>
                    </Link>
                </div>
                <div className="flex flex-col pl-3 w-full pr-12">
                    <span className="text-xl font-semibold py-2">Name Of User</span>
                    <span>Mentor Current Role</span>
                    <div className="text-gray-600 mt-4 dark:text-gray-400 flex">
                        <Briefcase />
                        <span className="pl-2">userskill1</span> 
                        <span className="pl-2">userskill2</span> 
                        <span className="pl-2">userskill3</span> 
                    </div>
                    <div className="text-gray-600 mt-2 dark:text-gray-400 flex">
                        <Mail /> 
                        <span className="pl-2">ntoni@gmail.com</span>
                    </div>

                    <div className="w-full flex lg:items-center justify-between  flex-col lg:flex-row">
                        <div className="text-gray-600 mt-2 dark:text-gray-400 flex">
                            <Phone /> 
                            <span className="pl-2">+234443323933</span>
                        </div>
                        <UserProfileSocials />
                    </div>
                    <Divider className="bg-gray-400 dark:bg-white" />

                    <div className="px-8 py-2">
                        <p className="font-bold text-xl pb-2">Bio</p>
                        User bio will show here Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam adipisci quisquam debitis modi maxime velit assumenda, fugiat sed ea ipsam dicta voluptates eius minus enim porro ratione quas tempora?
                    </div>
                    <Divider className="bg-gray-400 dark:bg-white" />
                    <div className="w-4/5 px-8 py-2">
                        <p className="font-bold text-xl pb-2">Interest</p>
                    </div>

                    <Divider className="bg-gray-400 dark:bg-white" />
                    <div className="w-4/5 px-8 py-2">
                        <p className="font-bold text-xl pb-2">Reviews - 5<Star size={17} fill="rgb(234,178,8)" className="text-yellow-500 inline"/></p>
                    </div>

                    <Divider className="bg-gray-400 dark:bg-white" />
                    <div className=" flex justify-center px-8 pb-14">
                        <CustomButton className="bg-red-600" 
                        // onButtonClick={()=>handleLogout()}
                        >
                            Logout <LogOut />
                        </CustomButton>
                    </div>
                    
                </div>
                <Link href="/profile/edit">
                    <FloatingActionButton className="md:hidden" onClick={()=>{}}>
                        <Edit3 />
                    </FloatingActionButton>
                </Link>
            </section>
        </main>
    );
}

const UserProfileSocials = ()=>{
    return (
        <Space size={'large'} className="text-gray-600 mt-2 flex dark:text-gray-400 flex-wrap">
            <CustomRoundButton className="dark:bg-gray-200"  onClick={()=>{}}>
                <Image 
                    src={`/images/facebook.png`}
                    width={100}
                    height={100}
                    className="w-6"
                    alt="Facebook Account"/>
            </CustomRoundButton>

            <CustomRoundButton className="dark:bg-gray-200"  onClick={()=>{}}>
                <Image 
                    src={`/images/linkedin.png`}
                    width={100}
                    height={100}
                    className="w-6"
                    alt="LinkedIN Account"/>
            </CustomRoundButton>

            <CustomRoundButton className="dark:bg-gray-200" onClick={()=>{}}>
                <Image 
                    src={`/images/twitterx.png`}
                    width={100}
                    height={100}
                    // className="w-6 dark:invert"
                    className='w-6 invert dark:invert-0 p-2'
                    alt="Twitter Account"/>
            </CustomRoundButton>
        </Space>
    )
}
