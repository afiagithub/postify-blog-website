"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const links = <>
        <li className="bg-transparent mx-2 font-bold"><a href={'/'} className='text-[#F59E0B]'>Home</a></li>
        <li className="bg-transparent mx-2 font-bold"><a href={"/tending"}>Trending</a></li>
        <li className="bg-transparent mx-2 font-bold"><a href={"/category"}>Categories</a></li>
        <li className="bg-transparent mx-2 font-bold"><a href={"/about"}>About Us</a></li>
        <li className="bg-transparent mx-2 font-bold"><a href={"/contact"}>Contact</a></li>
    </>
    const session = useSession();
    console.log(session);

    return (
        <div className="navbar bg-[#1F2937] py-5 px-6 lg:px-10 text-[#F59E0B]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="buthrefn" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#F59E0B]">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost text-xl">Postify</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session.status === 'loading' && <h3 className='text-lg'>Loading</h3>
                }
                {
                    session.status === 'unauthenticated' &&
                    <Link href={'/login'} className='btn bg-[#F59E0B] text-[#1F2937] text-lg font-semibold rounded-xl 
                            border-2 border-[#1F2937] hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]'>Login</Link>
                }
                {
                    session.status === 'authenticated' &&
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src={session?.data?.user?.image || 'https://i.ibb.co.com/QnTrVRz/icon.jpg'} alt={session?.data?.user?.name || 'John Doe'}
                                    height={50} width={50} className='rounded-full'></Image>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 
                            w-52 p-2 shadow space-y-2 text-[#1F2937]">
                            <li className='font-semibold'>Hello, <span className='text-[#F59E0B]'>{session?.data?.user?.name}</span></li>
                            <li>
                                <Link href={'/createblog'} className="justify-between font-semibold">
                                    Create New Blog
                                </Link>
                            </li>
                            <li>
                                <Link href={'/myblogs'} className="justify-between font-semibold">
                                    My Blog Posts
                                </Link>
                            </li>
                            <li>
                                <a className="justify-between font-semibold">
                                    My Reading List
                                </a>
                            </li>
                            <li>
                                <button onClick={() => signOut()} className='btn bg-[#F59E0B] text-sm text-[#1F2937] font-semibold rounded-xl 
                            border-2 border-transparent hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]'>LogOut</button>
                            </li>
                        </ul>
                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar
