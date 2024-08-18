import IsAuthenticated from "@/components/IsAuthenticated"

const FeedbackLayout = ({children,}: {children: React.ReactNode})=>{
    return (
        <IsAuthenticated>
            <div>
                {children}
            </div>
        </IsAuthenticated>
    )
}

export default FeedbackLayout