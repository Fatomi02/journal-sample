import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function AuthorGuide () {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs once when the component mounts
      
    return (<>
                <Navbar />
                <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                    <h2 className="text-[30px] leading-9 italic text-[#444444]">Author's Guide</h2>
                    <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                        <li className="hover:underline"><Link to="/">Home</Link></li>
                        <li><span> &gt;</span></li>
                        <li className="hover:underline"><Link to="/authorsguide">Author's Guide</Link></li>
                    </ul>

                </div>
                <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                    <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                        <h1 className="text-[#800000] font-semibold text-center mb-2">PREPARING YOUR MANUSCRIPT</h1>
                        <p className="text-[14px] leading-7">
                        Word (as .doc or .docx)is the preferred formats for the text and tables of your manuscript. The text should be 1.5 line-spaced; Times New Roman font with standard 12 point.
                        </p>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Title</strong>
                            <p className="text-[14px] leading-7">The title should be specific, descriptive, concise, and comprehensible to readers outside the subject field. The title should be centralized in 16 point bold, Times New Roman font, and placed at the top of page 1. The total character (including spaces) should not exceed 125 characters.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Authors and affiliations</strong>
                            <p className="text-[14px] leading-7">All authors’ full names should be written in this order, first name, middle name (or initials), surname). The authors name should be linked to author affiliations with superscript numbers to the right of authors’ names and to the left in affiliation. The Corresponding Author should be marked with an asterisk, and their exact contact address, e-mail address and telephone number listed in a separate paragraph.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] my-6 text-[14px]">Abstract</strong>
                            <p className="text-[14px] leading-7">The abstract should be structured and systematically written to include background, Methodology, Results, and Conclusions. Citations, tables and specialist abbreviations should be avoided. The techniques used must be mentioned without going into methodological detail and the most important findings should be summarized.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Keywords</strong>
                            <p className="text-[14px] leading-7">The keywords should be included at the end of the abstract. The authors must provide a minimum of 4 and maximum of 6 keywords.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Introduction</strong>
                            <p className="text-[14px] leading-7">This section should put the focus of the manuscript into a broader context and be written in a way understandable to researchers without specialist/expert knowledge in the area. Relevant controversies or disagreements in the field should be mentioned. The key aspects of the literature should be reviewed with the aim of indicating why the study was necessary and what it would contribute to the field of study. The introduction should conclude with a comment about the overall aims of the study.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Methodology</strong>
                            <p className="text-[14px] leading-7">This section should include the design of the study, the setting, the type of participants or materials involved, as well as a description of all interventions and comparisons. The authors should also provide a description of the type of statistical analysis used, including a power calculation when appropriate. Well-established methodologies should simply be mentioned and referenced appropriately. For new methods, the protocols for the method should be included with enough detail to enable reproduction of the findings.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Results</strong>
                            <p className="text-[14px] leading-7">The results section should be written in past tense and should provide details of findings that are required to support the conclusions made in the manuscript. To enhance clarity, the section may be divided into subsections, each with a concise subheading. Where appropriate, results of statistical analysis should include analysis of relative/absolute risks and confidence analysis. Large datasets, including raw data, may be submitted as supporting files for publication as supplementary appendices.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Discussion</strong>
                            <p className="text-[14px] leading-7">The discussion should clearly identify the main conclusions of the study. Authors should provide a clear explanation of the importance and relevance of these conclusions. Speculations on how the conclusions fit in or affect the existing assumptions or models should be explored. Suggestions for further key experiments for future work can be included. Summary illustrations may be included. When appropriate, issues related to resource limitations faced by the researchers during the course of the study, how these were addressed, and suggestions for improvement may also be included.</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Acknowledgments</strong>
                            <p className="text-[14px] leading-7">Those who have made substantial contributions and do not fit the criteria for authorship should be mentioned in this section. It is the responsibility of the authors to ensure that those being acknowledged have agreed to being named in such capacity. The source of funding for the study should be stated in this section. PAJOLS requires authors to acknowledge their funding in a consistent fashion e.g. “This research received support from Tertiary Education Trust Fund (TetFund) Institutional based Research grant 2015”</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">Declaration of conflict of interest</strong>
                            <p className="text-[14px] leading-7">Please include a ‘Declaration of Conflict of Interest’ statement at the end of your manuscript, after any Acknowledgements, and prior to the references. If no conflict exists, please state that “The Author(s) declare(s) that there is no conflict of interest.”</p>
                        </div>
                        <div className="my-4">
                            <strong className="text-[#800000] text-[14px] my-6">References</strong> (Times New Roman, size 10 font)
                            <p className="text-[14px] leading-8">The Journal uses the BioMed referencing style. All references, within the text must be numbered consecutively, in square [ ] brackets. Citations should be listed in the order in which they are cited in the text, followed by any in tables or legends. Each reference must have an individual reference number. We recommend the use of Zotero (https://www.zotero.org/) reference management software.</p>
                            <strong className="text-[#800000] text-[14px] my-1">References should be formatted as follows:</strong> <br />
                            <strong className="text-[#800000] text-[14px] my-1 italic">Journal article</strong>
                            <p lassName="text-[14px] leading-8">Snow RW, Guerra CA, Noor AM, Myint HY, Hay SI. The global distribution of clinical episodes of Plasmodium falciparum malaria. Nature. 2005; 434: 214–7.
                            Salim N, Knopp S, Lweno O, Abdul U, Mohamed A, Schindler T, et al. Distribution and Risk Factors for Plasmodium and Helminth Co-infections: A Cross-Sectional Survey among Children in Bagamoyo District, Coastal Region of Tanzania. PLoSNegl Trop Dis. 2015; 9: e0003660.</p>

                            <strong className="text-[#800000] text-[14px] my-1 italic">Accepted, unpublished papers:</strong>
                            <p className="text-[14px] leading-8">Same as above, but “In press” appears instead of the page numbers.</p>

                            <strong className="text-[#800000] text-[14px] my-1 italic">Book</strong>
                            <p className="text-[14px] leading-8">Author Surname A: Title. City: Publisher; Year Published: Pages Used.</p>
                            <p className="text-[14px] leading-8">Carlson BM. Human embryology and developmental biology. 4th ed. St. Louis: Mosby; 2009. p. 541</p>

                            <strong className="text-[#800000] text-[14px] my-1 italic">Chapter in Book:</strong>
                            <p className="text-[14px] leading-8">Blaxter PS, Farnsworth TP. Social health and class inequalities. In: Carter C, Peel JR, editors. Equalities and inequalities in health. 2nd ed. London: Academic Press; 1976. p. 165-78.</p>
                            
                            <strong className="text-[#800000] text-[14px] my-1 italic">Figures & Tables</strong>
                            <p className="text-[14px] leading-8">Figures and tables should not be integrated into the main text. They must be submitted as separate files and never be included in the same manuscript text. Figures should appear on separate files with all tables saved in one document. They should be numbered consecutively using Arabic numerals (Figure 1, Figure 2, Figure 3, Table 1, Table 2, Table 3, etc.).</p>

                        </div>

                        <div className="text-[14px] leading-8">
                        Results which can be described as short statements within the text should not be presented as figures or tables. Footnotes should be used to explain abbreviations. Citations should be indicated using the style outlined under “References” above. Large tables can be provided as supporting information for publication along with the article.
                        </div>
   


                    </div>
                    <Widget />
                </section>
            <Footer />

            <Outlet />
    </>)
}