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
                    <li className="hover:underline"><Link to="/digitalarchive">Editorial Policy</Link></li>
                </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                    Any manuscript submitted to the PAJOLS must not be under consideration by any other journal or already published in any journal or other citable form. 
                    Submission of a manuscript implies that all authors have read and agreed to its final content and take responsibility for their reported findings. 
                    Authors are expected to indicate that the study (where applicable) has been carried out with the approval of an appropriate ethical review committee. 
                    Additionally, all research carried out on humans must be in compliance with the Helsinki Declaration, and animal studies must follow internationally 
                    recognized guidelines. The authors are expected to include a statement to this effect in the Methodology section of the manuscript. 
                    The name of the ethical review committee’s approval body should also be provided. Informed consent for participation in the study and the use of clinical 
                    photographs of individual patients must also be documented. Manuscripts submitted by authors from pharmaceutical companies or commercial organizations 
                    that sponsor clinical trials, as well as those from individuals and companies working on industry-sponsored research, should adhere to the Good Publication 
                    Practice guidelines for pharmaceutical companies. These guidelines are designed to uphold responsible and ethical standards in the reporting of 
                    industry-sponsored clinical trials and research.
                </div>
                <Widget />
            </section>
        <Footer />

        <Outlet />
    </>
    )
}