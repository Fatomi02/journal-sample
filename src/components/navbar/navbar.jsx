import React from "react";
import logo from "../../assets/logos/pajols-logo.jpg";
import './navbar.css'

export default function Navbar () {
    return (<>
        <section className="w-full pt-1 section">
            <nav className="xl:w-[64%] mx-auto mt-3">
                <div className="flex align-middle gap-[20px] pl-[30px] lg:pl-0">
                    <img className="h-[120px] lg:h-[150px] md:mt-[15px] xl:mt-0 w-[135px] mx-[20px]" src={logo} alt="Logo" />
                    <div className="p-4 xl:w-[800px] hidden md:block">
                        <h1 className="text-[28px] lg:text-[36px]  lg:leading-[50px] mb-3 text-[#910506]">Pan African Journal of Life Sciences (PAJOLS)</h1>
                        <span className="font-medium text-[#910506] text-[14px] lg:text-[18px]"><i>A publication of Faculty of Basic Medical Sciences and Faculty of Basic Clinical Sciences,
                        Ladoke Akintola University of Technology, Ogbomoso</i></span>
                    </div>
                </div>
            </nav>
            <div className="nav-links-div">
                <div className="xl:w-[64%] hidden w-[full] lg:[80%] md:flex justify-center gap-4 mx-auto text-white">
                    <div className="active"><a className="w-[90px] h-[90px] flex flex-col text-center justify-center" href="/">Home</a></div>
                    <div className="hover">
                        <a className="w-[90px] h-[90px] flex flex-col text-center link justify-center" href="/">About us</a>
                        <div className="bg-[#910506] text-[16px] hidden sub_link w-[220px]">
                            <ul>
                                <li className="py-3 pl-4"><a href="/">Editor in chief</a></li>
                                <li className="py-3 pl-4"><a href="/">Editorial Board</a></li>
                                <li className="py-3 pl-4"><a href="/">Peer Review</a></li>
                                <li className="py-3 pl-4"><a href="/">Review's Guide</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hover">
                        <a className="w-[90px] h-[90px] flex flex-col text-center justify-center" href="/">Policy</a>
                        <div className="bg-[#910506] text-[16px] hidden sub_link w-[220px]">
                            <ul>
                                <li className="py-3 pl-4"><a href="/">Open Access</a></li>
                                <li className="py-3 pl-4"><a href="/">Editorial Policy</a></li>
                                <li className="py-3 pl-4"><a href="/">Publication Ethics</a></li>
                                <li className="py-3 pl-4"><a href="/">Digital Archive</a></li>
                                <li className="py-3 pl-4"><a href="/">Plagiarism Policy</a></li>
                                <li className="py-3 pl-4"><a href="/">Copyright</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hover">
                        <a className="w-[90px] h-[90px] flex flex-col text-center justify-center" href="/">Journal</a>
                        <div className="bg-[#910506] hidden sub_link w-[220px]">
                            <ul>
                                <li className="py-3 pl-4"><a href="/">Current</a></li>
                                <li className="py-3 pl-4"><a href="/">Archive</a></li>
                                <li className="py-3 pl-4"><a href="/">Author's Guide</a></li>
                                <li className="py-3 pl-4"><a href="/">Submission Guide</a></li>
                                <li className="py-3 pl-4"><a href="/">Indexing</a></li>
                                <li className="py-3 pl-4"><a href="/">Publication fee</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hover">
                        <a className="w-[90px] h-[90px] flex flex-col text-center justify-center" href="/">Contact us</a>
                    </div>
                </div>
            </div>
        </section>
    </>)
}