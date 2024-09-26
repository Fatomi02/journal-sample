import React from "react";
import { Outlet, Link } from "react-router-dom";
import './footer.css'

export default function Footer () {
    return (<>
        <section className="footer">
            <div className="xl:w-[64%] w-[90%] mt-[80px] text-start mx-auto flex flex-col md:flex-row mb-[30px] gap-[40px] xl:gap-[200px] pt-[60px] text-[14px]">
                <div className="text-white selection:bg-[#910506] selection:text-white">
                    <ul>
                        <li className="py-1 pl-4"><a className="hover:underline" href="/">Editor in chief</a></li>
                        <li className="py-1 pl-4"><a className="hover:underline" href="/">Editorial Board</a></li>
                        <li className="py-1 pl-4"><a className="hover:underline" href="/">Peer Review</a></li>
                        <li className="py-1 pl-4"><a className="hover:underline" href="/">Review's Guide</a></li>
                    </ul>
                </div>
                <div className="text-white selection:bg-[#910506] selection:text-white">
                    <ul>
                        <li className="py-1 pl-4"><a className="hover:underline" href="/">Open Access</a></li>
                        <li className="py-1 pl-4 hover:underline"><Link to="/editorialpolicy">Editorial Policy</Link></li>
                        <li className="py-1 pl-4 hover:underline"><Link to="/publicationethics">Publication Ethics</Link></li>
                        <li className="py-1 pl-4 hover:underline"><Link to="/digitalarchive">Digital Archive</Link></li>
                        <li className="py-1 pl-4 hover:underline"><Link to="/copyright">Copyright</Link></li>
                    </ul>
                </div>
                <div className="text-white selection:bg-[#910506] selection:text-white">
                    <ul>
                        <li className="py-1 pl-4 hover:underline"><Link to="/plagiarism">Plagiarism Policy</Link></li>
                        <li className="py-1 pl-4 hover:underline"><Link to="/publicationfee">Publication fee</Link></li>
                        <li className="py-1 pl-4 hover:underline"><Link to="/authorsguide">Author's Guide</Link></li>
                        <li className="py-1 pl-4 hover:underline"><Link to="/submissionguide">Submission Guide</Link></li>
                    </ul>
                </div>
                <div className="text-white selection:bg-[#910506] selection:text-white">
                    <ul>
                        <li className="py-1 pl-4"><i><b>Contact us</b></i></li>
                        <li className="py-1 pl-4">Email: <a className="hover:underline" href="mailto:">journal@gmail.com</a></li>
                        <li className="py-1 pl-4">Phone: <a className="hover:underline" href="tel:">09061716060</a></li>
                    </ul>
                </div>
            </div>

            <span>© PAJOLS 2024</span> <br />
            <span>Powered by Olaitan</span>

        </section>
        <Outlet />
    </>)
}