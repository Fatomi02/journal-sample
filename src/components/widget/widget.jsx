import React from "react";

export default function Widget () {
    return (
        <>
            <div className="w-full mt-[50px] md:mt-0 md:w-[23%]">
                <div className="text-[#910506] font-semibold selection:bg-[#910506] selection:text-white">
                    <ul>
                        <li className="py-[2px]"><a className="hover:underline" href="/">Submit Article</a></li>
                        <li className="py-[2px]"><a className="hover:underline" href="/">Submission Guide</a></li>
                        <li className="py-[2px]"><a className="hover:underline" href="/">Author's Guide</a></li>
                        <li className="py-[2px]"><a className="hover:underline" href="/">Plagiarism</a></li>
                        <li className="py-[2px]"><a className="hover:underline" href="/">Editorial Policy</a></li>
                        <li className="py-[2px]"><a className="hover:underline" href="/">Publication fee</a></li>
                    </ul>
                </div>

                <button className="w-full py-3 bg-[#007dc2] text-[18px] text-white mt-[50px] mb-[20px]">Search</button>
                <input type="search" className="w-full px-3 py-2 outline-none border-[4px] border-[#f6f6f6] focus:bg-[#d1e4f0]" placeholder="Enter your search" />

                <button className="w-full py-3 bg-[#e67817] text-[18px] text-white mt-[50px] mb-[40px]">Archive</button>

                <div className="flex flex-col gap-4 text-[#910506]">
                    <div>
                        <label className="font-semibold">Volume 8 (2024)</label>
                        <div className="w-full bg-[rgba(0,0,0,.03)]">
                            <ul className="py-3 list-disc">
                                <li className="ml-8 py-1"><a className="hover:underline" href="/">Issue 1</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold">Volume 7 (2023)</label>
                        <div className="w-full bg-[rgba(0,0,0,.03)]">
                            <ul className="py-3 list-disc">
                                <li className="ml-8 py-2"><a className="hover:underline" href="/">Issue 1</a></li>
                                <li className="ml-8 py-2"><a className="hover:underline" href="/">Issue 2</a></li>
                                <li className="ml-8 py-2"><a className="hover:underline" href="/">Issue 3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold">Volume 6 (2022)</label>
                        <div className="w-full bg-[rgba(0,0,0,.03)]">
                            <ul className="py-3 list-disc">
                                <li className="ml-8 py-2"><a className="hover:underline" href="/">Issue 1</a></li>
                                <li className="ml-8 py-2"><a className="hover:underline" href="/">Issue 2</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="mt-14">
                    <span className="text-[#626262]">... click <a href="/" className="text-[#910506] hover:underline">here</a> for more</span>
                </div>

            </div>
        </>
    )
}