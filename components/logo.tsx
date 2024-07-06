import { Kurale } from "next/font/google";
import Image from "next/image";

const kurale = Kurale({weight : "400", subsets: ['latin']}); 

export default function Logo(){
    return ( 
        <div className={`flex items-center text-2xl text-black dark:text-white ${kurale.className}`}>
            <Image src="/images/logo.png" alt="CoachFluens Logo" className="mr-5 w-9" width={500} height={500} />
            <span className="pr-1">COACHFLUENS</span>
        </div>
    )
} 

