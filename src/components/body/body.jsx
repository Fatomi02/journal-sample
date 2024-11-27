import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/bioscientia_banner.jpg";
import Aim from "../../assets/images/aim.jpg";
import Scope from "../../assets/images/scope.jpg";
import access from "../../assets/images/open-access.jpg";
import ethics from "../../assets/images/publication-ethics.jpg";
import manuscript from "../../assets/images/manuscript_submission.jpg";
import Widget from "../widget/widget";
import License from "../../assets/images/license.png";
import './body.css'

export default function Body() {
  const navigate = useNavigate();
  const route = (url) => {
    navigate(url);
  }
  return (
    <>
      <section className="2xl:w-[64%] w-[86%] mt-[280px] relative z-0 mx-auto md:flex justify-between mb-10">
        <div className="w-full md:w-[75%]">
          <div className="index">
            <img
              className="md:w-[90%] w-full h-[150px] md:h-[280px] xxl:h-[400px]"
              src={banner}
              alt="Banner"
            />
          </div>
          <div className="py-6">
            <p className="text-justify text-[14px]  selection:text-white leading-[28px] text-[#626262] mb-[10px]">
              <span>
                <strong>
                  Acta BioScientia: Journal of Biomedical and Biological
                  Sciences
                </strong>{" "}
                is a Biomedical Science Journal of the Behavioural Neuroscience Research Group, Ladoke Akintola University of Technology that is domiciled in the Department of Pharmacology and Therapeutics, Clinical Sciences Building, College of Health Sciences, Ladoke Akintola University of Technology, Ogbomoso Nigeria. 
              </span>
            </p>
            <p className="text-justify text-[14px]  selection:text-white text-[#626262]  leading-[28px] mb-[10px]">
              <span>
                <strong>Acta BioScientia</strong> is a Multidisciplinary Open-access, Peer-reviewed Journal which publishes full-length original research articles, reviews, preliminary communications and letters to the editor that fall within the general scope of Biomedical and Biological Sciences.
              </span>
            </p>
            <p className="text-justify text-[14px]  selection:text-white text-[#626262]  leading-[28px] mb-[30px]">
              <span>
                Brief and full reports of meetings, symposia and conferences are
                also considered for publication. The journal also promotes the
                publication of high quality, cutting-edge translational
                research.
              </span>
            </p>

            {/* <h5 className="font-semibold text-[15px] text-[#d80c6c]">A publication of Faculty of Basic Medical Sciences and Faculty of Basic Clinical Sciences, Ladoke Akintola University of Technology, Ogbomoso</h5> */}

            <div className="mt-[20px] md:mt-[60px] flex flex-col gap-8">
              <div className="w-full flex items-center flex-col-reverse md:flex-row gap-2">
                <img className="w-[800px] h-[200px]" src={Aim} alt="" />
                <div>
                  <span className="text-[20px] lg::text-[39px] selection:text-white font-normal mb-[22px] text-[#d80c6c]">
                    Aim
                  </span>
                  <p className="text-justify flex flex-col gap-3 mt-[10px] md:mt-0 text-[14px] xl:text-[14px]  selection:text-white text-[#626262] mb-[20px] leading-[28px]">
                    <span>
                      The aim of <strong>Acta BioScientia</strong> is to enhance the publication of biomedical and biological science research data by researchers from resource-poor and developing economies; whilst also elevating our understanding of the unique challenges that are faced by researchers from these communities.
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center flex-col md:flex-row gap-2">
                <div>
                  <span className="text-[20px] lg::text-[39px] selection:text-white font-normal mb-[22px] text-[#d80c6c]">
                    Scope
                  </span>
                  <p className="text-justify flex flex-col gap-3 mt-[10px] md:mt-0 text-[14px] xl:text-[14px]  selection:text-white text-[#626262] mb-[10px] leading-[28px]">
                    <span>
                      <strong>Acta BioScientia</strong> is a Journal that is published thrice annually and provides readers with an array of titles that include <b>original reports</b> that address current and trending research in the Biomedical and Biological Sciences; <b>review articles</b> (written by experts and early career researchers) addressing topics of general interest and importance; <b>short reports</b> including case reports, commentaries, editorials and conference proceedings and also <b>letter to the editor</b> which project burning issues. Privilege is given to <b>invited reviews</b> and <b>perspective papers.</b> The Journal is committed to a prompt review process with timely publication of all accepted manuscripts. 
                    </span>
                  </p>
                </div>
                <img className="w-[800px] h-[300px]" src={Scope} alt="" />
              </div>
            </div>
          </div>

          <h2 className="text-[18px] md:text-[32px] text-[#d80c6c] mt-3 selection:text-white font-bold mb-[15px]">
            WHY PUBLISH WITH US
          </h2>
          <ul className="text-[14px] md:text-[14px] list-disc flex flex-col gap-[15px]  selection:text-white pl-[30px]">
            <li>User friendly Manuscript submission system</li>
            <li>Prompt and Concise Editorial Review </li>
            <li>Rigorous and transparent peer review process</li>
            <li>
              Rapid publication with accurate double-blinded peer review process
            </li>
            <li>
              Articles are published in their final form within 3-5 working days
              after the acceptance.
            </li>
            <li>
              Immediate visibility for research output once the article is
              published.
            </li>
            <li>Accelerated discovery with open access.</li>
            <li>
              Authors retain the copyright to their works for unlimited and
              unrestricted access.
            </li>
          </ul>

          <div className="md:flex-row flex flex-col gap-[30px] w-[96%] md:w-full mt-[40px] mx-auto">
            <div className="w-full overflow-hidden md:w-[320px] mx-auto">
              <img className="w-full h-[220px] zoom-image" src={access} alt="" />
              <div className="mt-[20px] flex flex-col gap-[15px]">
                <span className="text-[24px] text-[#e67817] font-medium  selection:text-white">
                  Open Access
                </span>
                <span className=" text-[18px] leading-7 text-[#626262] selection:text-white">
                The basic idea of open access publishing is to allow unrestricted access to published work.
                </span>
                <button onClick={()=> route('/open-access-policy')} className="bg-[#e67817] py-3 hover:text-[#626262] px-5 text-center w-full text-[white]">
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full overflow-hidden md:w-[320px] mx-auto">
              <img className="w-full h-[220px] zoom-image" src={ethics} alt="" />
              <div className="mt-[20px] flex flex-col gap-[15px]">
                <span className="text-[24px] text-[#00923f] font-medium  selection:text-white">
                  Publication Ethics
                </span>
                <span className=" text-[18px] leading-7 text-[#626262] selection:text-white">
                Acta BioScientia holds itself to the highest standards of publication ethics. 
                </span>
                <button onClick={()=> route('/publicationethics')} className="bg-[#00923f] py-3 px-5 text-center hover:text-[#626262] w-full text-[white]">
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full overflow-hidden md:w-[320px] mx-auto">
              <img className="w-full h-[220px] zoom-image" src={manuscript} alt="" />
              <div className="mt-[20px] flex flex-col gap-[15px]">
                <span className="text-[24px] text-[#007dc2] font-medium  selection:text-white">
                  Submission
                </span>
                <span className=" text-[18px] leading-7 text-[#626262] selection:text-white">
                Acta BioScientia has an online manuscript submission system
                </span>
                <button onClick={()=> route('/submissionguide')} className="bg-[#007dc2] py-3 px-5 text-center hover:text-[#626262] w-full text-[white]">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="text-[24px] mt-[30px] text-white w-full py-2 bg-[#d80c6c] flex justify-center mb-[20px]">
            Creative Commons
          </div>

          <span className="text-[14px] leading-6 md:text-[14px]  selection:text-white md:leading-9">
            Creative Commons licenses give a standardized format for granting
            the public permission for use of creative works under copyright law.
            All articles published by <strong>Acta BioScientia</strong> are
            licensed under a{" "}
            <a className="text-[#d80c6c]" href="/">
              Creative Commons Attribution 4.0 International License.
            </a>
            <img className="inline-block" src={License} alt="" />
          </span>
        </div>
        <Widget />
      </section>
    </>
  );
}
