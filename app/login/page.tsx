'use client'

import {CustomButton} from "@/components/CustomButton";
import CustomHeaderText from "@/components/CustomHeaderText";
import CustomPasswordTextfield from "@/components/CustomPasswordTextfield";
import CustomTextField from "@/components/input_components/CustomTextfield";
import SocialSignin from "@/components/SocialSignin";
import Link from "next/link";
import { Mail } from "react-feather";
import CustomChip from "@/components/CustomChip";
import { shallowEqual, useSelector } from "react-redux";
// import { AuthState, showError } from "@/data/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/data/redux/hooks";
import Logo from "@/components/logo";
// import { isUserAuthenticated } from "@/data/repository/AuthRepository";
// import { cSignInWithEmailAndPassword } from "@/data/redux/actions/authActions";
// import isEmail from 'validator/es/lib/isEmail';
import LoadingUI from "@/components/LoadingUI";
import { cAuth } from "@/firebaseconfig";
import { APP_NAME } from "@/util/AppConstants";

export default function Login(){
    // const isLoading = useAppSelector((state: {auth: AuthState}) => state.auth.loading,shallowEqual);
    const router = useRouter()
    // const dispatch = useAppDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isInitializationComplete, setIsInitializationComplete] = useState(false)


    // useLayoutEffect(()=>{
    //     cAuth.authStateReady().then(()=>{
    //         if(isUserAuthenticated()){
    //             router.push("/")
    //         }else{
    //             setIsInitializationComplete(true)
    //         }
    //     })
    // })

    // const signInUser = ()=>{
    //     //Validate Inputs
    //     let error = validateInputs()
    //     if(error != null){
    //         dispatch(showError(error))
    //     }else{
    //         dispatch(cSignInWithEmailAndPassword({email: email, password: password}))
    //     }
    // }

    // const validateInputs = (): string | null => {
    //     if(!isEmail(email)){
    //         return "Enter a valid email address"
    //     }
    //     return null
    // }
    


    //  !isInitializationComplete 
    //     ? (<LoadingUI />)
        // :(
       return (<div>
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
                            
                            <CustomChip className="mb-8">
                                Forgot password?
                            </CustomChip>

                           <Link href="/home">
                            <CustomButton 
                                // isLoading={isLoading}
                                // onButtonClick={signInUser}
                                >
                                Sign in
                            </CustomButton>
                            </Link>
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