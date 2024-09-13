"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { toast } from 'react-toastify';

const SignUp = () => {
    interface User {
        name: string;
        email: string;
        image?: string;
        password: string;
    }
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const image = event.target.photo.value;
        const password = event.target.password.value;
        const conPass = event.target.conpass.value;      
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
            toast.error("Password must have a uppercase and a lowercase letter");
            return;
        }
        else if (password !== conPass) {
            toast.error("Password does not match Confirm Password");
            return;
        }

        const newUser: User = {
            name,
            email,
            image,
            password
        }
        console.log(newUser);
        const res = await fetch('http://localhost:3000/register/api', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })

        console.log(res);
        
        
    }
    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 mb-10">
            <div className="mb-8 text-center">
                <h1 className="lg:mt-3 mb-3 text-4xl font-bold text-[#F59E0B]">Register</h1>
                <p className="text-sm dark:text-[#1F2937]">Create your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="name" placeholder="Your Name" required
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="Your Email" required
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-sm">Photo URL</label>
                        <input type="text" name="photo" placeholder='Your Photo URL'
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className="relative">
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Password</label>
                        </div>
                        <input type={show ? "text" : "password"} name="password" placeholder="*****" required
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        <div className="absolute top-10 right-4 text-lg" onClick={handleToggle}>
                            {show ? <FaEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Confirm Password</label>
                        </div>
                        <input type="password" name="conpass" placeholder="*****" required
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
