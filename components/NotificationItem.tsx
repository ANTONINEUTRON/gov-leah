import CustomChip from "./CustomChip"

const NotificationItem = ()=>{
    return (
        <CustomChip>
            <span className="text-xl">Notification Title</span>
            <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptate inventore voluptatum molestias repellendus. Esse voluptatem consectetur illum molestias? Sit rerum aliquid voluptatum neque nihil. Magni cum delectus vero eius?
            </p>
            <div className="flex justify-end text-sm mt-4">
                <span>14-4-12</span>
            </div>
        </CustomChip>
    )
}

export default NotificationItem