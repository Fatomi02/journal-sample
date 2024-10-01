import React from "react";
import banner from '../../assets/images/MYJOBMYLIFE-NEWsd-300x120.jpg'
import Scope from '../../assets/images/PAN-AFRICA-7.jpg'
import access from '../../assets/images/Open access.jpg'
import ethics from '../../assets/images/ethics.jpg'
import manuscript from '../../assets/images/submission.jpg'
import Widget from "../widget/widget";


export default function Body () {
    return (<>
        <section className="2xl:w-[64%] w-[86%] mt-[310px] relative z-0 mx-auto md:flex justify-between mb-10">
            <div className="w-full md:w-[75%]">
                <div className="index">
                    <img className="md:w-[90%] w-full h-[150px] md:h-[280px] xxl:h-[400px]" src={banner} alt="Banner" />
                </div>
                <div className="py-6">
                    <p className="text-justify text-[16px] selection:bg-[#910506] selection:text-white leading-[28px] text-[#626262] mb-[10px]">
                        <span><strong>Acta BioScientia: Journal of Biomedical and Biological Sciences</strong> is a Biomedical Science Journal of the Behavioural Neuroscience Research Group, Ladoke Akintola University of Technology (Print ISSN-------- and Online ISSN----------) that is domiciled in the Department of Pharmacology and Therapeutics, Clinical Sciences Building, College of Health Sciences, Ladoke Akintola University of Technology. </span>
                    </p>
                    <p className="text-justify text-[16px] selection:bg-[#910506] selection:text-white text-[#626262]  leading-[28px] mb-[10px]">
                        <span><strong>Acta BioScientia</strong> is a Multidisciplinary Open-access, Peer-reviewed Journal which publishes full-length, original research articles, reviews, preliminary communications and letters to the editor that fall within the general scope of Biomedical and Biological Sciences. </span>
                    </p>
                    <p className="text-justify text-[16px] selection:bg-[#910506] selection:text-white text-[#626262]  leading-[28px] mb-[30px]">
                        <span>Brief and full reports of meetings, symposia and conferences are also considered for publication. The journal also promotes the publication of high quality, cutting-edge translational research.</span>
                    </p>

                    {/* <h5 className="font-semibold text-[15px] text-[#910506]">A publication of Faculty of Basic Medical Sciences and Faculty of Basic Clinical Sciences, Ladoke Akintola University of Technology, Ogbomoso</h5> */}

                    <div className="mt-[20px] md:mt-[60px] justify-between md:flex">
                        <div className="w-full md:w-[40%]">
                            <img className="w-full" src={Scope} alt="" />
                        </div>
                        <div className="w-full pt-[10px] md:w-[56%]">
                            <span className="text-[20px] lg::text-[39px] selection:bg-[#910506] selection:text-white font-normal mb-[22px] text-[#800000]">Aim & Scope</span>
                            <p className="text-justify flex flex-col gap-3 mt-[10px] md:mt-0 text-[14px] xl:text-[16px] selection:bg-[#910506] selection:text-white text-[#626262] mb-[35px] leading-[28px]">
                                <span>The aim of <strong>Acta BioScientia</strong> is to enhance the publication of biomedical and biological science research data by researchers from resource-poor and developing economies; whilst also elevating our understanding of the unique challenges that are faced by researchers from these communities.</span> 
                                <span><strong>Acta BioScientia</strong> is an institutional Journal that is published Thrice annually and provides readers with an array of titles that include <b>original reports</b> that address current and trending research in the Biomedical and Biological Science research, <b>review articles</b> (written by experts and early career researchers) addressing topics of general interest and importance, <b>short reports</b> (including case reports, commentaries, editorials, conference proceedings) and <b>letter to the editor</b> which project burning issues. Privilege is given to <b>invited reviews</b> and <b>perspective papers.</b> The Journal is committed to a prompt review process with timely publication of all accepted manuscripts. </span>
                            </p>

                            {/* <span className="text-[16px] md:text-[24px]">Current Issue can be assess by clicking <a className="text-[#800000] font-semibold" href="/">here</a></span> */}
                        </div>
                    </div>
                </div>

                <h2 className="text-[18px] md:text-[32px] text-[#910506] selection:bg-[#910506] selection:text-white font-bold mb-[15px]">WHY PUBLISH WITH US</h2>
                <ul className="text-[14px] md:text-[16px] list-disc flex flex-col gap-[15px] selection:bg-[#910506] selection:text-white pl-[30px]">
                    <li>EUser friendly Manuscript submission system</li>
                    <li>Prompt and Concise Editorial Review </li>
                    <li>Thorough peer review process</li>
                </ul>

                <div className="md:flex-row flex flex-col gap-[30px] w-[96%] md:w-full mt-[40px] mx-auto">
                    <div className="w-full md:w-[320px] mx-auto">
                        <img className="w-[full] h-[220px]" src={access} alt="" />
                        <div className="lg:ml-[64px] mt-[20px] flex flex-col gap-[15px]">
                            <span className="text-[24px] text-[#e67817] font-medium selection:bg-[#910506] selection:text-white">Open Access</span>
                            <span className="selection:bg-[#910506] text-[18px] leading-7 text-[#626262] selection:text-white">The basic idea of open access is to make copyright-able works available without all</span>
                            <button className="bg-[#e67817] py-3 hover:text-[#626262] px-5 text-center w-full text-[white]">Read more</button>
                        </div>
                    </div>
                    <div className="w-full md:w-[320px] mx-auto">
                        <img className="w-[full] h-[220px]" src={ethics} alt="" />
                        <div className="lg:ml-[64px] mt-[20px] flex flex-col gap-[15px]">
                            <span className="text-[24px] text-[#00923f] font-medium selection:bg-[#910506] selection:text-white">Publication Ethics</span>
                            <span className="selection:bg-[#910506] text-[18px] leading-7 text-[#626262] selection:text-white">Acta BioScientia adheres to the highest standards of publishing ethics, with rigorous processes in place to ensure this is achieved</span>
                            <button className="bg-[#00923f] py-3 px-5 text-center hover:text-[#626262] w-full text-[white]">Read more</button>
                        </div>
                    </div>
                    <div className="w-full md:w-[320px] mx-auto">
                        <img className="w-[full] h-[220px]" src={manuscript} alt="" />
                        <div className="lg:ml-[64px] mt-[20px] flex flex-col gap-[15px]">
                            <span className="text-[24px] text-[#007dc2] font-medium selection:bg-[#910506] selection:text-white">Submission</span>
                            <span className="selection:bg-[#910506] text-[18px] leading-7 text-[#626262] selection:text-white">The basic idea of open access is to make copyright-able works available without all</span>
                            <button className="bg-[#007dc2] py-3 px-5 text-center hover:text-[#626262] w-full text-[white]">Read more</button>
                        </div>
                    </div>
                </div>

                <div className="text-[24px] mt-[30px] text-white w-full py-2 bg-[#910506] flex justify-center mb-[20px]">Creative Commons</div>

                <span className="text-[14px] leading-6 md:text-[16px] selection:bg-[#910506] selection:text-white md:leading-9">Creative Commons provides option to choose which rights one want to control and want to grant to others with respect to ones publication. They do not replace copyright, but are based upon it. The publications here are licensed under a <a className="text-[#910506]" href="/">Creative Commons Attribution 4.0 International License.</a></span>

            </div>
            <Widget />
        </section>
    </>)
}