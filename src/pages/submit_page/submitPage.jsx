import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";
import './submitPage.css'
import Footer from "../../components/footer/footer";

export default function SubmitPage() {
  return (
    <>
      <Navbar />
      <div className="w-full mt-[240px] md:mt-[270px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
        <h2 className="text-[30px] leading-9 italic text-[#444444]">
          Submit Article
        </h2>
        <ul className="flex justify-center gap-4 text-[#797979] mt-3">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li>
            <span> &gt;</span>
          </li>
          <li className="hover:underline">
            <Link to="/submitpage">Submit Article</Link>
          </li>
        </ul>
      </div>
      <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex w-[86%] mt-[70px] mb-10">
        <div className="w-full md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-30px] leading-7">
          <div className="w-full md:w-[50%]">
            <h2 className="text-[30px] tracking-normal text-[#161922] font-light leading-8">
              Author Information
            </h2>
            <form action="">
            <div class="inner-name-box">
              <label for="first-name" class="label">
                First Name <span class="asterisk">*</span>
              </label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div class="inner-name-box">
              <label for="middle-name" class="label">
                Middle Name <span class="asterisk">*</span>
              </label>
              <input type="text" id="middle-name" name="middle-name" required />
            </div>
            <div class="inner-name-box">
              <label for="last-name" class="label">
                Last Name <span class="asterisk">*</span>
              </label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
            <div class="inner-name-box">
              <label for="email" class="label">
                Email <span class="asterisk">*</span>
              </label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="inner-name-box">
              <label for="affiliation" class="label">
                Affiliation <span class="asterisk">*</span>
              </label>
              <input type="text" id="affiliation" name="affiliation" required />
            </div>
            <div class="inner-name-box">
              <label for="mobile" class="label">
                Mobile <span class="asterisk">*</span>
              </label>
              <input type="text" id="mobile" name="mobile" required />
            </div>

            <h2 className="text-[25px] text-[#161922] tracking-normal font-light leading-7">
              Manuscript Information
            </h2>
            <div class="inner-name-box">
              <label for="title" class="label">
                Title <span class="asterisk">*</span>
              </label>
              <input type="text" id="title" name="title" required />
            </div>
            <div class="inner-name-box">
              <label for="title" class="label">
                Abstract <span class="asterisk">*</span>
              </label>
              <textarea rows="8" id="abstract" name="abstract" required></textarea>
            </div>
            <div class="inner-name-box">
              <label for="keyword" class="label">
                Keywords
              </label>
              <input type="text" id="keyword" name="keyword" placeholder="Keywords separated with comma" />
              <i className="font-bold">Enter maximum of 6 keywords separated with comma</i>
            </div>
            <div class="inner-name-box">
              <label for="suggest" class="label">
                Suggest 3 Reviewers <span class="asterisk">*</span>
              </label>
              <textarea rows="8" value="Suggest 3 Reviewers for the Manuscript indicate their Title, Names, Expertise and Email" id="suggest" name="suggest" required></textarea>
            </div>

            <h2 className="text-[25px] text-[#161922] tracking-normal font-light leading-7">
                Attachment
            </h2>
            <div class="inner-name-box">
              <label for="main-article" class="label">
              Main Article <span class="asterisk">*</span>
              </label>
              <input type="file" id="main-article" name="main-article" required />
            </div>
            <div class="inner-name-box">
              <label for="table-figure" class="label">
              Tables & Figures <span class="asterisk">*</span>
              </label>
              <input type="file" id="table-figure" name="table-figure" required />
            </div>
            <div class="inner-name-box">
              <label for="cover-letter" class="label">
              Cover Letter
              </label>
              <input type="file" id="cover-letter" name="cover-letter" />
            </div>
            <div class="inner-name-box">
              <label for="additional-files" class="label">
              Additional Files
              </label>
              <input type="file" id="additional-files" name="additional-files" />
            </div>
            <button className="text-white py-3 px-2 bg-[#d80c6c] w-[80px] rounded-lg">Send</button>
          </form>
          </div>
        </div>
        <Widget />
      </section>
      <Footer />
      <Outlet />
    </>
  );
}
