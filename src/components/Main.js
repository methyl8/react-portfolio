import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfoliio";
import Contact from "./Contact";
import Resume from "./Resume";

function Main() {
    const [curPage, setCurPage] = useState("About")

    const renderPage = () => {
        if (curPage === "Resume") {
            return <Resume />
        }
        else if (curPage === "Portfolio") {
            return <Portfolio />
        }
        else if (curPage === "Contact") {
            return <Contact />
        }
        else {
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