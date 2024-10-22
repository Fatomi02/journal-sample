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
                <div className="w-full mt-[240px] md:mt-[270px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                    <h2 className="text-[30px] leading-9 italic text-[#444444]">Publication Fee</h2>
                    <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                        <li className="hover:underline"><Link to="/">Home</Link></li>
                        <li><span> &gt;</span></li>
                        <li className="hover:underline"><Link to="/publicationfee">Publication Fee</Link></li>
                    </ul>

                </div>
                <section className="2xl:w-[64%] mx-auto bg-[#FCFCFC] md:flex justify-between w-[86%] mt-[70px] mb-10">
                    <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                        <strong className="text-[#800000]">ARTICLE PROCESSING CHARGE</strong>
                        <p className="text-[14px] leading-7">
                            PAJOLS publishes all its journals in full open access under a Creative Commons (CC BY) license. This allows the scientific community and the general public to gain unlimited, free and immediate access to scholarly articles, and to reuse the content freely provided that proper attribution is given to the original authors.
                        </p>
                        <p className="text-[14px] leading-7 my-6">To cover the cost for providing our high-quality publishing service and free access to readers, authors pay a one-time article processing charge (APC) of N50,000 (Fifty thousand naira only) for national authors and $200 (Two hundred dollars) for authors outside Nigeria for manuscripts accepted after peer-review. The major factor that will determine national or international author Is the corresponding author. </p>
                        <p className="text-[14px] leading-7 mb-6">There are no charges for rejected articles, no submission charges, and no surcharges based on the length of an article, figures or supplementary data. Editorial items (Editorials, Corrections, Additions, Retractions, Letters, Comments, etc.) are published free of charge.</p>

                        <strong className="text-[#800000] mb-2">APCs cover the following:</strong>
                        <ul className="list-disc flex flex-col gap-3 pl-[30px] md:pl-[40px]">
                            <li>The editorial procedure, including administration related to peer review, author revisions, and final decision-making. PAJOLS make use of in-house staff to manage the majority of this process, leaving editorial board members to make key scientific decisions and allowing them to concentrate on their research.</li>
                            <li>Article production: Language editing, type-setting, formatting, and production in PDF,</li>
                            <li>Article hosting and dissemination: website maintenance, contact with indexing databases.</li>
                            <li>Journal administration: including managing the journal website and editorial board, and promotion of the journal among the research community.</li>
                        </ul>
                    </div>
                    <Widget />
                </section>
            <Footer />

            <Outlet />
        </>
    )
}