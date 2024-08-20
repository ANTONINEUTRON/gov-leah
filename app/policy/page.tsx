"use client"

import AddPolicyButton from "@/components/AddPolicyButton";
import Navbar from "@/components/nav_components/Navbar";
import { cFirestore } from "@/firebaseconfig";
import { Policy } from "@/models/policy";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = ()=>{
    const [policies, setPolicies] = useState<Policy[] | null>(null);

    useEffect(()=>{
        fetchPolicies();
    },[]);

    async function fetchPolicies(){
        try {
            // Reference to the 'policies' collection
            const policiesRef = collection(cFirestore, 'policies');

            // Fetch all documents in the 'policies' collection
            const querySnapshot = await getDocs(policiesRef);

            // Map over the documents and convert them to Policy objects
            const fPolicies: Policy[] = querySnapshot.docs.map(doc => ({
                ...doc.data() as Policy,
            }));

            console.log(fPolicies.length);

            setPolicies(fPolicies);
        } catch (error) {
            console.error('Error fetching policies: ', error);
        }
    }

    return (
        <div className="flex">
            <div>
                <Navbar />
            </div>
            <div className="p-10 w-full">
                <div className="flex justify-between">
                    <div className="font-semibold text-2xl">
                        Latest Government Policies
                    </div>
                    <AddPolicyButton 
                        fetchPolicies={fetchPolicies}/>
                </div>
                
                <div>
                    {
                        policies 
                        ? 
                            
                            policies.length > 0 ? policies.map((policy)=>(
                                    <div>
                                        <div className="grid grid-cols-3">
                                            <PolicyItem
                                                key={policy.id}
                                                policy={policy} />
                                        </div>
                                    </div>
                            ))
                            
                            :(
                                <div className="w-full h-[80vh] flex justify-center items-center">
                                    No policy yet
                                </div>
                            )
                        : (
                            <div>
                                Loading...
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage

function PolicyItem({ policy }: { policy: Policy }) {


    return (
        <Link href={'policy/'+policy.id}>
            <div className="bg-white shadow-xl m-4 rounded-lg p-3">
                <div className="px-3 py-3">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        {policy.title}
                    </h2>
                    <p className="text-gray-700 text-base line-clamp-4">
                        {policy.description}
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
