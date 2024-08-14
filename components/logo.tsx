import { APP_NAME } from "@/util/AppConstants";
import { Kurale } from "next/font/google";
import Image from "next/image";

const kurale = Kurale({weight : "400", subsets: ['latin']}); 

export default function Logo(){
    return ( 
        <div className={`flex items-center text-lg text-black  ${kurale.className}`}>
            <Image src="/images/logo.png" alt="App Logo" className="mr-5 w-9" width={500} height={500} />
            <span className="pr-10">{APP_NAME}</span>
        </div>
    )
} 

