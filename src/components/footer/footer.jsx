import React from "react";
import mail from "../../assets/icons/mail.png";
import phone from "../../assets/icons/phone.png";
import { Outlet, Link } from "react-router-dom";
import ithenticate from "../../assets/logos/ithenticate-badge.png"
import "./footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="xl:w-[64%] lg:w-[80%] w-[90%] mt-[80px] text-start mx-auto flex flex-col md:flex-row mb-[30px] gap-[40px] md:justify-between pt-[60px] text-[14px]">
          <div className="text-white  selection:text-white">
            <ul>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/">Editor in chief</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/editorial-in-board">Editorial Board</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/peer-review">Peer Review</Link>
              </li>
            </ul>
          </div>
          <div className="text-white  selection:text-white">
            <ul>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/open-access-policy">Open Access</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/editorialpolicy">Editorial Policy</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/publicationethics">Publication Ethics</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/digitalarchive">Digital Archive</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <a href="#copyright">Copyright</a>
              </li>
            </ul>
          </div>
          <div className="text-white  selection:text-white">
            <ul>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/plagiarism">Plagiarism Policy</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/publicationfee">Publication fee</Link>
              </li>
              <li className="py-1 pl-4 hover:underline">
                <Link to="/submissionguide">Submission Guide</Link>
              </li>
            </ul>
          </div>
          <div className="text-white  selection:text-white">
            <ul>
              <li className="py-1 pl-4">
                <i>
                  <b>Contact us</b>
                </i>
              </li>
              <li className="py-1 pl-4 flex items-center gap-3">
                <a
                  className="hover:underline"
                  href="mailto:actabioscientia@gmail.com"
                >
                  <img height="24" width="24" src={mail} alt="mail" />
                </a>
                <a className="hover:underline" href="tel:+2349026346768">
                  <img height="24" width="24" src={phone} alt="phone" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span>Copyright reserved © Acta BioScientia </span> <br />
        <span>Powered by Optimus_Prime_Technologies</span> <br /> <br />
        <div className="flex gap-3 justify-center">© 2025 Acta BioScientia | Verified by <img className="" src={ithenticate} alt="iThenticate Badge" width={100} height={100} /></div>
      </section>
      <Outlet />
    </>
  );
}
