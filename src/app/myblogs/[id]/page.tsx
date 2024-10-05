'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface IBlog {
    _id?: string;
    title?: string;
    thumbnail?: string;
    post_date?: string;
    category?: string;
    blog_content?: string;
    tags?: string[];
    comment_count?: number;
}

const UpdateBlog = ({ params }: { params: { id: string } }) => {
    const session = useSession();

    const [blogData, setBlogData] = useState<IBlog>({});

    const getBlogDetails = async () => {
        const res = await fetch(`https://postify-blog-website.vercel.app/blogs/api/${params.id}`)
        const data = await res.json();
        console.log(data?.blog);
        setBlogData(data.blog)
    }

    useEffect(() => {
        getBlogDetails()
    }, [params.id])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdate = async (event: any) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const category = form.category.value;
        const tags = form.tags.value;
        const image = form.image.value;
        const blog_content = form.blog_content.value;

        const updatedBlogData = {
            title,
            thumbnail: image,
            category,
            trending: false,
            sponsored: false,
            post_date: date,
            author_name: session?.data?.user?.name,
            author_email: session?.data?.user?.email,
            author_image: session?.data?.user?.image || 'https://i.ibb.co.com/QnTrVRz/icon.jpg',
            comment_count: blogData.comment_count,
            tags: tags.split(","),
            blog_content,
        }
        // console.log(newBlogData);

        const res = await fetch(`https://postify-blog-website.vercel.app/myblogs/api/updateblog/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedBlogData),
            headers: {
                "content-type": "application/json"
            }
        })
        if(res.status === 200){
            toast.success('Blog Updated Successfully')
        }
    }

    return (
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                <h1 className="text-3xl font-bold font-robo tracking-wider capitalize ">
                    Update your blog details
                </h1>

                <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Title</label>
                        <input name="title" type="text" defaultValue={blogData.title}
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Date</label>
                        <input name="date" type="text" defaultValue={blogData.post_date}
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 ">Category</label>
                        <select name="category" className='block w-full px-3 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg' value={blogData.category}>
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
                        <input name="tags" type="string" defaultValue={blogData.tags}
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg" />
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-600 ">Blog Thumbnail</label>
                        <input name="image" defaultValue={blogData.thumbnail} type="url"
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                bg-white border border-gray-200 rounded-lg " />
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-2 text-sm text-gray-600 ">Blog Content</label>
                        <textarea name="blog_content" rows={5} value={blogData.blog_content}
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 
                                    bg-white border border-gray-200 rounded-lg"></textarea>
                    </div>
                    <button className="btn col-span-2 bg-[#F59E0B] text-[#1F2937] text-lg font-semibold rounded-xl 
                            border-2 border-transparent hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]">Update Blog Details</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBlog
