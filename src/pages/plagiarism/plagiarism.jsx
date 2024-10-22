import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";


export default function Plagiarism () {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <Navbar />
            <div className="w-full mt-[240px] md:mt-[270px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Plagiarism</h2>
                    <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                        <li className="hover:underline"><Link to="/">Home</Link></li>
                        <li><span> &gt;</span></li>
                        <li className="hover:underline"><Link to="/plagiarism">Plagiarism</Link></li>
                    </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                    PAJOLS take issues of copyright infringement, plagiarism or other breaches of best practice in publication very seriously. 
                    We seek to protect the rights of our authors and we always investigate claims of plagiarism or misuse of published articles. 
                    Equally, we seek to protect the reputation of the journal against malpractice. Submitted articles will be checked with plagiarism software. 
                    Where an article, for example, is found to have plagiarized other work or included third-party copyright material without permission or with insufficient 
                    acknowledgement, or where the authorship of the article is contested, we reserve the right to take action including, but not limited to: 
                    publishing an erratum or corrigendum (correction); retracting the article; taking up the matter with the head of department or dean of the author's institution 
                    and/or relevant academic bodies or societies; or taking appropriate legal action.
                </div>
                <Widget />
            </section>
            <Footer />

            <Outlet />
        </>
    )
}