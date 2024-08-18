import { Edit3, LogOut } from "react-feather"
import { CustomButton } from "./CustomButton"
import { useRouter } from "next/router";
import { cAuth } from "@/firebaseconfig";
import UserPFP from "./UserPFP";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";


const AccountContent = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        let currentUser = cAuth.currentUser;
        console.log("heele");

        console.log(currentUser);

        setUser(currentUser);
    }, [])
    
    const logUserOut = ()=>{
        cAuth.signOut();
        useRouter().replace("/");
    }

    return (
        <div>
            {
                user && (
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-14 h-14">
                            <UserPFP />
                        </div>
                        <div className="text-lg">
                            {user?.email ?? "your@email.com"}
                        </div>

                        <CustomButton>
                            <Edit3 /> Update profile
                        </CustomButton>

                        <div>
                            <CustomButton
                                className="bg-red-700"
                                onButtonClick={logUserOut}>
                                <LogOut /> Sign out
                            </CustomButton>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default AccountContent