import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function EditorialPolicy() {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
        <Navbar />
            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Editorial Policy</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline"><Link to="/editorialpolicy">Editorial Policy</Link></li>
                </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                <p className="text-[14px] my-4 leading-7">
                All manuscript submitted to <strong>Acta BioScientia</strong> must not have been published (either partly or as a whole) prior to submission; nether must it be under consideration for publication elsewhere. <strong>Acta BioScientia</strong> will however consider manuscripts that have been deposited in preprint servers or published in institutional repositories. Works that have been presented at conferences would also be considered. 
                </p>
                <p className="text-[14px] my-4 leading-7">Submission of a manuscript clearly indicates that all authors have granted permissions to publish it. author (corresponding author) is however responsible for ensuring that the article's publication has been approved by all co-authors.</p>
                <strong>Confidentiality</strong>
                <p className="text-[14px] my-4 leading-7">Editors and reviewers would treat all manuscripts submitted to <strong>Acta BioScientia</strong> with utmost confidentiality.</p>
                </div>
                <Widget />
            </section>
        <Footer />

        <Outlet />
    </>
    )
}