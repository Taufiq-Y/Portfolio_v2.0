import React from "react";
import About from "../Sections/About";
import Career from "../Sections/Career";
import Education from "../Sections/Education";
import HireMe from "../Sections/HireMe";
import Home from "../Sections/Home";
import Projects from "../Sections/Projects";
import Skill from "../Sections/Skills";
import Footer from "./Footer";

function Main() {
    return (
        <div className="md:px-24 px-10  overflow-y-scroll h-screen scrollbar scrollbar-thumb-indigo-200 scrollbar-thin scroll-smooth ">
            {/* ======== home ========= */}
            <Home />
            {/* ======== About Me ========= */}
            <About />
            {/* ======== Education ========= */}
            <Education />
            {/* ======== Career ========= */}
            <Career />

            {/* ======== Skill ========= */}
            <Skill />

            {/* ======== Projects ========= */}
            <Projects />
            {/* ======== Hire Me ========= */}
            <HireMe />
            <Footer />
        </div>
    );
}

export default Main;
