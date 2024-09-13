"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
    const links = <>
        <li className="bg-transparent mx-2 font-bold"><Link href={'/'}>Home</Link></li>
        <li className="bg-transparent mx-2 font-bold"><Link href={"/tending"}>Trending</Link></li>
        <li className="bg-transparent mx-2 font-bold"><Link href={"/category"}>Categories</Link></li>
        <li className="bg-transparent mx-2 font-bold"><Link href={"/about"}>About Us</Link></li>
        <li className="bg-transparent mx-2 font-bold"><Link href={"/contact"}>Contact</Link></li>
    </>
    const session = useSession();
    console.log(session);
    
    return (
        <div className="navbar bg-base-100 py-5">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session.data? <button onClick={() => signOut()} className='btn btn-outline'>LogOut</button>: 
                    <Link href={'/api/auth/signin'} className='btn btn-outline'>Login</Link>
                }
            </div>
        </div>
    )
}

export default Navbar
