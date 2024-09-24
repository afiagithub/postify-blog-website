"use client"
import SocialLogin from '@/components/SocialLogin';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    console.log(res);
    
    // if(res.status === 200){
    //   router.push('/')
    // }
    
  }
  return (
    <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 mb-10">
      <div className="mb-8 text-center">
        <h1 className="lg:mt-3 mb-3 text-4xl font-bold text-[#F59E0B]">Sign in</h1>
        <p className="text-sm dark:text-[#1F2937]">Sign in to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">Email address</label>
            <input type="email" name="email" placeholder="Your Email" required
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

        </div>
        <div className="space-y-2">
          <div>
            <input type="submit" value="Sign Up"
              className="w-full px-8 py-3 bg-[#1F2937] text-[#F59E0B] text-lg font-semibold rounded-xl 
                            border-2 border-[#1F2937] hover:border-[#F59E0B] hover:bg-transparent 
                            hover:text-[#F59E0B]" />
          </div>
          <p className="px-6 text-sm text-center dark:text-[#1F2937]">Don&apos;t have an account?
            <Link href={"/register"} className="hover:underline dark:text-[#F59E0B] font-bold">
              Sign Up</Link>.
          </p>
        </div>
      </form>

      <SocialLogin></SocialLogin>

    </div>
  )
}

export default SignIn
