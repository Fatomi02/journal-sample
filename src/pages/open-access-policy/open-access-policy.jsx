import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from "react-router-dom";
import Widget from "../../components/widget/widget";

export default function OpenAccessPolicy() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <Navbar />
      <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
        <h2 className="text-[30px] leading-9 italic text-[#444444]">
          Open Access Policy
        </h2>
        <ul className="flex justify-center gap-4 text-[#797979] mt-3">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li>
            <span> &gt;</span>
          </li>
          <li className="hover:underline">
            <Link to="/open-access-policy">Open Access Policy</Link>
          </li>
        </ul>
      </div>
      <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
        <div className="w-full mx-auto md:w-[75%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
          <p className="text-[14px] my-4 leading-7">
            <strong>Acta BioScientia</strong> is a Multidisciplinary
            Open-access, Peer-reviewed Journal. All articles published will be
            immediately and permanently available and free for all persons to
            read and download, copy and distribute.{" "}
          </p>
        </div>
        <Widget />
      </section>
      <Footer />

      <Outlet />
    </>
  );
}
