import { getBlogDetails } from '@/services/getBlogs'
import Image from 'next/image';
import React from 'react'
import { IoIosBookmark } from "react-icons/io";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
    const blog = await getBlogDetails(params.id);
    const { title, thumbnail, blog_content, post_date, category, tags, author_name, author_image } = blog.blog;

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <Image src={thumbnail} alt="" className="object-cover" width={750} height={250} />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-5 items-center'>
                            <Image src={author_image} alt='author' className='rounded-full' width={50} height={50}></Image>
                            <p className="text-sm dark:text-gray-600">By
                                <span className="font-bold"> {author_name}</span> |
                                Date: <span className='font-bold'>{post_date}</span>
                            </p>
                        </div>
                        <p className="badge bg-[#1F2937] text-[#F59E0B] p-4 font-bold">{category}</p>
                    </div>
                    <div className="space-y-2 flex flex-row justify-between items-center">
                        <a href="#" className="inline-block text-2xl font-semibold sm:text-3xl font-play">{title}</a>
                        <button className='btn bg-[#F59E0B] text-lg text-[#1F2937] rounded-xl 
                            border-2 border-transparent hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]'><IoIosBookmark /></button>
                    </div>
                    <div className="">
                        <p>{blog_content}</p>
                    </div>
                    <div className='flex flex-row gap-3'>
                        {
                            tags.map((tag: string) => <p key={tag} className='badge badge-outline font-robo'>{tag}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
