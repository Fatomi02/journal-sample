import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import api from "../../api/api";
import book from '../../assets/icons/book.png';

export default function Widget () {

    const [journals, setJournals] = useState([]);
    const [groupedJournals, setGroupedJournals] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        api.get('/api/journals').then((response) => {
            if (response) {
                setJournals(response.data.journals);
            }
        }).catch((error) => {
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

    const sortedVolumes = Object.keys(groupedJournals)
    .sort((a, b) => b - a)
    .slice(0, 3);

    const lastThreeVolumesData = sortedVolumes.reduce((acc, volume) => {
        acc[volume] = groupedJournals[volume];
        return acc;
    }, {});

    return (
        <>
            <div className="w-full mt-[50px] bg-[#FCFCFC] md:mt-0 md:w-[23%]">
                <div className="text-primary font-semibold  selection:text-white">
                    <ul>
                        <li className="py-[2px] hover:text-secondary hover:underline"><Link to="/submitpage">Submit Article</Link></li>
                        <li className="py-[2px] hover:text-secondary hover:underline"><Link to="/submissionguide">Submission Guide</Link></li>
                        <li className="py-[2px] hover:text-secondary hover:underline"><Link to="/plagiarism">Plagiarism</Link></li>
                        <li className="py-[2px] hover:text-secondary hover:underline"><Link to="/editorialpolicy">Editorial Policy</Link></li>
                        <li className="py-[2px] hover:text-secondary hover:underline"><Link to="/publicationfee">Publication fee</Link></li>
                    </ul>
                </div>

                <div className="w-full py-3 bg-primary text-white text-center mt-[30px] mb-[20px]">Archive</div>

                    {journals.length > 0 &&
                        sortedVolumes.map((volume, index) => (
                            <div key={volume} style={{ marginBottom: "20px" }}>
                                <h3 className="font-bold text-primary">Volume {volume} ({new Date(lastThreeVolumesData[volume][0].date).toLocaleDateString('en-US', {
                                    year: "numeric"
                                })})</h3>
                                {groupedJournals[volume].map((journal) => (
                                    <div key={journal._id} className="bg-[#f5f5f5] flex items-center gap-2 pl-2 py-3">
                                        <img width={20} height={20} src={book} alt="article" />
                                        <Link to={`/journal/${volume}/${journal.issue}`} className="text-primary hover:text-secondary hover:underline">
                                        Issue {journal.issue}
                                    </Link>
                                    </div>
                                ))}
                            </div>
                        ))}

                <div className="mt-14">
                    <span className="text-[#626262]">... click <a href="/archive" className="text-primary hover:text-secondary hover:underline">here</a> for more articles</span>
                </div>

            </div>
            <Outlet />
        </>
    )
}