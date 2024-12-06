import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Link, Outlet } from "react-router-dom";
import checkWhite from "../../assets/icons/check-white.svg";
import closeWhite from "../../assets/icons/close-white.svg";
import Widget from "../../components/widget/widget";
import "./submitPage.css";
import Footer from "../../components/footer/footer";

export default function SubmitPage() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts

  const checkValidation = () => {
    let isValid = true; // Assume form is valid initially
    let firstInvalidElement = null; // To store the first invalid input element

    let firstName = document.getElementById("first-name");
    let firstNameError = document.getElementById("first-name-error");
    let middleName = document.getElementById("middle-name");
    let middleNameError = document.getElementById("middle-name-error");
    let lastName = document.getElementById("last-name");
    let lastNameError = document.getElementById("last-name-error");
    let email = document.getElementById("email");
    let emailError = document.getElementById("email-error");
    let affiliation = document.getElementById("affiliation");
    let affiliationError = document.getElementById("affiliation-error");
    let mobile = document.getElementById("mobile");
    let mobileError = document.getElementById("mobile-error");
    let title = document.getElementById("title");
    let titleError = document.getElementById("title-error");
    let abstract = document.getElementById("abstract");
    let abstractError = document.getElementById("abstract-error");
    let suggest = document.getElementById("suggest");
    let suggestError = document.getElementById("suggest-error");
    let mainArticle = document.getElementById("main-article");
    let mainArticleError = document.getElementById("main-article-error");

    // Check each field and mark as invalid if necessary
    if (!firstName.validity.valid) {
      firstNameError.style.display = "block";
      firstName.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = firstName;
    }
    if (!middleName.validity.valid) {
      middleNameError.style.display = "block";
      middleName.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = middleName;
    }
    if (!lastName.validity.valid) {
      lastNameError.style.display = "block";
      lastName.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = lastName;
    }
    if (!email.validity.valid) {
      emailError.style.display = "block";
      email.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = email;
    }
    if (!affiliation.validity.valid) {
      affiliationError.style.display = "block";
      affiliation.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = affiliation;
    }
    if (!mobile.validity.valid) {
      mobileError.style.display = "block";
      mobile.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = mobile;
    }
    if (!title.validity.valid) {
      titleError.style.display = "block";
      title.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = title;
    }
    if (!abstract.validity.valid) {
      abstractError.style.display = "block";
      abstract.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = abstract;
    }
    if (!suggest.validity.valid) {
      suggestError.style.display = "block";
      suggest.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = suggest;
    }
    if (!mainArticle.validity.valid) {
      mainArticleError.style.display = "block";
      mainArticle.classList.add("border-red-500");
      isValid = false;
      if (!firstInvalidElement) firstInvalidElement = mainArticle;
    }

    // If there's an invalid input, scroll to it
    if (firstInvalidElement) {
      firstInvalidElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      firstInvalidElement.focus();
    }

    return isValid; // Return whether the form is valid or not
  };

  const removeError = (inputId, errorId) => {
    let id = document.getElementById(inputId);
    let error = document.getElementById(errorId);
    error.style.display = "none";
    id.classList.remove("border-red-500");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSuccess(false);
    setError(false);
    if (checkValidation()) {
      try {
        const formData = new FormData(ev.currentTarget);
        const postReq = await fetch(
          "https://actabioscientia.org/api/submit-journal.php",
          {
            method: "POST",
            body: formData,
          }
        );
        if (!postReq.ok) {
          setError(true);
          return;
        }
        const resp = await postReq.json();
        if (!resp.status) {
          setError(true);
        } else {
          setSuccess(true);
          ev.currentTarget.reset();
        }
      } catch (error) {
        setError(true);
      }
    }
  };

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
            <form id="form" onSubmit={handleSubmit} noValidate>
              <div className="inner-name-box">
                <label htmlFor="first-name" className="label">
                  First Name <span className="asterisk">*</span>
                </label>
                <input
                  onFocus={() => removeError("first-name", "first-name-error")}
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                />
                <span id="first-name-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="middle-name" className="label">
                  Middle Name <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  onFocus={() =>
                    removeError("middle-name", "middle-name-error")
                  }
                  id="middle-name"
                  name="middle-name"
                  required
                />
                <span id="middle-name-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="last-name" className="label">
                  Last Name <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  onFocus={() => removeError("last-name", "last-name-error")}
                  id="last-name"
                  name="last-name"
                  required
                />
                <span id="last-name-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="email" className="label">
                  Email <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  onFocus={() => removeError("email", "email-error")}
                  id="email"
                  name="email"
                  required
                />
                <span id="email-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="affiliation" className="label">
                  Affiliation <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  onFocus={() =>
                    removeError("affiliation", "affiliation-error")
                  }
                  id="affiliation"
                  name="affiliation"
                  required
                />
                <span id="affiliation-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="mobile" className="label">
                  Mobile <span className="asterisk">*</span>
                </label>
                <input
                  type="number"
                  onFocus={() => removeError("mobile", "mobile-error")}
                  id="mobile"
                  name="mobile"
                  required
                />
                <span id="mobile-error" className="error">
                  This field is required
                </span>
              </div>

              <h2 className="text-[25px] text-[#161922] tracking-normal font-light leading-7">
                Manuscript Information
              </h2>
              <div className="inner-name-box">
                <label htmlFor="title" className="label">
                  Title <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  onFocus={() => removeError("title", "title-error")}
                  id="title"
                  name="title"
                  required
                />
                <span id="title-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="abstract" className="label">
                  Abstract <span className="asterisk">*</span>
                </label>
                <textarea
                  rows="8"
                  onFocus={() => removeError("abstract", "abstract-error")}
                  id="abstract"
                  name="abstract"
                  required
                ></textarea>
                <span id="abstract-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="keyword" className="label">
                  Keywords
                </label>
                <input
                  type="text"
                  id="keyword"
                  name="keyword"
                  placeholder="Keywords separated with comma"
                />
                <i className="font-bold">
                  Enter maximum of 6 keywords separated with comma
                </i>
              </div>
              <div className="inner-name-box">
                <label htmlFor="suggest" className="label">
                  Suggest 3 Reviewers <span className="asterisk">*</span>
                </label>
                <textarea
                  rows="8"
                  onFocus={() => removeError("suggest", "suggest-error")}
                  placeholder="Suggest 3 Reviewers for the Manuscript indicate their Title, Names, Expertise and Email"
                  id="suggest"
                  name="suggest"
                  required
                ></textarea>
                <span id="suggest-error" className="error">
                  This field is required
                </span>
              </div>

              <h2 className="text-[25px] text-[#161922] tracking-normal font-light leading-7">
                Attachment
              </h2>
              <div className="inner-name-box">
                <label htmlFor="main-article" className="label">
                  Main Article <span className="asterisk">*</span>
                </label>
                <input
                  type="file"
                  onFocus={() =>
                    removeError("main-article", "main-article-error")
                  }
                  id="main-article"
                  name="main-article"
                  required
                />
                <span id="main-article-error" className="error">
                  This field is required
                </span>
              </div>
              <div className="inner-name-box">
                <label htmlFor="table-figure" className="label">
                  Tables & Figures
                </label>
                <input type="file" id="table-figure" name="table-figure" />
              </div>
              <div className="inner-name-box">
                <label htmlFor="cover-letter" className="label">
                  Cover Letter
                </label>
                <input type="file" id="cover-letter" name="cover-letter" />
              </div>
              <div className="inner-name-box">
                <label htmlFor="additional-files" className="label">
                  Additional Files
                </label>
                <input
                  type="file"
                  id="additional-files"
                  name="additional-files"
                />
              </div>
              <button
                type="submit"
                className="text-white py-3 px-2 bg-[#d80c6c] w-[80px] rounded-lg"
              >
                Send
              </button>
              {error && (
                <div className="error_flag">
                  <div className="error_container">
                    <img
                      height="24"
                      width="24"
                      src={checkWhite}
                      alt="check-icon"
                    />
                    <div className="content">
                      An error occurred while submitting
                      <span className="span"></span>
                    </div>
                  </div>
                  <img
                    className="cursor-pointer"
                    onClick={() => setError(false)}
                    height="24"
                    width="24"
                    src={closeWhite}
                    alt="close-icon"
                  />
                </div>
              )}
              {success && (
                <div className="success_flag">
                  <div className="success_container">
                    <img
                      height="24"
                      width="24"
                      src={checkWhite}
                      alt="check-icon"
                    />
                    <div className="content">
                      Journal successfully submitted
                      <span className="span">Thank you</span>
                    </div>
                  </div>
                  <img
                    className="cursor-pointer"
                    onClick={() => setSuccess(false)}
                    height="24"
                    width="24"
                    src={closeWhite}
                    alt="close-icon"
                  />
                </div>
              )}
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
