"use client"
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { useSession } from 'next-auth/react';

const CreateBlog = () => {
    const session = useSession();
    const [startDate, setStartDate] = useState(new Date());

    const handleAdd = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const tags = form.tags.value;
        const image = form.image.value;
        const blog_content = form.blog_content.value;

        const newBlogData = {
            title,
            thumbnail: image,
            category,
            trending: false,
            sponsored: false,
            post_date: moment(startDate).format('YYYY-MM-DD'),
            author_name: session?.data?.user?.name,
            author_email: session?.data?.user?.email,
            author_image: session?.data?.user?.image,
            comment_count: 0,
            tags: tags.split(","),
            blog_content,
        }
        console.log(newBlogData);
    }
    return (
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                <h1 className="text-3xl font-bold font-robo tracking-wider capitalize ">
                    Create a new blog
                </h1>
                <p className="mt-4 text-[#6B7280]">
                    Add a test, including details like dates, slots, and descriptions,
                    to reflect the latest offerings and ensure seamless patient experience.
                </p>

                <form onSubmit={handleAdd} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Title</label>
                        <input name="title" type="text" placeholder="Enter Blog Title"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Date</label>
                        <DatePicker name="updatedDate"
                            className='block w-full px-5 py-3 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg'
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Category</label>
                        <select name="category" id="" className='block w-full px-3 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg'>
                            <option value="Technology">Technology</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Health">Health</option>
                            <option value="Travel">Travel</option>
                            <option value="Education">Education</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Tags (divide them with comma)</label>
                        <input name="tags" type="string" placeholder="Enter Tags"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg" />
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-600 ">Photo URL</label>
                        <input name="image" placeholder="Enter image URL" type="url"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg " />
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-600 ">Blog Content</label>
                        <textarea name="blog_content" rows={5} placeholder="Enter Blog Content"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                    bg-white border border-gray-200 rounded-lg"></textarea>
                    </div>
                    <button className="btn col-span-2 bg-[#F59E0B] text-[#1F2937] text-lg font-semibold rounded-xl 
                            border-2 border-transparent hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]">Post New Blog</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
