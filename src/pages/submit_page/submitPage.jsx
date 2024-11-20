import React, {useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";
import './submitPage.css'
import Footer from "../../components/footer/footer";

export default function SubmitPage() {

  const [error,setError] = useState(false)
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts

  const checkValidation = () => {
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
    let tableFigure = document.getElementById("table-figure");
    let tableFigureError = document.getElementById("table-figure-error");

    if (!firstName.validity.valid) {
      firstNameError.style.display = "block";
      firstName.classList.add("border-red-500");
    }

    if (!middleName.validity.valid) {
      middleNameError.style.display = "block";
      middleName.classList.add("border-red-500");
    }
    if (!lastName.validity.valid) {
      lastNameError.style.display = "block";
      lastName.classList.add("border-red-500");
    }
    if (!email.validity.valid) {
      emailError.style.display = "block";
      email.classList.add("border-red-500");
    }
    if (!affiliation.validity.valid) {
      affiliationError.style.display = "block";
      affiliation.classList.add("border-red-500");
    }
    if (!mobile.validity.valid) {
      mobileError.style.display = "block";
      mobile.classList.add("border-red-500");
    }
    if (!title.validity.valid) {
      titleError.style.display = "block";
      title.classList.add("border-red-500");
    }
    if (!abstract.validity.valid) {
      abstractError.style.display = "block";
      abstract.classList.add("border-red-500");
    }
    if (!suggest.validity.valid) {
      suggestError.style.display = "block";
      suggest.classList.add("border-red-500");
    }
    if (!mainArticle.validity.valid) {
      mainArticleError.style.display = "block";
      mainArticle.classList.add("border-red-500");
    }
    if (!tableFigure.validity.valid) {
      tableFigureError.style.display = "block";
      tableFigure.classList.add("border-red-500");
    }

 
  }

  const removeError = (inputId, errorId) => {
    let id = document.getElementById(inputId);
    let error = document.getElementById(errorId);
    error.style.display = "none";
    id.classList.remove("bofrder-red-500");
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();  
    checkValidation()
    try {
            const formData = new FormData(ev.currentTarget);
      const entr = Object.fromEntries(formData)
      console.log(entr)
           const postReq = await fetch(
             "https://test.bigchiefstores.com/api/submit.php",
             {
               method: "POST",
               body: formData,
             }
           );
           if (!postReq.ok) {
             setError(true);
           }
           const resp = await postReq.json();
           if (!resp.status) {
              setError(true)
            }
           console.log(resp.status);
            ev.currentTarget.reset()
         } catch (error) {
           setError(true)
         }

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
            <form id="form"  onSubmit={handleSubmit}>
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
              <label for="middle-name" class="label">
                Middle Name <span class="asterisk">*</span>
              </label>
              <input type="text" onFocus={() => removeError('middle-name', 'middle-name-error')} id="middle-name" name="middle-name" required />
              <span id="middle-name-error" class="error">
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
              <label for="email" class="label">
                Email <span class="asterisk">*</span>
              </label>
              <input type="email" onFocus={() => removeError('email', 'email-error')} id="email" name="email" required />
              <span id="email-error" class="error">
            This field is required
          </span>
            </div>
            <div class="inner-name-box">
              <label for="affiliation" class="label">
                Affiliation <span class="asterisk">*</span>
              </label>
              <input type="text" onFocus={() => removeError('affiliation', 'affiliation-error')} id="affiliation" name="affiliation" required />
              <span id="affiliation-error" class="error">
            This field is required
          </span>
            </div>
            <div class="inner-name-box">
              <label for="mobile" class="label">
                Mobile <span class="asterisk">*</span>
              </label>
              <input type="number" onFocus={() => removeError('mobile', 'mobile-error')} id="mobile" name="mobile" required />
              <span id="mobile-error" class="error">
            This field is required
          </span>
            </div>

            <h2 className="text-[25px] text-[#161922] tracking-normal font-light leading-7">
              Manuscript Information
            </h2>
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
              <label for="abstract" class="label">
                Abstract <span class="asterisk">*</span>
              </label>
              <textarea rows="8" onFocus={() => removeError('abstract', 'abstract-error')} id="abstract" name="abstract" required></textarea>
              <span id="abstract-error" class="error">
            This field is required
          </span>
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
              <textarea rows="8" onFocus={() => removeError('suggest', 'suggest-error')} placeholder="Suggest 3 Reviewers for the Manuscript indicate their Title, Names, Expertise and Email" id="suggest" name="suggest" required></textarea>
              <span id="suggest-error" class="error">
            This field is required
          </span>
            </div>

            <h2 className="text-[25px] text-[#161922] tracking-normal font-light leading-7">
                Attachment
            </h2>
            <div class="inner-name-box">
              <label for="main-article" class="label">
              Main Article <span class="asterisk">*</span>
              </label>
              <input type="file" onFocus={() => removeError('main-article', 'main-article-error')} id="main-article" name="main-article" required />
              <span id="main-article-error" class="error">
            This field is required
          </span>
            </div>
            <div class="inner-name-box">
              <label for="table-figure" class="label">
              Tables & Figures <span class="asterisk">*</span>
              </label>
              <input type="file" onFocus={() => removeError('table-figure', 'table-figure-error')} id="table-figure" name="table-figure" required />
              <span id="table-figure-error" class="error">
            This field is required
          </span>
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
              <button type="submit" className="text-white py-3 px-2 bg-[#d80c6c] w-[80px] rounded-lg">Send</button>
              {error && <div>An error occured</div>}
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
