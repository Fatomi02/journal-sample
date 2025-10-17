import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Widget from "../../components/widget/widget";
import emptyBanner from "../../assets/images/empty.png";
import api from "../../api/api";
import { toast } from "react-toastify";
import book from '../../assets/icons/book.png';


export default function CurrentPage() {
      const [isLoading, setIsLoading] = useState(false)
    const [filteredJournals, setFilteredJournals] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        api.get('/api/journals').then((response) => {
            if (response) {
                setIsLoading(false)
                const journals = response.data.journals;
                if (journals.length === 1) {
                    setFilteredJournals(journals)
                } else {
                    const highestVolume = Math.max(...journals.map((j) => j.volume));
                    const highestVolumeJournals = journals.filter((j) => parseInt(j.volume) === highestVolume);
                    console.log(highestVolumeJournals)
                    const highestIssue = Math.max(...highestVolumeJournals.map((j) => j.issue));
                    const highestVolumeAndIssueJournals = highestVolumeJournals.filter((j) => j.issue === highestIssue);
                    setFilteredJournals(highestVolumeAndIssueJournals);
                }
            }
        }).catch((error) => {
            setIsLoading(false);
            console.error(error);
            toast.error(error)
        })
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Current</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline">Current</li>
                </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[70%] text-justify text-[#626262] text-[14px] mt-[-36px] flex flex-col gap-8 leading-7">
                    {filteredJournals.length > 0 && <h6 className="text-center font-semibold text-[#d80c6c] text-[18px]">Volume {filteredJournals[0]?.volume} Issue {filteredJournals[0]?.issue}</h6>}
                    <ul className="list-disc flex flex-col gap-2">
                        {isLoading && <div className="flex justify-center items-center h-full w-full"><span className="loader"></span></div> }
                        {(!isLoading && filteredJournals.length > 0) &&
                        filteredJournals.map((journal) => (
                            <div key={journal._id} className="flex gap-2 items-center">
                                <img width={24} height={24} src={book} alt="" />
                                <Link to={`/journal/${journal.volume}/${journal.issue}/${journal.page}`} className="font-medium text-primary hover:text-secondary text-[16px] hover:underline">{journal.title}</Link>
                            </div>
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
        </>
    )
}