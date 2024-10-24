import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function PublicationFee () {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <Navbar />
                <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                    <h2 className="text-[30px] leading-9 italic text-[#444444]">Publication Fee</h2>
                    <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                        <li className="hover:underline"><Link to="/">Home</Link></li>
                        <li><span> &gt;</span></li>
                        <li className="hover:underline"><Link to="/publicationfee">Publication Fee</Link></li>
                    </ul>

                </div>
                <section className="2xl:w-[64%] mx-auto bg-[#FCFCFC] md:flex justify-between w-[86%] mt-[70px] mb-10">
                    <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                        <strong className="text-[#800000]">Article Publishing Charge (APC)</strong>
                        <p className="text-[14px] leading-7 my-4">
                            As an open access journal with no subscription charges, a fee (Article Publishing Charge, APC) is payable by the authors, their institution or funders, to cover the costs associated with publication. This ensures your article will be immediately and permanently free to access by everyone.
                        </p>

                        <strong className="text-[#800000] my-4">The Article Publishing Charge for this journal is:</strong>
                        <ul className="flex flex-col gap-3 pl-[30px] md:pl-[40px] my-4 list-decimal">
                            <li>
                                N40,000 (Fifty thousand naira only) for national authors and $150 (One hundred dollars for authors outside Nigeria only) for manuscripts accepted after peer-review.                            
                            </li>
                            <strong className="text-[#800000]">Discounts and waivers</strong>
                            <p className="text-[14px] leading-6">
                            Authors are eligible for discount and waivers provided they produce evidence they are unable to pay APC
                            </p>
                        </ul>
                    </div>
                    <Widget />
                </section>
            <Footer />

            <Outlet />
        </>
    )
}