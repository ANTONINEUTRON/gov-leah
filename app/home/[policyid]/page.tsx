

export default function OpenPolicyPage({ params }: {
    params: { policyid: string }
}) {

    return (
        <div>
            <div className="container flex justify-center">
                <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Policy Title</h1>
                        <p className="text-gray-700 text-lg mb-4">
                            A detailed description of the policy goes here. This section explains the policy in depth, outlining its purpose, scope, and implications.
                        </p>
                        <div className="text-sm text-gray-500">
                            <span>Category: </span><span className="font-medium">Healthcare</span>
                            <span className="ml-4">Published: Aug 14, 2024</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Leave a Comment</h2>
                        <textarea
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            placeholder="Write your comment here..."
                        ></textarea>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                            Submit Comment
                        </button>
                    </div>


                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
                        <div className="space-y-6">
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">John Doe</span>
                                    <span className="text-xs text-gray-500">Aug 14, 2024</span>
                                </div>
                                <p className="text-gray-700 mb-2">This policy is very important for the community. I fully support it!</p>
                                <div className="flex space-x-4">
                                    <button className="text-sm text-blue-500 hover:underline">Reply</button>
                                    <button className="text-sm text-gray-500 hover:underline">Upvote</button>
                                    <button className="text-sm text-red-500 hover:underline">Report</button>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-100 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">Jane Smith</span>
                                    <span className="text-xs text-gray-500">Aug 13, 2024</span>
                                </div>
                                <p className="text-gray-700 mb-2">I have some concerns about how this policy will be implemented.</p>
                                <div className="flex space-x-4">
                                    <button className="text-sm text-blue-500 hover:underline">Reply</button>
                                    <button className="text-sm text-gray-500 hover:underline">Upvote</button>
                                    <button className="text-sm text-red-500 hover:underline">Report</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}