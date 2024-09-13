import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-8 md:mt-10 lg:mt-12 py-5 md:py-8 lg:py-10 bg-[#1F2937] text-[#6B7280]">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <a href="#" className="text-[#F59E0B] font-bold text-2xl">
                                Postify
                            </a>

                            <p className="max-w-sm mt-2">
                                Stay Connected with VitalCare for the best diagnostic services to support your well-being
                            </p>

                            <div className="flex mt-6 -mx-2 text-xl gap-5">
                                <a data-tooltip-id="fb-page" data-tooltip-content="https://www.facebook.com/vitalcare"
                                    data-tooltip-place="bottom">
                                    <FaFacebookF />
                                </a>
                                {/* <Tooltip id="fb-page" /> */}

                                <a data-tooltip-id="twitter-page" data-tooltip-content="https://www.twitter.com/vitalcare"
                                    data-tooltip-place="bottom">
                                    <FaTwitter />
                                </a>
                                {/* <Tooltip id="twitter-page" /> */}

                                <a data-tooltip-id="instagram-page" data-tooltip-content="https://www.instagram.com/vitalcare"
                                    data-tooltip-place="bottom">
                                    <FaInstagram />
                                </a>
                                {/* <Tooltip id="instagram-page" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h3 className="text-[#F59E0B] uppercase font-bold">Pages</h3>
                                <a href="/doctors" className="block mt-2 text-sm hover:underline">Trending</a>
                                <a href="/all-tests" className="block mt-2 text-sm hover:underline">Category</a>
                                <a href="/packages" className="block mt-2 text-sm hover:underline">About Us</a>
                            </div>

                            <div>
                                <h3 className="text-[#F59E0B] uppercase font-bold">Company</h3>
                                <a href="#" className="block mt-2 text-sm hover:underline">Terms of use</a>
                                <a href="#" className="block mt-2 text-sm hover:underline">Privacy policy</a>
                                <a href="#" className="block mt-2 text-sm hover:underline">Cookie policy</a>
                            </div>

                            <div>
                                <h3 className="text-[#F59E0B] uppercase font-bold">Contact</h3>
                                <span className="block mt-2 text-sm hover:underline">+1 234 567 999</span>
                                <span className="block mt-2 text-sm hover:underline">postify@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none" />

                <div>
                    <p className="text-center text-gray-500 ">© VitalCare 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
