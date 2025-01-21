import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";
import emptyBanner from "../../assets/images/empty.png";
import api from "../../api/api";
import { toast } from "react-toastify";


export default function IssueDetails() {
    const { volume, issue } = useParams();
      const [isLoading, setIsLoading] = useState(false)
    const [filteredJournals, setFilteredJournals] = useState([]);
    const [singleJournalDate, setSingleJournalDate] = useState();
    
    useEffect(() => {
        setIsLoading(true)
        api.get('/api/journals').then((response) => {
            if (response) {
                setIsLoading(false)
                const filtered = response.data.journals.filter(
                    (journal) => journal.volume === volume && journal.issue === parseInt(issue)
                );
                setSingleJournalDate(filtered[0]?.date)
                setFilteredJournals(filtered);
            }
        }).catch((error) => {
            setIsLoading(false);
            console.error(error);
            toast.error(error)
        })
        window.scrollTo(0, 0);
    }, [volume, issue]);

    return (
        <>
            <Navbar />
            <div className="w-full mt-[220px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[24px] leading-9 italic text-[#444444]">Volume {volume} Issue {issue}  ({new Date(singleJournalDate).toLocaleDateString('en-US', {
                                    year: "numeric"
                                })})</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline">Volume {volume} Issue {issue} </li>
                </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[70%] text-justify text-[#626262] text-[14px] mt-[-36px] flex flex-col gap-8 leading-7">
                    <ul className="list-disc flex flex-col gap-1 pl-[30px] lg:pl-0">
                        {isLoading && <div className="flex justify-center items-center h-full w-full"><span className="loader"></span></div> }
                        {(!isLoading && filteredJournals.length > 0) &&
                        filteredJournals.map((journal) => (
                            <li key={journal._id} className="font-medium text-[14px] tracking-tighter text-[#d80c6c]">
                                <Link to={`/journal/${volume}/${journal.issue}/${journal.page}}`} className="text-[16px] hover:underline">{journal.title}</Link>
                            </li>
                        ))
                        }
                    </ul>
                    {(!isLoading && filteredJournals.length === 0) && 
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
    )
}