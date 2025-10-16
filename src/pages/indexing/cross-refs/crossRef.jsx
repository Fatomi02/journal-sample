import Widget from "../../../components/widget/widget";
import Footer from "../../../components/footer/footer";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import { useEffect, useState } from "react";
import api from "../../../api/api";
import { toast } from "react-toastify";
import emptyBanner from "../../../assets/images/empty.png";
import book from '../../../assets/icons/book.svg';


export default function CrossRef() {
    const [journals, setJournals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchJournals();
    }, []);

    const fetchJournals = () => {
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
    }

    return (
        <>
            <Navbar />
            <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] leading-9 italic text-[#444444]">Cross Refs</h2>
                <ul className="flex justify-center gap-4 text-[#797979] mt-3">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li><span> &gt;</span></li>
                    <li className="hover:underline"><Link to="/indexing/cross-refs">Cross Refs</Link></li>
                </ul>

            </div>
            <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
                <div className="w-full mx-auto md:w-[70%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
                    {isLoading && <div className="flex justify-center items-center w-full min-h-[300px]"><span className="loader"></span></div>}
                    {(!isLoading && journals.length > 0) &&
                        journals.map((journal) => (
                            <div key={journal._id} className="flex gap-2 items-center" style={{ marginBottom: "20px" }}>
                                <img width={28} height={28} src={book} alt="" />
                                <a href={`https://doi.org/${journal.doi}`} target="_blank" rel="noopener noreferrer">
                                    <h3 className="font-bold text-[#d80c6c] text-[16px]">Volume {journal.title}</h3>
                                </a>
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
        </>
    )
}