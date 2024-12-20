import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Widget () {
    return (
        <>
            <div className="w-full mt-[50px] bg-[#FCFCFC] md:mt-0 md:w-[23%]">
                <div className="text-[#d80c6c] font-semibold  selection:text-white">
                    <ul>
                        <li className="py-[2px] hover:underline"><Link to="/submitpage">Submit Article</Link></li>
                        <li className="py-[2px] hover:underline"><Link to="/submissionguide">Submission Guide</Link></li>
                        <li className="py-[2px] hover:underline"><Link to="/plagiarism">Plagiarism</Link></li>
                        <li className="py-[2px] hover:underline"><Link to="/editorialpolicy">Editorial Policy</Link></li>
                        <li className="py-[2px] hover:underline"><Link to="/publicationfee">Publication fee</Link></li>
                    </ul>
                </div>

                {/* <button className="w-full py-3 bg-[#e67817] text-[18px] text-white mt-[50px] mb-[40px]">Archive</button> */}

                {/* <div className="flex flex-col gap-4 text-[#d80c6c]">
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

                </div> */}

                {/* <div className="mt-14">
                    <span className="text-[#626262]">... click <a href="/" className="text-[#d80c6c] hover:underline">here</a> for more</span>
                </div> */}

            </div>
            <Outlet />
        </>
    )
}