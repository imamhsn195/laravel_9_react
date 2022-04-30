import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm, usePage } from "@inertiajs/inertia-react";

const Create = () => {
    const {data, setData, errors, post  } = useForm({title:"", description:""})
    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"))
    }
    return (
        <div className="max-w-2xl mx-auto bg-white p-16">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" id="title" value={data.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                            setData("title", e.target.value)
                        }}
                        placeholder="Title" required/>
                    </div>
                    <div>
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desctiption</label>
                        <textarea type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                            setData("description", e.target.value)
                        }}
                        placeholder="Description">{data.description}</textarea>
                    </div>
                    <button id="company"  type="submit" className="bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Submit</button>
                </div>
            </form>
        </div>
    )}
export default Create
