import React from "react";

function Navbar({curPage, setCurPage}) {
return(
        <ul className="nav nav-tabs bg-dark justify-content-end">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => setCurPage('About')}
              className={curPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => setCurPage('Portfolio')}
              className={curPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => setCurPage('Resume')}
              className={curPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => setCurPage('Contact')}
              className={curPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      );
    }
    
export default Navbar;