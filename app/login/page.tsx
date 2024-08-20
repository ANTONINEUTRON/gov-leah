'use client'

import {CustomButton} from "@/components/CustomButton";
import CustomHeaderText from "@/components/CustomHeaderText";
import CustomPasswordTextfield from "@/components/CustomPasswordTextfield";
import CustomTextField from "@/components/input_components/CustomTextfield";
import SocialSignin from "@/components/SocialSignin";
import Link from "next/link";
import { Mail } from "react-feather";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "@/components/logo";
import { cAuth } from "@/firebaseconfig";
import { APP_NAME } from "@/util/AppConstants";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){
    const [isLoading,setIsLoading] = useState(false)//useAppSelector((state: {auth: AuthState}) => state.auth.loading,shallowEqual);
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSignIn = async () => {
        setIsLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(cAuth, email, password);
            const user = userCredential.user;
            
            // Redirect or perform other actions after successful sign-in
            router.replace("/policy");
        } catch (err: any) {
            setError(err.message);
            console.error('Error signing in:', err);
        }
        setIsLoading(false);
    };

    return (
       <div>
            <div className="flex justify-between">
                {/* Left Side (60% width) */}
                <div className="w-full">
                    <div className="hidden md:block m-6">
                        <Logo/>
                    </div>
                    <div className='flex flex-col w-full h-full items-center'>
                        {/* Content for the left side */}
                        <div className="flex flex-col w-4/5 lg:w-3/6 items-center justify-between px-2 md:px-6">
                            <div className="flex mb-9 mt-4">
                                <CustomHeaderText text={"Sign in to "+APP_NAME}/>
                            </div>
                            <SocialSignin/>
                            <div className='m-5'>or use your email account</div>
                            <CustomTextField 
                                inputType="email"
                                icon={<Mail className='text-primary' />} 
                                className="mb-6" hint="Email Address" 
                                onInputChange={(value)=>{setEmail(value)}}
                                value={email} />
                            <CustomPasswordTextfield 
                                value={password}
                                className="mb-6" 
                                onInputChange={(value)=>{setPassword(value)}}/>
                            
                            {/* <CustomChip className="mb-8">
                                Forgot password?
                            </CustomChip> */}
                            {error && <p className="py-2 text-red-600">{error}</p>}

                            <CustomButton 
                                isLoading={isLoading}
                                onButtonClick={()=>handleSignIn()}
                                >
                                Sign in
                            </CustomButton>
                        </div>
        
                    </div>
                </div>

                {/* Right Side (40% width) */}
                <div className="static hidden md:block text-white h-screen w-2/5 bg-primary p-3">
                    <div className="h-full flex flex-col items-center justify-center">
                        {/* Content for the right side #9966CC*/}
                        <div className="flex w-4/5 flex-col items-center">
                            <CustomHeaderText 
                                text="Don't Have An Account?" 
                                className="text-3xl mb-6 mt-4 text-white text-center"
                                />
                            <p className="text-center">Let&#39;s Begin: Share your details to start your Journey</p>
                            <Link href="/register">
                                <CustomButton 
                                    className="border border-white">
                                    Sign up
                                </CustomButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom section on mobile */}
            <div className="flex justify-center md:hidden">
                Don&#39;t have an Account? <p className="pl-2"> <Link href="/register" className="text-primary"> Sign Up</Link></p>
            </div>
        </div>
    );
}