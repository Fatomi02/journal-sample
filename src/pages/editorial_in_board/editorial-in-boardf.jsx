import React, { useEffect } from "react";
import Widget from "../../components/widget/widget";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

export default function EditorialInBoard() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <Navbar />
      <div className="w-full mt-[240px] md:mt-[250px] text-center relative z-0 mx-auto bg-[#f6f6f6] py-[30px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.3)]">
        <h2 className="text-[30px] leading-9 italic text-[#444444]">
          Editorial Board
        </h2>
        <ul className="flex justify-center gap-4 text-[#797979] mt-3">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li>
            <span> &gt;</span>
          </li>
          <li className="hover:underline">
            <Link to="/editorial-in-board">Editorial Board</Link>
          </li>
        </ul>
      </div>
      <section className="2xl:w-[64%] bg-[#FCFCFC] mx-auto md:flex justify-between w-[86%] mt-[70px] mb-10">
        <div className="w-full mx-auto md:w-[70%] text-justify text-[#626262] text-[14px] mt-[-36px] leading-7">
          <strong className="text-[#d80c6c] text-center">
            Editor in Chief:
          </strong>
          <p className="text-[14px] my-4 leading-7">
            Dr. Olakunle James Onaolapo MBBS (Ibadan), M.Sc., Ph.D. (Ife).
            Associate Professor of Behavioural Neuropharmacology Department of
            Pharmacology and Therapeutics, LAUTECH, Ogbomoso, Oyo State,
            Nigeria.
          </p>
          <strong className="text-[#d80c6c] text-center">
            Associate Editors:
          </strong>
          <ul className="text-[14px] my-4 leading-7 list-decimal pl-6">
            <li>
              Dr Joshua Falade MBBS, FMCPsych, Ph.D , Department of
              Pharmacology, University of Medical Sciences, Ondo, Ondo State,
              Nigeria
            </li>
            <li>
              Dr Abiodun Abioye Oyeleke B. Sc, M.Sc, Ph.D Department of Anatomy,
              Federal University Oye-Ekiti, Ekiti State, Nigeria.
            </li>
          </ul>
          <strong className="text-[#d80c6c] text-center">
            Editorial Assistants:
          </strong>
          <ul className="text-[14px] my-4 leading-7 list-decimal pl-6">
            <li>Akinsanmi Festus AKINSEHINWA</li>
            <li>Joshua Aduragbemi AJAO</li>
            <li>Opeyemi Ojo FAMUYIDE</li>
            <li>Boluwatife Mary OLADIPUPO</li>
          </ul>
          <strong className="text-[#d80c6c] text-center">
            Editorial Office:
          </strong>
          <p className="text-[14px] my-4 leading-7">
            Department of Pharmacology and Therapeutics, Faculty of Basic
            Clinical Sciences, Ladoke Akintola University of Technology,
            Ogbomoso <br />
            <label className="font-bold">Email:</label>{" "}
            <a href="mailto:actabioscientia@gmail.com">
              Actabioscientia@gmail.com
            </a>
            ;{" "}
            <a href="mailto:ojonaolapo@lautech.edu.ng">
              ojonaolapo@lautech.edu.ng
            </a>
            <br />
            <label className="font-bold">Tel:</label>{" "}
            <a href="tel:+2349026346768">+234 9026346768</a>
          </p>
        </div>
        <Widget />
      </section>
      <Footer />
    </>
  );
}
