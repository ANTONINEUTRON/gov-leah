import IsAuthenticated from "@/components/IsAuthenticated"

const HomeLayout = ({children,}: {children: React.ReactNode})=>{
    return (
        // <IsAuthenticated>
            <div>
                {children}
            </div>
        // </IsAuthenticated>
    )
}

export default HomeLayout