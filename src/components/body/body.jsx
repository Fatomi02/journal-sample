import React from "react";
import banner from '../../assets/images/MYJOBMYLIFE-NEWsd-300x120.jpg'
import Scope from '../../assets/images/PAN-AFRICA-7.jpg'
import access from '../../assets/images/Open access.jpg'
import ethics from '../../assets/images/ethics.jpg'
import manuscript from '../../assets/images/submission.jpg'
import Widget from "../widget/widget";
import License from '../../assets/images/license.png'


export default function Body () {
    return (<>
        <section className="2xl:w-[64%] w-[86%] mt-[280px] relative z-0 mx-auto md:flex justify-between mb-10">
            <div className="w-full md:w-[75%]">
                <div className="index">
                    <img className="md:w-[90%] w-full h-[150px] md:h-[280px] xxl:h-[400px]" src={banner} alt="Banner" />
                </div>
                <div className="py-6">
                    <p className="text-justify text-[14px]  selection:text-white leading-[28px] text-[#626262] mb-[10px]">
                        <span><strong>Acta BioScientia: Journal of Biomedical and Biological Sciences</strong> is a Biomedical Science Journal of the Behavioural Neuroscience Research Group, Ladoke Akintola University of Technology (Print ISSN-------- and Online ISSN----------) that is domiciled in the Department of Pharmacology and Therapeutics, Clinical Sciences Building, College of Health Sciences, Ladoke Akintola University of Technology. </span>
                    </p>
                    <p className="text-justify text-[14px]  selection:text-white text-[#626262]  leading-[28px] mb-[10px]">
                        <span><strong>Acta BioScientia</strong> is a Multidisciplinary Open-access, Peer-reviewed Journal which publishes full-length, original research articles, reviews, preliminary communications and letters to the editor that fall within the general scope of Biomedical and Biological Sciences. </span>
                    </p>
                    <p className="text-justify text-[14px]  selection:text-white text-[#626262]  leading-[28px] mb-[30px]">
                        <span>Brief and full reports of meetings, symposia and conferences are also considered for publication. The journal also promotes the publication of high quality, cutting-edge translational research.</span>
                    </p>

                    {/* <h5 className="font-semibold text-[15px] text-[#d80c6c]">A publication of Faculty of Basic Medical Sciences and Faculty of Basic Clinical Sciences, Ladoke Akintola University of Technology, Ogbomoso</h5> */}

                    <div className="mt-[20px] md:mt-[60px] justify-between md:flex">
                        <div className="w-full md:w-[40%]">
                            <img className="w-full" src={Scope} alt="" />
                        </div>
                        <div className="w-full pt-[10px] md:w-[56%]">
                            <span className="text-[20px] lg::text-[39px] selection:text-white font-normal mb-[22px] text-[#800000]">Aim</span>
                            <p className="text-justify flex flex-col gap-3 mt-[10px] md:mt-0 text-[14px] xl:text-[14px]  selection:text-white text-[#626262] mb-[20px] leading-[28px]">
                                <span>The aim of <strong>Acta BioScientia</strong> is to enhance the publication of biomedical and biological science research data by researchers from resource-poor and developing economies; whilst also elevating our understanding of the unique challenges that are faced by researchers from these communities.</span> 
                            </p>
                            <span className="text-[20px] lg::text-[39px] selection:text-white font-normal mb-[22px] text-[#800000]">Scope</span>
                            <p className="text-justify flex flex-col gap-3 mt-[10px] md:mt-0 text-[14px] xl:text-[14px]  selection:text-white text-[#626262] mb-[35px] leading-[28px]">
                                <span><strong>Acta BioScientia</strong> is an institutional Journal that is published Thrice annually and provides readers with an array of titles that include <b>original reports</b> that address current and trending research in the Biomedical and Biological Science research, <b>review articles</b> (written by experts and early career researchers) addressing topics of general interest and importance, <b>short reports</b> (including case reports, commentaries, editorials, conference proceedings) and <b>letter to the editor</b> which project burning issues. Privilege is given to <b>invited reviews</b> and <b>perspective papers.</b> The Journal is committed to a prompt review process with timely publication of all accepted manuscripts. </span>
                            </p>

                            {/* <span className="text-[14px] md:text-[24px]">Current Issue can be assess by clicking <a className="text-[#800000] font-semibold" href="/">here</a></span> */}
                        </div>
                    </div>
                </div>

                <h2 className="text-[18px] md:text-[32px] text-[#d80c6c]  selection:text-white font-bold mb-[15px]">WHY PUBLISH WITH US</h2>
                <ul className="text-[14px] md:text-[14px] list-disc flex flex-col gap-[15px]  selection:text-white pl-[30px]">
                    <li>User friendly Manuscript submission system</li>
                    <li>Prompt and Concise Editorial Review </li>
                    <li>Rigorous and transparent peer review process</li>
                    <li>Rapid publication with accurate double-blinded peer review process</li>
                    <li>Articles are published in their final form within 3-5 working days after the acceptance by the handling editor.</li>
                    <li>Immediate visibility for research output once the article is published.</li>
                    <li>Accelerated discovery with open access.</li>
                    <li>Authors retain the copyright to their works for unlimited and unrestricted access.</li>
                </ul>

                <div className="md:flex-row flex flex-col gap-[30px] w-[96%] md:w-full mt-[40px] mx-auto">
                    <div className="w-full md:w-[320px] mx-auto">
                        <img className="w-[full] h-[220px]" src={access} alt="" />
                        <div className="mt-[20px] flex flex-col gap-[15px]">
                            <span className="text-[24px] text-[#e67817] font-medium  selection:text-white">Open Access</span>
                            <span className=" text-[18px] leading-7 text-[#626262] selection:text-white">The basic idea of open access is to make copyright-able works available without all</span>
                            <button className="bg-[#e67817] py-3 hover:text-[#626262] px-5 text-center w-full text-[white]">Read more</button>
                        </div>
                    </div>
                    <div className="w-full md:w-[320px] mx-auto">
                        <img className="w-[full] h-[220px]" src={ethics} alt="" />
                        <div className="mt-[20px] flex flex-col gap-[15px]">
                            <span className="text-[24px] text-[#00923f] font-medium  selection:text-white">Publication Ethics</span>
                            <span className=" text-[18px] leading-7 text-[#626262] selection:text-white">Acta BioScientia adheres to the highest standards of publishing ethics, with rigorous processes in place to ensure this is achieved</span>
                            <button className="bg-[#00923f] py-3 px-5 text-center hover:text-[#626262] w-full text-[white]">Read more</button>
                        </div>
                    </div>
                    <div className="w-full md:w-[320px] mx-auto">
                        <img className="w-[full] h-[220px]" src={manuscript} alt="" />
                        <div className="mt-[20px] flex flex-col gap-[15px]">
                            <span className="text-[24px] text-[#007dc2] font-medium  selection:text-white">Submission</span>
                            <span className=" text-[18px] leading-7 text-[#626262] selection:text-white">The basic idea of open access is to make copyright-able works available without all</span>
                            <button className="bg-[#007dc2] py-3 px-5 text-center hover:text-[#626262] w-full text-[white]">Read more</button>
                        </div>
                    </div>
                </div>

                <div className="text-[24px] mt-[30px] text-white w-full py-2 bg-[#d80c6c] flex justify-center mb-[20px]">Creative Commons</div>

                <span className="text-[14px] leading-6 md:text-[14px]  selection:text-white md:leading-9">Creative Commons licenses give a standardized format for granting the public permission for use of creative works under copyright law. All articles published by <strong>Acta BioScientia</strong> are licensed under a <a className="text-[#d80c6c]" href="/">Creative Commons Attribution 4.0 International License.</a><img className="inline-block" src={License} alt="" /></span>

            </div>
            <Widget />
        </section>
    </>)
}