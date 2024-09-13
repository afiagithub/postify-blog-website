"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { toast } from 'react-toastify';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        const conPass = event.target.conpass.value;
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            // return;
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
            toast.error("Password must have a uppercase and a lowercase letter");
            return;
        }
        else if (password !== conPass) {
            toast.error("Password does not match Confirm Password");
            return;
        }
    }
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 mb-10">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-[#F59E0B]">Register</h1>
                <p className="text-sm dark:text-[#1F2937]">Create your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="name" placeholder="Leroy Jenkins"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="leroy@jenkins.com"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-sm">Photo URL</label>
                        <input type="text" name="photo"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className="relative">
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Password</label>
                        </div>
                        <input type={show ? "text" : "password"} name="password" placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        <div className="absolute top-10 right-4 text-lg" onClick={handleToggle}>
                            {show ? <FaEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Confirm Password</label>
                        </div>
                        <input type="password" name="conpass" placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    
                </div>
                <div className="space-y-2">
                    <div>
                        <input type="submit" value="Sign Up"
                            className="w-full px-8 py-3 bg-[#1F2937] text-[#F59E0B] text-lg font-semibold rounded-xl 
                            border-2 border-[#1F2937] hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]" />
                    </div>
                    <p className="px-6 text-sm text-center dark:text-[#1F2937]">Already have an account?
                        <Link href={"/login"} className="hover:underline dark:text-[#F59E0B] font-bold">
                            Sign in</Link>.
                    </p>
                </div>
            </form>

        </div>
    )
}

export default SignUp
