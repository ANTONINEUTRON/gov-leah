
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
        <div className="bg-white shadow-xl m-4 rounded-lg p-3">
            <div className="px-6 py-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Policy Title</h2>
                <p className="text-gray-700 text-base">
                    A brief description of the policy goes here. This is a summary that gives users an idea of what the policy is about.
                </p>
            </div>
            <div className="px-6 flex justify-between items-center">
                <button className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-600">
                    Comment
                </button>
                <a href="#" className="text-blue-500 text-sm font-semibold hover:underline">
                    View More
                </a>
            </div>
        </div>
    );
}
