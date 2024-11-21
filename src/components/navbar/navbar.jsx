import React from "react";
import logo from "../../assets/logos/ACTA-BIOSCIENTA.png";
import './navbar.css'
import { Link, Outlet } from "react-router-dom";

export default function Navbar () {
    return (<>
        <section className="w-full pt-1 section">
            <nav className="xl:w-[64%] mx-auto mt-3">
                <div className="flex items-center gap-[20px] pl-[30px] lg:pl-0">
                    <img className="h-[130px] w-[125px] lg:h-[150px] md:mt-[15px] xl:mt-0 md:w-[135px] mx-[20px]" src={logo} alt="Logo" />
                    <div className="pl-4 xl:w-[800px] hidden md:block">
                        <h1 className="text-[28px] lg:text-[30px] xxl:text-[36px]  lg:leading-[40px] mb-3 text-[#d80c6c]">Acta BioScientia</h1>
                        <span className="font-medium text-[#d80c6c]"><i className="text-[14px] lg:text-[16px]">Journal of Biomedical and Biological Sciences</i></span>
                    </div>
                </div>
            </nav>
            <div className="nav-links-div">
                <div className="hidden w-[full] md:flex justify-center gap-4 text-white">
                    <div className="active"><Link className="w-[90px] h-[70px] flex flex-col text-center justify-center" to="/">Home</Link></div>
                    <div className="hover">
                        <a className="w-[90px] h-[70px] flex flex-col text-center link justify-center" href="/">About us</a>
                        <div className="bg-[#d80c6c] text-[14px] hidden sub_link w-[220px]">
                            <ul>
                                <li className="py-3 pl-4"><Link to="/">Editor in chief</Link></li>
                                <li className="py-3 pl-4"><Link to="/editorial-in-board">Editorial Board</Link></li>
                                <li className="py-3 pl-4"><Link to="/peer-review">Peer Review</Link></li>
                                <li className="py-3 pl-4"><a href="/">Review's Guide</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hover">
                        <a className="w-[90px] h-[70px] flex flex-col text-center justify-center" href="/">Policy</a>
                        <div className="bg-[#d80c6c] text-[14px] hidden sub_link w-[220px]">
                            <ul>
                                <li className="py-3 pl-4"><Link to="/open-access-policy">Open Access</Link></li>
                                <li className="py-3 pl-4"><Link to="/editorialpolicy">Editorial Policy</Link></li>
                                <li className="py-3 pl-4"><Link to="/publicationethics">Publication Ethics</Link></li>
                                <li className="py-3 pl-4"><Link to="/digitalarchive">Digital Archive</Link></li>
                                <li className="py-3 pl-4"><Link to="/plagiarism">Plagiarism Policy</Link></li>
                                <li className="py-3 pl-4"><Link href="/copyright">Copyright</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hover">
                        <a className="w-[90px] h-[70px] flex flex-col text-center justify-center" href="/">Journal</a>
                        <div className="bg-[#d80c6c] hidden sub_link w-[220px]">
                            <ul>
                                <li className="py-3 pl-4"><a href="/">Current</a></li>
                                <li className="py-3 pl-4"><Link to="/archive">Archive</Link></li>
                                <li className="py-3 pl-4"><Link to="/authorsguide">Author's Guide</Link></li>
                                <li className="py-3 pl-4"><Link to="/submissionguide">Submission Guide</Link></li>
                                <li className="py-3 pl-4"><a href="/">Indexing</a></li>
                                <li className="py-3 pl-4"><Link to="/publicationfee">Publication fee</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hover">
                        <span className="w-[90px] h-[70px] flex flex-col text-center justify-center"><Link to="/contactus">Contact us</Link></span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <input type="search" className="px-3 py-1 outline-none border-[4px] rounded-md border-[#f6f6f6] focus:bg-[#d1e4f0]" placeholder="Enter your search" />
                    <button className="py-3 px-4 bg-[#e67817] text-white rounded-md">Search</button>
                </div>
            </div>
        </section>

        <Outlet />
    </>)
}