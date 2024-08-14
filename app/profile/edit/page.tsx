"use client"
import CustomHeaderText from "@/components/CustomHeaderText"
import CustomTextField from "@/components/input_components/CustomTextfield"


const EditProfile = ()=>{
    return (
        <section className="flex flex-row justify-center w-screen">
            <div className="container mx-4 lg:mx-0 lg:w-2/5 flex flex-col shadow-2xl p-4 bg-gray-100 dark:bg-gray-700 ">
                <CustomHeaderText
                    text="Edit Profile"
                    className="m-4"/>

                <label className="mt-4">Full Name</label>
                <CustomTextField 
                    value=""
                    hint="Name"
                    onInputChange={()=>{}}/>
                
                <label className="mt-4">Skills</label>
                <CustomTextField 
                    value=""
                    hint="Skills"
                    onInputChange={()=>{}}/>
                <div className="my-4 pb-8 border flex flex-col">
                    <span className="text-xl">Contact</span>
                    <div className="px-8 pt-4">
                        <label className="pt-8">Phone Number</label>
                        <CustomTextField 
                            value=""
                            hint="Phone Number"
                            onInputChange={()=>{}}/>

                        <label>Email</label>
                        <CustomTextField 
                            value=""
                            hint="Email"
                            onInputChange={()=>{}}/>
                        
                        <label>Facebook</label>
                        <CustomTextField 
                            value=""
                            hint="Facebook"
                            onInputChange={()=>{}}/>
                        
                        <label>Twitter</label>
                        <CustomTextField 
                            value=""
                            hint="Twitter"
                            onInputChange={()=>{}}/>

                        <label>LinkedIn</label>
                        <CustomTextField 
                            value=""
                            hint="LinkedIn"
                            onInputChange={()=>{}}/>
                    </div>
                </div>
                
                <label className="mt-4">Address</label>
                <CustomTextField 
                    value=""
                    hint="Address"
                    onInputChange={()=>{}}/>
                
                <label className="mt-4">State</label>
                <CustomTextField 
                    value=""
                    hint="State"
                    onInputChange={()=>{}}/>
                
                <label className="mt-4">Country</label>
                <CustomTextField 
                    value=""
                    hint="Country"
                    onInputChange={()=>{}}/>
                
            </div>
        </section>
    )
}

export default EditProfile