import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function Copyright() {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
        <Navbar />
            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Copyright</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline"><Link to="/copyright">Copyright</Link></li>
                </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                    <ul className="list-disc flex flex-col gap-3 pl-[30px] md:pl-[40px]">
                        <li>Copyright on any open access article in a journal published by PAJOLS is retained by the author(s).</li>
                        <li>Authors grant PAJOLS a license to publish the article and identify itself as the original publisher.</li>
                        <li>Authors also grant any third party the right to use the article freely as long as its integrity is maintained and its original authors, citation details, and publisher are identified.</li>
                        <li>The Creative <a className="text-[#800000] font-medium" href="https://creativecommons.org/licenses/by/4.0/">Commons Attribution License 4.0</a> formalizes these and other terms and conditions of publishing articles.</li>
                    </ul>

                    <p className="text-[14px] leading-7 mt-4">Where an author is prevented from being the copyright holder (for instance in the case of US government employees or those of Commonwealth governments), minor variations may be required. Authors requiring a variation of this type should <a className="text-[#800000] font-medium" href="/">inform PAJOLS</a> during or immediately after submission of their article. Changes to the copyright line cannot be made after publication of an article.</p>
                </div>
                <Widget />
            </section>
        <Footer />

        <Outlet />
    </>
    )
}