
// const { Header, Content, Footer, Sider } = Layout;

import Navbar from "@/components/nav_components/Navbar";

const HomePage = ()=>{
    return (
        <div className="flex">
            <div className="">
                <Navbar />
            </div>
            <div>
                <div className="p-10 grid grid-cols-3">
                    <FeedbackIten />
                    <FeedbackIten />
                    <FeedbackIten />
                    <FeedbackIten />
                    <FeedbackIten />
                    <FeedbackIten />
                    <FeedbackIten />
                    <FeedbackIten />
                    <FeedbackIten />
                </div>
            </div>
        </div>
    );
}

export default HomePage

function FeedbackIten() {
    return (
        <div className="m-4 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Feedback Title</h3>
                <p className="text-gray-700 text-base mb-4">
                    A brief description or summary of the feedback goes here. This could include the main points or issues raised in the feedback.
                </p>
                <div className="text-gray-500 text-sm mb-4">
                    <span>Category: </span><span className="font-medium">Healthcare</span>
                </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                <button className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-600">
                    View Feedback
                </button>
                <span className="text-gray-500 text-xs">Submitted on: Aug 14, 2024</span>
            </div>
        </div>
    );
}
