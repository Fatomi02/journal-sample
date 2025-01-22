import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import logo from "../../assets/logos/ACTA-BIOSCIENTA.png";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";
import emptyBanner from "../../assets/images/empty.png";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw, EditorState } from 'draft-js';
import api from "../../api/api";
import { toast } from "react-toastify";
import book from '../../assets/icons/book.svg';

export default function JournalPage() {
    const { volume, issue, page } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [filteredJournal, setFilteredJournal] = useState([]);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        const cleanPage = page && page.endsWith('}') ? page.slice(0, -1) : page;

        setIsLoading(true);
        api.get('/api/journals').then((response) => {
            if (response) {
                setIsLoading(false);
                const filtered = response.data.journals.filter(
                    (journal) => journal.volume === volume && journal.issue === parseInt(issue) && journal.page === cleanPage
                );
                console.log(filtered);
                setFilteredJournal(filtered);
                if (filtered.length > 0) {
                    const contentState = convertFromRaw(JSON.parse(filtered[0].content));
                    setEditorState(EditorState.createWithContent(contentState));
                }
            }
        }).catch((error) => {
            setIsLoading(false);
            toast.error(error);
            console.error(error);
        });

        window.scrollTo(0, 0);
    }, [volume, issue, page]);

    return (
        <>
            <Navbar />
            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Volume {volume} Issue {issue}</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline">Volume {volume} Issue {issue} </li>
                </ul>
            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] flex flex-col gap-4 leading-7">
                    {isLoading && <div className="flex justify-center items-center h-full w-full"><span className="loader"></span></div>}
                    {(!isLoading && filteredJournal.length > 0) && <>
                        <div className="w-full flex flex-col gap-2 items-center">
                            <div className="flex flex-col lg:flex-row gap-1 lg:gap-8 items-center">
                            <img width={80} height={80} src={logo} alt="" />
                            <h2 className="font-bold text-[16px] text-center lg:text-start text-[#d80c6c]">Acta BioScientia - Journal of Biomedical <br /> and Biological Sciences</h2>
                            </div>
                            <span className="text-[14px] text-[#d80c6c]">
                                <b>Volume:</b> {volume}, <b>No:</b> {issue}</span>
                            <span><b className="text-[#d80c6c]">Published Date:</b> {new Date(filteredJournal[0].date).toLocaleDateString('en-US', {
                                month: "long",
                                day: "2-digit",
                                year: "numeric",
                            })}</span>
                            <span className="text-[14px]"> <b className="text-[#d80c6c]">Pages:</b> {filteredJournal[0]?.page}</span>
                            <span className="text-[16px] font-bold"><b className="text-[#d80c6c]">DOI: </b> 
                            <a href={`https://doi.org/${filteredJournal[0]?.doi}`} target="_blank" rel="noreferrer" className="text-blue-500">{filteredJournal[0]?.doi}</a></span>
                        </div>

                        <div className="w-full flex flex-col">
                            <img className="mx-auto" width={40} height={40} src={book} alt="" />
                            <h2 className="text-center font-bold">{filteredJournal[0].title}</h2>
                            <div className="w-full">
                            <Editor
                                toolbarHidden={true}
                                editorState={editorState}
                                readOnly={true}
                            />
                            </div>
                        </div>
                        <div className="flex justify-start">
                        <a href={filteredJournal[0].fileUrl} target="_blank" rel="noreferrer" className="px-3 py-2 bg-[#e05897] text-white hover:opacity-50 rounded-lg">Download File</a>
                        </div>
                    </>}
                    {(!isLoading && filteredJournal.length === 0) &&
                        <div className="flex justify-center items-center h-full w-full flex-col gap-4">
                            <img width={200} height={200} src={emptyBanner} alt="emptyData" />
                            <div className="font-medium text-[18px]">No Published Journal</div>
                        </div>
                    }
                </div>
                <Widget />
            </section>
            <Footer />
            <Outlet />
        </>
    );
}
