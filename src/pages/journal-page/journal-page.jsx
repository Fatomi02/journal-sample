import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Widget from "../../components/widget/widget";
import logo from "../../assets/logos/ACTA-BIOSCIENTA.png";
import emptyBanner from "../../assets/images/empty.png";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw, EditorState } from 'draft-js';
import { Helmet } from "react-helmet";
import api from "../../api/api";
import { toast } from "react-toastify";

export default function JournalPage() {
    const { volume, issue, page } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [filteredJournal, setFilteredJournal] = useState([]);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        const cleanPage = page && page.endsWith('}') ? page.slice(0, -1) : page;

        setIsLoading(true);
        api.get('/api/journals').then((response) => {
            setIsLoading(false);
            if (response?.data?.journals) {
                const filtered = response.data.journals.filter(
                    (journal) =>
                        journal.volume === volume &&
                        journal.issue === parseInt(issue) &&
                        journal.page === cleanPage
                );
                setFilteredJournal(filtered);

                if (filtered.length > 0) {
                    const contentState = convertFromRaw(JSON.parse(filtered[0].content));
                    setEditorState(EditorState.createWithContent(contentState));
                }
            }
        }).catch((error) => {
            setIsLoading(false);
            toast.error(error.message || "Failed to load journal");
            console.error(error);
        });

        window.scrollTo(0, 0);
    }, [volume, issue, page]);

    const article = filteredJournal[0];

    const getAuthorsString = (authorField) => {
        if (!authorField) return "Acta BioScientia";
        if (Array.isArray(authorField)) return authorField.join(", ");
        return authorField.toString();
    };

    const firstPage = article?.page?.split('-')[0] || "";
    const lastPage = article?.page?.split('-')[1] || firstPage;

    return (
        <>
            <Navbar />

            {article && (
                <Helmet>
                    {/* Google Scholar Meta Tags */}
                    <meta name="citation_title" content={article.title || ""} />
                    <meta name="citation_author" content={getAuthorsString(article.author)} />
                    <meta name="citation_journal_title" content="Acta BioScientia - Journal of Biomedical and Biological Sciences" />
                    <meta name="citation_volume" content={(volume || "").toString()} />
                    <meta name="citation_issue" content={(issue || "").toString()} />
                    <meta name="citation_firstpage" content={firstPage.toString()} />
                    <meta name="citation_lastpage" content={lastPage.toString()} />
                    <meta name="citation_publication_date" content={article.date ? new Date(article.date).toISOString() : ""} />
                    <meta name="citation_doi" content={article.doi || ""} />
                    {article.file && <meta name="citation_pdf_url" content={`https://actabioscientia.org/api/uploads/${article.file}`} />}

                    {/* JSON-LD Structured Data */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "http://schema.org",
                            "@type": "ScholarlyArticle",
                            "headline": article.title || "",
                            "author": getAuthorsString(article.author),
                            "datePublished": article.date || "",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Acta BioScientia"
                            },
                            "url": window.location.href,
                            "identifier": article.doi || "",
                            "fileFormat": "application/pdf",
                            "contentUrl": article.file ? `https://actabioscientia.org/api/uploads/${article.file}` : undefined
                        })}
                    </script>
                </Helmet>
            )}

            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Volume {volume} Issue {issue}</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline">Volume {volume} Issue {issue}</li>
                </ul>
            </div>

            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[70%] text-justify text-[#626262] text-[14px] mt-[-36px] flex flex-col gap-4 leading-7">
                    {isLoading && <div className="flex justify-center items-center min-h-[300px] w-full"><span className="loader"></span></div>}

                    {(!isLoading && article) && (
                        <article
                            itemScope
                            itemType="http://schema.org/ScholarlyArticle"
                        >
                            <meta itemProp="headline" content={article.title} />
                            <meta itemProp="datePublished" content={article.date} />
                            {article.doi && <meta itemProp="identifier" content={article.doi} />}
                            {Array.isArray(article.author)
                                ? article.author.map((a, i) => <meta key={i} itemProp="author" content={a} />)
                                : <meta itemProp="author" content={getAuthorsString(article.author)} />}
                            {article.file && <meta itemProp="url" content={`https://actabioscientia.org/api/uploads/${article.file}`} />}

                            <div className="w-full flex flex-col gap-2 items-center">
                                <div className="flex flex-col lg:flex-row gap-1 lg:gap-8 items-center">
                                    <img width={80} height={80} src={logo} alt="Acta BioScientia Logo" />
                                    <h2 className="font-bold text-[16px] text-center lg:text-start text-primary" itemProp="publisher">
                                        Acta BioScientia - Journal of Biomedical <br /> and Biological Sciences
                                    </h2>
                                </div>
                                <span className="text-[14px] text-primary">
                                    <b>Volume:</b> {volume}, <b>No:</b> {issue}
                                </span>
                                <span><b className="text-primary">Published Date:</b> {new Date(article.date).toLocaleDateString('en-US', {
                                    month: "long",
                                    day: "2-digit",
                                    year: "numeric",
                                })}</span>
                                <span className="text-[14px]"> <b className="text-primary">Pages:</b> {article.page}</span>
                                {article.doi && (
                                    <span className="text-[16px] font-bold">
                                        <b className="text-primary">DOI: </b>
                                        <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noreferrer" className="text-blue-500" itemProp="sameAs">
                                            {article.doi}
                                        </a>
                                    </span>
                                )}
                            </div>

                            <div className="w-full flex flex-col">
                                <img className="mx-auto" width={40} height={40} src="assets/icons/book.png" alt="Book Icon" />
                                <h2 className="text-center font-bold" itemProp="headline">{article.title}</h2>
                                <div className="w-full" itemProp="articleBody">
                                    <Editor
                                        toolbarHidden={true}
                                        editorState={editorState}
                                        readOnly={true}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-start">
                                {article.file && (
                                    <a href={`https://actabioscientia.org/api/uploads/${article.file}`} target="_blank" rel="noreferrer" className="px-3 py-2 bg-[#e05897] text-white hover:opacity-50 rounded-lg" itemProp="fileFormat">
                                        Download File
                                    </a>
                                )}
                            </div>
                        </article>
                    )}

                    {(!isLoading && !article) && (
                        <div className="flex justify-center items-center h-full w-full flex-col gap-4">
                            <img width={200} height={200} src={emptyBanner} alt="emptyData" />
                            <div className="font-medium text-[18px]">No Published Journal</div>
                        </div>
                    )}
                </div>
                <Widget />
            </section>
            <Footer />
        </>
    );
}
