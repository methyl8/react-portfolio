import React from "react";
import "./assets/css/footerStyle.css"


function Footer() {
    return (
        <>
            <div className="row d-flex justify-content-end foot">
                <a className="col-lg-2 col-md-6 col-sm-12 p-1 m-4 h-50 footanchor" href="https://www.github.com/methyl8" target="_blank" rel="noreferrer">GitHub</a>
                <a className="col-lg-2 col-md-6 col-sm-12 p-1 m-4 h-50 footanchor" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </>
    )
}

export default Footer;