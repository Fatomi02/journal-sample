import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/ACTA-BIOSCIENTA.png";
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
                    <div className="w-full flex flex-col gap-2 items-center mb-10">
                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-8 items-center">
                            <img width={80} height={80} src={logo} alt="" />
                            <h2 className="font-bold text-[16px] text-center lg:text-start text-[#d80c6c]">Acta BioScientia - Journal of Biomedical <br /> and Biological Sciences</h2>
                        </div>
                    </div>
                    <p className="text-[14px] text-[#d80c6c] my-4 leading-7">
                        <strong>Abstracting and Indexing:</strong>
                    </p>
                    <ul>
                        <li className="text-[#d80c6c] cursor-pointer hover:underline">
                            <Link to="/indexing/cross-refs">CrossRef</Link>
                        </li>
                        <li className="text-[#d80c6c] cursor-pointer hover:underline">CiteFactor</li>
                        <li className="text-[#d80c6c] cursor-pointer hover:underline">Google Scholar</li>
                        <li className="text-[#d80c6c] cursor-pointer hover:underline">JournalSeek</li>
                        <li className="text-[#d80c6c] cursor-pointer hover:underline">JournalTOCs</li>
                        <li className="text-[#d80c6c] cursor-pointer hover:underline">ResearchBib</li>
                    </ul>
                </div>
                <Widget />
            </section>
            <Footer />
        </>
    )
}