import { cAuth } from "@/firebaseconfig";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { User as Userr } from "react-feather";
import { shallowEqual } from "react-redux";


const UserPFP = ()=>{
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        let currentUser = cAuth.currentUser;

        setUser(currentUser);
    }, [])

    
    return (
        <div>
            {
                user?.photoURL
                    ? (
                        <div className="w-16 h-16 flex justify-center rounded-full">
                            <img
                                src={user!.photoURL}
                                width={500}
                                height={500}
                                alt="profile Pics"
                                className="rounded-full" />
                        </div>
                    ) : (
                        <div className="rounded-full bg-gray-300 p-4">
                            <Userr/>
                        </div>
                    )
            }
        </div>
    )
}

export default UserPFP