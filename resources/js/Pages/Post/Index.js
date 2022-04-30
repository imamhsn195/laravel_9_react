import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Index = ({posts, create_url}) => {
    return (
        <div>
            <div className="table w-full p-2">
            <InertiaLink
                className="btn btn-info"
                href={create_url}
            >
                Create Post
            </InertiaLink>
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="border-r p-2">
                                ID
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Title
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Description
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Actions
                                </div>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => {
                            return(
                                <tr className="bg-gray-50 text-center">
                                    <td className="p-2 border-r">
                                {post.id}
                                    </td>
                                    <td className="p-2 border-r">
                                        {post.title}
                                    </td>
                                    <td className="p-2 border-r">
                                        {post.description}
                                    </td>
                                    <td className="p-2 border-r">
                                        <InertiaLink
                                            className="btn btn-info"
                                            href={post.edit_url}
                                        >
                                            Edit
                                        </InertiaLink>

                                    </td>
                                </tr>
                            )}
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )}
export default Index
