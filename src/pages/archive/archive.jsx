import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";
import emptyBanner from "../../assets/images/empty.png";
import api from "../../api/api";
import { toast } from "react-toastify";
import book from '../../assets/icons/book.svg';

export default function Archive() {
    const [journals, setJournals] = useState([]);
    const [groupedJournals, setGroupedJournals] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        api.get('/api/journals').then((response) => {
            if (response) {
                setIsLoading(false);
                setJournals(response.data.journals);
            }
        }).catch((error) => {
            setIsLoading(false);
            toast.error(error);
            console.error(error);
        });
    }, []);

    useEffect(() => {
        if (Array.isArray(journals) && journals.length > 0) {
            // Group journals by volume and remove duplicates for the same volume/issue combination
            const grouped = journals.reduce((acc, journal) => {
                const volume = journal.volume;
                const issue = journal.issue;
                if (!acc[volume]) {
                    acc[volume] = [];
                }
                // Add the journal if it's not already included (based on volume and issue)
                if (!acc[volume].some(existingJournal => existingJournal.issue === issue)) {
                    acc[volume].push(journal);
                }
                return acc;
            }, {});

            // Sort the journals within each volume by issue
            Object.keys(grouped).forEach((volume) => {
                grouped[volume].sort((a, b) => a.issue - b.issue);
            });

            setGroupedJournals(grouped);
        }
    }, [journals]);

    const sortedVolumes = Object.keys(groupedJournals).sort((a, b) => b - a);

    return (
        <>
            <Navbar />
            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Archive</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline"><Link to="/archive">Archive</Link></li>
                </ul>
            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                    {isLoading && <div className="flex justify-center items-center w-full min-h-[300px]"><span className="loader"></span></div>}
                    {(!isLoading && journals.length > 0) &&
                        sortedVolumes.map((volume) => (
                            <div key={volume} style={{ marginBottom: "20px" }}>

                                <h3 className="font-bold text-[#d80c6c] text-[16px]">Volume {volume}</h3>
                                {groupedJournals[volume].map((journal) => (
                                    <div className="flex gap-2 items-center ml-4">
                                        <img width={24} height={24} src={book} alt="journal" />
                                        <Link to={`/journal/${volume}/${journal.issue}`} className="text-[16px]" key={journal._id} style={{ color: "#d80c6c", display: "block", }}>
                                            Issue {journal.issue}
                                        </Link>
                                    </div>

                                ))}
                            </div>
                        ))}

                    {(!isLoading && journals.length === 0) &&
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
