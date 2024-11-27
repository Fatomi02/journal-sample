import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";

export default function SubmissionGuide() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <Navbar />
      <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
        <h2 className="text-[30px] leading-9 italic text-[#444444]">
          Submission Guide
        </h2>
        <ul className="flex justify-center gap-4 text-[#797979] mt-3">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li>
            <span> &gt;</span>
          </li>
          <li className="hover:underline">
            <Link to="/submissionguide">Submission Guide</Link>
          </li>
        </ul>
      </div>
      <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex w-[86%] mt-[70px] mb-10">
        <div className="w-full md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
          <p className="text-[14px] leading-7">
            <b>Acta BioScientia</b> is an open access journal that covers a wide range
            of academic disciplines. Prior to manuscript submission, please read
            carefully and adhere to the instructions in the submission
            guidelines. This would ensure that a seamless process from
            submission to the successful publication of your manuscript.
          </p>

          <h4 className="text-[#d80c6c] font-bold text-center my-3">
            Manuscript Submission
          </h4>
          <p className="text-[14px] leading-7">
            <strong>Acta BioScientia</strong> accepts manuscripts prepared in
            the following formats: Microsoft Word (2007 and above) submitted via{" "}
            <a className="text-blue-700" href="/home">
              the Journal Website.
            </a>{" "}
            If the online submission proves difficult due to technical issues,
            manuscripts can be submitted via email at{" "}
            <a
              className="text-blue-700"
              href="mailto:actabioscientia@gmail.com"
            >
              Actabioscientia@gmail.com
            </a>
            . <br />
            <p className="my-2">
              Full text, including Figures and Tables should be submitted via
              our online platform
            </p>
          </p>
          <strong className="text-[#d80c6c] text-center mb-3">
            Article Type
          </strong>
          <p className="text-[14px] leading-7">
            The Journal welcomes the submission of full-length research
            articles, review articles, thematic issues and short reports.{" "}
          </p>
          <strong className="text-[#d80c6c] text-center mb-3">
            Manuscript Preparation
          </strong>
          <p className="text-[14px] leading-7 mb-4">
            All Manuscripts submitted to this journal must be written in
            English. Manuscript length should be at least 3000 words but not
            more than 10000 words (references included). The main text should be
            divided into sections, including Introduction, Materials and
            Methods, Results, Discussion, Conclusion, Acknowledgement, Conflict
            of Interest, Appendix and Reference.{" "}
          </p>
          <strong className="text-[#d80c6c] text-center mb-4">Title</strong>
          <p className="text-[14px] leading-7 mb-5">
            The title of the article should be brief, concise and informative.
            Word count should not exceed 21.{" "}
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Author Details
          </strong>
          <p className="text-[14px] leading-7">
            Manuscript should contain the full name for all authors, with the
            names of authors separated by a comma. Also, full affiliations
            including academic affiliation, city, country and e-mail of the
            authors must be provided. Details of the corresponding author
            particularly the e-mail address should be clearly stated.
          </p>
          <strong className="text-[#d80c6c] text-center my-2">Abstract</strong>
          <p className="text-[14px] leading-7">
            The abstract should not exceed 250 words. It should be written as a
            continuous paragraph and must include background of the research,
            methodology, results, and conclusions. Emphasis must be placed on
            the contributions to the current body of knowledge.
          </p>
          <strong className="text-[#d80c6c] text-center my-2">Keywords</strong>
          <p className="text-[14px] leading-7">
            3-5 keywords that accurately reflect the theme of the manuscript
            should be included.{" "}
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Introduction
          </strong>
          <p className="text-[14px] leading-7">
            This should provide a brief description of the scope and relevance
            of the research, including current body of knowledge of the subject
            area{" "}
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Materials and Methods
          </strong>
          <p className="text-[14px] leading-7">
            This section should give a concise description of the research type,
            materials, experimental design and statistical tests used for data
            analysis etc.{" "}
          </p>
          <strong className="text-[#d80c6c] text-center my-2">Results</strong>
          <p className="text-[14px] leading-7">
            Data should be presented clearly and objectively. Where appropriate,
            figures and tables should be used.
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Discussion
          </strong>
          <p className="text-[14px] leading-7">
            Manuscripts should have accurate unbiased interpretation of result
            data, also comparisons should be made with similar studies. The
            significance of findings should be clearly depicted.
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Conclusion
          </strong>
          <p className="text-[14px] leading-7">
            Conclusions reached from the research would be presented here. This
            section would also include the contributions of the study to the
            body of knowledge{" "}
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Acknowledgement
          </strong>
          <p className="text-[14px] leading-7">
            All contributors who do not meet the criteria for authorship (as
            stated below) should be listed in the acknowledgements section.{" "}
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Declaration of conflict of interest{" "}
          </strong>
          <p className="text-[14px] leading-7">
            A ‘Declaration of Conflict of Interest’ statement should be included
            at the end of the manuscript, just before the references. If Authors
            have no conflict, then they should state categorically that “The
            Author(s) declare(s) that there is no conflict of interest.”
          </p>
          <strong className="text-[#d80c6c] text-center my-2">Funding</strong>
          <p className="text-[14px] leading-7">
            <strong>Acta BioScientia</strong> requires that all authors
            acknowledge completely their funding. If the authors did not receive
            any outside funding, then “This research received no specific grant
            from any funding agency in the public, commercial, or not-for-profit
            sectors.” should be clearly stated in this section.
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            References
          </strong>
          <p className="text-[14px] leading-7">
            The Journal uses a numeric referencing style. This referencing style
            entails that each source is numbered according to the order of
            appearance in the text. This numbers are retained for the same
            source anytime they appear again in the text. The reference list is
            then a single numbered list of citations with full details. All in-text references are expected to be numbered in square brackets. 
          </p>
          <strong className="text-[#d80c6c] text-center my-2">
            Reference Format
          </strong>
          <p className="text-[14px] leading-7">
          The NLM/Vancouver reference list format is used by this journal. Minimum
            information required for journal article reference include author
            (s) surname, initials (without punctuation mark) , abbreviated
            journal title, year of publication, volume number, and page number.
            All authors should be cited. Journal abbreviations should follow the
            Index Medicus or MEDLINE format.
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <p className="text-[14px] leading-7">
              <b className="text-[#d80c6c]">Journal article:</b> Onaolapo AY, Ojo FO, Adeleye OO, Falade J, Onaolapo OJ. Diabetes Mellitus and Energy Dysmetabolism in Alzheimer's Disease: Understanding the Relationships and Potential Therapeutic Targets. Curr Diabetes Rev. 2023;19(8)e020123212333. 
            </p>
            <p className="text-[14px] leading-7">
              <b className="text-[#d80c6c]">Accepted Article:</b> For articles that have been accepted but yet to be published, referencing style is same as above however “In press” replaces page numbers
            </p>
            <p className="text-[14px] leading-7">
              <b className="text-[#d80c6c]">Book:</b> Gopi S, Balakrishnan P Handbook of Nutraceuticals and Natural Products, 1st ed.; Wiley & Sons: New York, 2022.
            </p>
          </div>
        </div>
      </section>
      <Footer />

      <Outlet />
    </>
  );
}
