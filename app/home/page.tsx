import AddPolicyButton from "@/components/AddPolicyButton";
import Navbar from "@/components/nav_components/Navbar";
import Link from "next/link";

const HomePage = ()=>{
    return (
        <div className="flex">
            
            
            <div>
                <Navbar />
            </div>
            <div className="p-10">
                <div className="flex justify-between">
                    <div className="font-semibold text-2xl">
                        Latest Government Policies
                    </div>
                    <AddPolicyButton />
                </div>
                
                <div className="grid grid-cols-3">
                    <PolicyItem />
                    <PolicyItem />
                    <PolicyItem />
                    <PolicyItem />
                    <PolicyItem />
                    <PolicyItem />
                    <PolicyItem />
                    <PolicyItem />
                    <PolicyItem />
                </div>
            </div>
        </div>
    );
}

export default HomePage

function PolicyItem() {
    return (
        <Link href='home/23asid'>
            <div className="bg-white shadow-xl m-4 rounded-lg p-3">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Policy Title</h2>
                    <p className="text-gray-700 text-base">
                        A brief description of the policy goes here. This is a summary that gives users an idea of what the policy is about.
                    </p>
                </div>
                <div className="px-6 flex justify-end items-center">
                    <button className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-600">
                        View Policy
                    </button>
                    {/* <a href="#" className="text-blue-500 text-sm font-semibold hover:underline">
                        View More
                    </a> */}
                </div>
            </div>
        </Link>
    );
}
