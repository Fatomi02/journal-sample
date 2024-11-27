import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function Indexing() {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
        <Navbar />
            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Indexing</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline"><Link to="/indexing">Indexing</Link></li>
                </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                <p className="text-[14px] text-[#d80c6c] my-4 leading-7">
                    <strong>Abstracting and Indexing:</strong> 
                </p>
                <ul>
                    <li className="text-[#d80c6c]">CrossRef</li>
                    <li className="text-[#d80c6c]">CiteFactor</li>
                    <li className="text-[#d80c6c]">Google Scholar</li>
                    <li className="text-[#d80c6c]">JournalSeek</li>
                    <li className="text-[#d80c6c]">JournalTOCs</li>
                    <li className="text-[#d80c6c]">ResearchBib</li>
                </ul>
                </div>
                <Widget />
            </section>
        <Footer />

        <Outlet />
    </>
    )
}