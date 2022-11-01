import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfoliio";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

function Main() {
    const [curPage, setCurPage] = useState("About")

    const renderPage = () => {
        if (curPage === "Resume") {
            document.title = "React Portfolio - Resume"
            return <Resume />
        }
        else if (curPage === "Portfolio") {
            document.title = "React Portfolio - Portfolio"
            return <Portfolio />
        }
        else if (curPage === "Contact") {
            document.title = "React Portfolio - Contact"
            return <Contact />
        }
        else {
            document.title = "React Portfolio - About"
            return <About />
        }
    }

    return (
        <>
            <Navbar curPage={curPage} setCurPage={setCurPage} />
            {renderPage()}
        </>
    )
}

export default Main;