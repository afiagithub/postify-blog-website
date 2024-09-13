"use client"
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from 'next-auth/react';

const SocialLogin = () => {
    const handleSocialLogin = async (provider: string) => {
        const res = await signIn(provider, {redirect: false})        
    }
    return (
        <div>
            <div className="mt-5 flex flex-row items-center gap-4">
                <hr className="flex-grow" />
                <p className="text-[#2D3663]">Or Sign In Using</p>
                <hr className="flex-grow" />
            </div>
            <div className="mt-5 flex flex-row items-center justify-center gap-5 ">
                <button onClick={() => handleSocialLogin('google')} className="py-3">
                    <FcGoogle className="text-2xl" />
                </button>
                <button onClick={() => handleSocialLogin('github')} className="py-3">
                    <FaGithub className="text-2xl" />
                </button>
            </div>
        </div>
    )
}

export default SocialLogin
