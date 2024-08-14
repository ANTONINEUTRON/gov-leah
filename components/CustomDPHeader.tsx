import Image from "next/image";


const CustomDPHeader = ()=>{
    return (
        <div className="relative bg-primary w-full h-56">
            
            <div className="absolute top-36 left-4 w-4/6">
                {/* User display pic hoisted within the cover image above */}
                <Image 
                    alt="Profile Pics"
                    src={'/images/dp.webp'}
                    width={250}
                    className="rounded-full w-40 h-40 border border-black dark:border-white"
                    height={250} />
            </div>
        </div>
    )
}

export default CustomDPHeader