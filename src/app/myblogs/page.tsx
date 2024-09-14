"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from 'react-toastify';

interface Blog {
    _id: string;
    title: string;
    thumbnail: string;
    post_date: string;
    category: string;
    blog_content: string;
    author_name: string;
}

const MyBlogPage = () => {
    const session = useSession();
    const [blogList, setBlogList] = useState([])
    const getMyBlogs = async () => {
        const res = await fetch(`http://localhost:3000/myblogs/api/${session?.data?.user?.email}`)
        const data = await res.json();
        console.log(data?.myBlogs);

        setBlogList(data?.myBlogs)
    }

    useEffect(() => {
        getMyBlogs()
    }, [session])

    const handleDelete = async (id: string) => {
        const res = await fetch(`http://localhost:3000/myblogs/api/deleteblog/${id}`)
        console.log(res);
        if(res.status === 200){
            toast.success("Hurrah")
        }        
    }
    return (
        <div className="z-0 mt-10 px-10 md:px-0 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold font-robo text-center mb-10">My Posted Blogs</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            blogList?.map((blog: Blog) => <tr key={blog._id}>
                                <td>
                                    <img src={blog.thumbnail} className="rounded-2xl w-16 h-16 object-center" />
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{blog.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{blog.post_date}</td>
                                <td>{blog.category}</td>
                                <th>
                                    <Link href={`/dashboard/update-blog/${blog._id}`} className="btn bg-[#4796c899] border-2 border-transparent text-[#2D3663] font-black text-lg 
                                    hover:bg-transparent hover:border-[#2D3663]">
                                        <FaRegEdit />
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(blog._id)} className="btn bg-red-600 border-2 border-transparent text-white font-black text-xl 
                                    hover:bg-transparent hover:border-red-600 hover:text-red-600">
                                        <MdOutlineDelete />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBlogPage
