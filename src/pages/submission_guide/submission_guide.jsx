import React, { useEffect } from 'react';
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function SubmissionGuide () {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <Navbar />
                <div className="w-full mt-[240px] md:mt-[270px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                    <h2 className="text-[30px] leading-9 italic text-[#444444]">Submission Guide</h2>
                    <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                        <li className="hover:underline"><Link to="/">Home</Link></li>
                        <li><span> &gt;</span></li>
                        <li className="hover:underline"><Link to="/submissionguide">Submission Guide</Link></li>
                    </ul>

                </div>
                <section className="2xl:w-[64%] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                    <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[16px] mt-[-36px] leading-7">
                        <strong className="text-[#800000]">Preparation Checklist</strong>
                        <p className="text-[16px] leading-7">
                            As a part of the submission process, authors are required to check off their submission’s compliance with all of the following items, and submissions may be returned to authors that do not adhere to these guidelines. <br />
                            The submission has not been previously published, nor is it before another journal for consideration (or an explanation has been provided in Comments to the Editor). <br />
                            The submission file is in Microsoft Word document file format. <br />
                            Where available, URLs for the references have been provided. <br />
                            The text is 1.5 line spaced; uses a 12-point font; employs italics, rather than underlining (except with URL addresses); and all illustrations, figures, and tables are submitted as a separate file. The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines.                       
                        </p>

                        <strong className="text-[#800000] mb-2">Requirements</strong>
                        <p className="text-[16px] leading-7">All submissions should be prepared with the following files and submitted via our online system</p>
                        <ol className="list-decimal flex flex-col gap-3 pl-[30px] md:pl-[40px]">
                            <li><b>Cover letter:</b> which would include a concise summary of why your paper is a valuable addition to the scientific literature and a brief relation of your study to previously published works.</li>
                            <li><b>Full text:</b> The full text should be prepared following the formatting style of PAJOLS as described in manuscript organization section. Well prepared tables, figures and other illustrations can placed in the appropriate section where they are mentioned in the manuscript or at the end after references.</li>
                        </ol>

                        <h4 className="text-[#800000] font-bold text-center my-3">MANUSCRIPT ORGANIZATION</h4>

                        <strong className="text-[#800000] text-center mb-2">Original Articles</strong>
                        <p className="text-[16px] leading-7">
                            Should be about 4000 words and organized in the following sections: Title page, abstract (not to exceed 350 words), Introduction, Methodology, Results, Discussion, Conclusion, Acknowledgments, References (not to exceed 50), Figures, Figure Legends, Tables & captions, Authors’ Should describe case diagnosis and investigations or treatments which are of exceptional interest, highlighting novel and important findings. Please refer to the short communications section for length and other specifications.
                        </p>
                        <strong className="text-[#800000] text-center mb-2">Letter to the editor</strong>
                        <p className="text-[16px] leading-7">
                            Should not exceed a total 1,200 words. References (not to exceed 10), figures and tables together should not be more than 2. Subdivisions of sections are not needed. Letters to the editor are generally updates on recent trends and research, but may also respond to recent articles published in PAJOLS.                       
                        </p>
                        <strong className="text-[#800000] text-center mb-3">Reviews</strong>
                        <p className="text-[16px] leading-7 mb-4">
                            Should be related to the scope of PAJOLS which are of broad interest to the target audience of the journal. These are usually invited, but authors identifying a need and wishing to submit a review article are welcome to contact the Editorial Office. Authors are advised to contact the Editorial Office before commencement of writing to ensure that a similar topic has not already been given to another author                        
                        </p>
                        <strong className="text-[#800000] text-center mb-4">Short Communication</strong>
                        <p className="text-[16px] leading-7 mb-5">
                            Should not exceed a total of 2500 words, including an abstract (not to exceed 250 words), references (not to exceed 20), figures (not more than 2), and tables (not to exceed 2). Subdivisions of sections are encouraged to help orient the reader.                        
                        </p>
                        <strong className="text-[#800000] text-center my-2">Case reports</strong>
                        <p className="text-[16px] leading-7">
                            Should describe case diagnosis and investigations or treatments which are of exceptional interest, highlighting novel and important findings. Please refer to the short communications section for length and other specifications.                        
                        </p>
                    </div>
                    <Widget />
                </section>
            <Footer />

            <Outlet />
        </>
    )
}