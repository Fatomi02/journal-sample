import React from "react";
import banner from '../../assets/images/MYJOBMYLIFE-NEWsd-300x120.jpg'
import Scope from '../../assets/images/PAN-AFRICA-7.jpg'
import access from '../../assets/images/Open access.jpg'
import ethics from '../../assets/images/ethics.jpg'
import manuscript from '../../assets/images/submission.jpg'
export default function Body () {
    return (<>
        <section className="xl:w-[64%] w-[90%] mt-[300px] relative z-0 mx-auto md:flex">
            <div className="w-full md:w-[80%]">
                <div className="index">
                    <img className="md:w-[90%] w-full h-[150px] md:h-[400px]" src={banner} alt="Banner" />
                </div>
                <div className="py-6">
                    <p className="text-justify text-[16px] selection:bg-[#910506] selection:text-white leading-[28px] text-[#626262] mb-[20px]">
                        <span>On behalf of the FBMS and FBCS Ladoke Akintola University of Technology, Ogbomoso, you are welcome to the official website of Pan African Journal of Life science (PAJOLS), a publication of FBMS. We look forward to receiving your outstanding research work that will be submitted and published in our journal.  </span>
                    </p>
                    <p className="text-justify text-[16px] selection:bg-[#910506] selection:text-white text-[#626262]  leading-[28px] mb-[20px]">
                        <span>PAJOLS is established to promote and publish outstanding research work in all areas of Life Sciences and related fields. In view of the rapidly advancing frontiers of science and technology, and the increasing importance of international collaboration, PAJOLS is set to play a leading role in providing a platform for the top-level international exchange.</span>
                    </p>
                    <p className="text-justify text-[16px] selection:bg-[#910506] selection:text-white text-[#626262]  leading-[28px] mb-[30px]">
                        <span>The PAJOLS online platform allows prompt and easy submission and peer-review of the submitted manuscripts in line with the principles of Open Access publishing. We are confident that our publications would provide ample opportunities for new and experienced researchers to share their findings.</span>
                    </p>

                    <h5 className="font-semibold text-[15px] text-[#910506]">A publication of Faculty of Basic Medical Sciences and Faculty of Basic Clinical Sciences, Ladoke Akintola University of Technology, Ogbomoso</h5>

                    <div className="mt-[20px] md:mt-[60px] justify-between md:flex">
                        <div className="w-full md:w-[36%]">
                            <img className="w-full" src={Scope} alt="" />
                        </div>
                        <div className="w-full pt-[10px] md:w-[56%]">
                            <span className="text-[20px] lg::text-[39px] selection:bg-[#910506] selection:text-white font-normal mb-[22px] text-[#800000]">Aim & Scope</span>
                            <p className="text-justify mt-[10px] md:mt-0 text-[14px] xl:text-[16px] selection:bg-[#910506] selection:text-white text-[#626262] mb-[35px] leading-[28px]">
                                <span>Published quarterly, PAJOL would provide readers with a wide array of titles that would include Original scientific papers addressing the current issues in life sciences and Review articles (thought-provoking, short and focused reviews) directed at topics of general interest and importance, written by experts in the field. Letter to the Editor would allow cconstructive criticisms and discussions of published papers. Letters of relevance and interest to the community will be published at the discretion of the editorial board. Editorials would facilitate an ongoing dialogue on key issues. PAJOLS will also publish papers on practical programmed, short notes and reports of meetings, conference proceedings and professional announcements. The journal is committed to prompt review process with timely publication of all accepted papers.</span>
                            </p>

                            <span className="text-[16px] md:text-[28px]">Current Issue can be assess by clicking <a className="text-[#800000] font-semibold" href="/">here</a></span>
                        </div>
                    </div>
                </div>

                <h2 className="text-[18px] md:text-[32px] text-[#910506] selection:bg-[#910506] selection:text-white font-bold md:mt-[30px] mb-[15px]">Advantages of publishing in PAJOLS</h2>
                <ul className="text-[14px] md:text-[16px] list-disc flex flex-col gap-[15px] selection:bg-[#910506] selection:text-white pl-[30px]">
                    <li>Easy-to-use article submission system</li>
                    <li>All submissions are handled by dedicated Editors</li>
                    <li>High editorial standards, ensuring all manuscripts undergo an in-depth peer review process</li>
                    <li>All published articles have <b>Digital Object Identifier (DOI)</b> number</li>
                    <li>Greater impact and visibility of your research through open access</li>
                    <li>Retention of all ownership and copyright of your published research</li>
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
                            <span className="selection:bg-[#910506] text-[18px] leading-7 text-[#626262] selection:text-white">PAJOLS adheres to the highest standards of publishing ethics, with rigorous processes in place to ensure this is achieved</span>
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

                <div className="text-[24px] mt-[30px] text-white w-full py-4 bg-[#910506] flex justify-center mb-[20px]">Creative Commons</div>

                <span className="text-[14px] leading-6 md:text-[16px] selection:bg-[#910506] selection:text-white md:leading-9">Creative Commons provides option to choose which rights one want to control and want to grant to others with respect to ones publication. They do not replace copyright, but are based upon it. The publications here are licensed under a <a className="text-[#910506]" href="/">Creative Commons Attribution 4.0 International License.</a></span>

            </div>
            <div>

            </div>
        </section>
    </>)
}