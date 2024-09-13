"use client"
import { signOut, useSession } from 'next-auth/react'
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
                    session.data? <button onClick={() => signOut()} className='btn bg-[#F59E0B] text-[#1F2937] text-lg font-semibold rounded-xl 
                            border-2 border-[#1F2937] hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]'>LogOut</button>: 
                    <Link href={'/login'} className='btn bg-[#F59E0B] text-[#1F2937] text-lg font-semibold rounded-xl 
                            border-2 border-[#1F2937] hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]'>Login</Link>
                }
            </div>
        </div>
    )
}

export default Navbar
