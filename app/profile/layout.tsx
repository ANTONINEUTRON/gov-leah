import IsAuthenticated from "@/components/IsAuthenticated"

const ProfileLayout = ({children,}: {children: React.ReactNode})=>{
    return (
        <IsAuthenticated>
            <div>
                {children}
            </div>
        </IsAuthenticated>
    )
}

export default ProfileLayout