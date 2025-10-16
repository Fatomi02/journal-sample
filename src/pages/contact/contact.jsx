import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Widget from "../../components/widget/widget";
import Navbar from "../../components/navbar/navbar";

const ContactPage = () => {
    const removeError = (inputId, errorId) => {
        let id = document.getElementById(inputId);
        let error = document.getElementById(errorId);
        error.style.display = "none";
        id.classList.remove("border-red-500");
      }
    return (
    <>
      <Navbar />
      <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
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
            <form id="form" action="mailto:fatomiabdulrahmon@gmail.com" method="post" encType="text/plain">
            <div class="inner-name-box">
              <label for="first-name" class="label">
                First Name <span class="asterisk">*</span>
              </label>
              <input onFocus={() => removeError('first-name', 'first-name-error')} type="text" id="first-name" name="first-name" required />
              <span id="first-name-error" class="error">
            This field is required
          </span>
            </div>
            <div class="inner-name-box">
              <label for="last-name" class="label">
                Last Name <span class="asterisk">*</span>
              </label>
              <input type="text" onFocus={() => removeError('last-name', 'last-name-error')} id="last-name" name="last-name" required />
              <span id="last-name-error" class="error">
            This field is required
          </span>
            </div>
            <div class="inner-name-box">
              <label for="title" class="label">
                Title <span class="asterisk">*</span>
              </label>
              <input type="text" onFocus={() => removeError('title', 'title-error')} id="title" name="title" required />
              <span id="title-error" class="error">
            This field is required
          </span>
            </div>
            <div class="inner-name-box">
              <label for="message" class="label">
              Message <span class="asterisk">*</span>
              </label>
              <textarea rows="8" onFocus={() => removeError('message', 'message-error')} id="message" name="message" required></textarea>
              <span id="message-error" class="error">
            This field is required
          </span>
            </div>

            <input type="submit" className="text-white py-3 px-2 bg-[#d80c6c] hover:cursor-pointer hover:opacity-80 rounded-lg" value="Send Email" />
          </form>
          </div>
        </div>
        <Widget />
      </section>
      <Footer />
    </>
    )
}

export default ContactPage;