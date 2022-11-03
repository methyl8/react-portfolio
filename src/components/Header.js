import React from "react";
import Navbar from "./Navbar";
import "./assets/css/navStyle.css";

function Header({curPage, setCurPage}) {
    return (
        <>
            <nav className="nav nav-colors">
                <div className="mx-5 justify-content-start fs-1">David Byrd</div>
                <Navbar curPage={curPage} setCurPage={setCurPage} />
            </nav>

        </>
    )
}

export default Header;