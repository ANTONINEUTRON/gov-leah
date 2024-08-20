"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import LoadingUI from "./LoadingUI"
import { cAuth } from "@/firebaseconfig"

interface IsAuthenticatedProps{
    children: ReactNode
}

const IsAuthenticated: React.FC<IsAuthenticatedProps> = ({children})=>{
    const router = useRouter()
    const isUA = !!cAuth.currentUser;// isUserAuthenticated()//is user authenticated == isUA
    const [isInitializationComplete, setIsInitializationComplete] = useState(false)

    useEffect(()=>{
        cAuth.authStateReady().then(()=>{
            (cAuth.currentUser);
            if (isUA){
                setIsInitializationComplete(true)
            }else{
                router.push("/login")
            }
        },
        (error)=>{})
    })
    
    return (
        <div>
            {
                isInitializationComplete
                    ? (
                        isUA
                            ? children
                            : null
                    )
                    : (<LoadingUI />)
            }
        </div>
    )
    
}

export default IsAuthenticated