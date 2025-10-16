import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function PublicationEthics() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <Navbar />
      <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
        <h2 className="text-[30px] leading-9 italic text-[#444444]">
          Publication Ethics
        </h2>
        <ul className="flex justify-center gap-4 text-[#797979] mt-3">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li>
            <span> &gt;</span>
          </li>
          <li className="hover:underline">
            <Link to="/publicationethics">Publication Ethics</Link>
          </li>
        </ul>
      </div>
      <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
        <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
          Manuscripts submitted to <strong>Acta BioScientia</strong> must
          report research works that have been carried out following accepted
          protocols that fall within established ethical framework. If upon submission there are reasons to belief that established protocols have not been followed, the Editors reserve the right to reject the manuscript. 
          <ul className="text-[14px] my-4 flex flex-col gap-3 leading-7 pl-6">
            <li>
              <b>
                (a) Research involving human subjects, human material, or human
                data
              </b>{" "}
              <br />
              All Research involving human subjects, human material, or human
              data, must have been conducted in accordance with the Declaration
              of Helsinki and approved by appropriate ethics committee. A
              statement detailing this, the name of the ethical committee that
              granted such approval and the reference number must be included in
              the manuscript reporting the research.
            </li>
            <li>
              <b>(b) Consent</b> <br />
              Informed consent must be obtained from participants of research involving human subjects. Where applicable, copies of duly signed informed consent forms should be attached to manuscripts.
            </li>
            <li>
              <b>(c) Research involving animals</b> <br />
              <strong>Acta BioScientia</strong> endorses the ARRIVE guidelines
              <a
                className="text-[#d80c6c]"
                href="https://arriveguidelines.org/"
              >
                {" "}
                (arriveguidelines.org/)
              </a>{" "}
              for reporting experiments using live animals. Authors and
              reviewers must use the ARRIVE guidelines which can be found at{" "}
              <a
                className="text-[#d80c6c]"
                href="https://arriveguidelines.org/"
              >
                https://arriveguidelines.org/
              </a>{" "}
              . Editors reserve the right to request
              for the checklist and to reject submissions that do not adhere to
              these guidelines. Editors also reserve the right to reject
              submissions based on ethical or animal welfare concerns or if the
              procedure described does not appear to be justified by the value
              of the work presented.{" "}
            </li>
          </ul>
        </div>
        <Widget />
      </section>
      <Footer />
    </>
  );
}
