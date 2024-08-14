'use client'

import {CustomButton} from "@/components/CustomButton";
import CustomHeaderText from "@/components/CustomHeaderText";
import CustomPasswordTextfield from "@/components/CustomPasswordTextfield";
import CustomTextField from "@/components/input_components/CustomTextfield";
import SocialSignin from "@/components/SocialSignin";
import Logo from "@/components/logo";
import Link from "next/link";
import { Mail, User } from "react-feather";
import { useSelector } from "react-redux";
// import { AuthState, showError } from "@/data/redux/slice/authSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { isUserAuthenticated } from "@/data/repository/AuthRepository";
// import isEmail from "validator/es/lib/isEmail";
// import { cSignUpNewMentor } from "@/data/redux/actions/authActions";
// import { useAppDispatch } from "@/data/redux/hooks";
import { cAuth } from "@/firebaseconfig";
import LoadingUI from "@/components/LoadingUI";

export default function Register(){
    // const isLoading = useSelector((state: AuthState) => state.loading);
    const router = useRouter()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    // const dispatch = useAppDispatch()
    const [isInitializationComplete, setIsInitializationComplete] = useState(false)


    // useEffect(()=>{
    //     cAuth.authStateReady().then(()=>{
    //         if(isUserAuthenticated()){
    //             router.push("/")
    //         }else{
    //             setIsInitializationComplete(true)
    //         }
    //     })
    // })
    
    
    // const onSignUpClicked = ()=>{
    //     //Validate Inputs
    //     let error = validateInputs()
    //     if(error != null){
    //         dispatch(showError(error))
    //     }else{
    //         dispatch(cSignUpNewMentor({email: email, password: password, username: name}))
    //     }
    // }


    // const validateInputs = (): string | null => {
    //     if(name.length < 4 || !name.includes(" ")){
    //         return "Enter a valid full name"
    //     }else if(!isEmail(email)){
    //         return "Enter a valid email address"
    //     }else if(password.length < 6){
    //         return "Enter a strong password"
    //     }
    //     return null
    // }

    //  !isInitializationComplete 
    //     ? (<LoadingUI />)
    //     :(
        return (<div>
            <div className="flex justify-between">
                {/* Left Side (60% width) */}
                <div className="w-full">
                    <div className="m-6 hidden md:block">
                        <Logo/>
                    </div>
                    <div className='flex flex-col w-full h-full items-center'>
                        {/* Content for the left side */}
                        <div className="flex flex-col w-4/5 lg:w-3/6 items-center justify-between px-1 md:px-6">
                            <div className="flex mb-9 mt-4">
                                <CustomHeaderText text="Create Account"/>
                            </div>
                            <SocialSignin/>
                            <div className='m-5'>or sign up with email</div>
                            <CustomTextField 
                                icon={<User className='text-primary' />} 
                                className="mb-6" hint="Full name" 
                                onInputChange={(value)=>setName(value)} 
                                value={name}/>
                            <CustomTextField 
                                icon={<Mail className='text-primary' />} 
                                className="mb-6" hint="Email Address" 
                                onInputChange={(value)=>setEmail(value)}
                                value={email} />
                            <CustomPasswordTextfield 
                                className="mb-8" 
                                onInputChange={(value)=>setPassword(value)}
                                value={password}
                                />
                            {/* <div className="shadow-md hover:border hover:border-primary flex items-center p-5 pb-1 pt-1 mb-10 bg-gray-100 dark:bg-gray-800 rounded-lg text-primary"
                                >
                                sign up
                            </div> */}
                            <CustomButton
                                //  isLoading={isLoading}
                                //  onButtonClick={onSignUpClicked}
                                >
                                Sign up
                            </CustomButton> 
                        </div>
        
                    </div>
                </div>

                {/* Right Side (40% width) */}
                <div className="static hidden md:block text-white h-screen md:w-2/5 bg-primary p-3">
                    <div className="h-full flex flex-col items-center justify-center">
                        {/* Content for the right side #9966CC*/}
                        <div className="flex w-4/5 flex-col items-center justify-evenly">
                            <CustomHeaderText 
                                text="Welcome Back!" 
                                className="text-3xl mb-6 mt-4 text-white text-center"
                                />
                            <p className="text-center">Already have an account? Please log in with your personal details.</p>
                            <Link href="/login">
                                <CustomButton 
                                    className="border border-white">
                                    Sign in
                                </CustomButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom section on mobile */}
            <div className="flex justify-center md:hidden">
                Already have an Account? <p className="pl-2"> <Link href="/login" className="text-primary"> Sign In</Link></p>
            </div>
        </div>
    );
}