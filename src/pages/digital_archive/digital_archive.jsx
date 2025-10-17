import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
// import arrowDown from "../../assets/icons/dropdown.png";
// import arrowUp from "../../assets/icons/arrow-up.png";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function DigitalArchive() {
  // const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <Navbar />
      <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
        <h2 className="text-[30px] leading-9 italic text-[#444444]">
          Digital Archive
        </h2>
        <ul className="flex justify-center gap-4 text-[#797979] mt-3">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li>
            <span> &gt;</span>
          </li>
          <li className="hover:underline">
            <Link to="/digitalarchive">Digital Archive</Link>
          </li>
        </ul>
      </div>
      <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
        <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
          {/* <div className="flex gap-3">
            <strong>Volume 1 (2024)</strong>
            {!isOpen ? (
              <img
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
                width="24"
                height="24"
                src={arrowDown}
                alt=""
              />
            ) : (
              <img
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
                width="24"
                height="24"
                src={arrowUp}
                alt=""
              />
            )}
          </div>
          {isOpen && (
            <>
              <ul className="flex flex-col gap-3 pl-[30px] md:pl-[40px] my-4">
                <li className="text-primary font-medium">
                  <Link to="/">Issue 1</Link>
                </li>
              </ul>
              <strong className="my-4">Coming soon</strong>
            </>
          )} */}
        </div>
        <Widget />
      </section>
      <Footer />
    </>
  );
}
