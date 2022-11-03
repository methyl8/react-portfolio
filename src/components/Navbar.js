import React from "react";
import "./assets/css/navStyle.css"

function Navbar({curPage, setCurPage}) {
return(
  <>
    <ul className="nav nav-tabs nav-colors justify-content-end">
          <li className="nav-item nav-colors">
            <a
              href="#about"
              onClick={() => setCurPage('About')}
              className={curPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item nav-colors">
            <a
              href="#portfolio"
              onClick={() => setCurPage('Portfolio')}
              className={curPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item nav-colors">
            <a
              href="#resume"
              onClick={() => setCurPage('Resume')}
              className={curPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
          <li className="nav-item nav-colors">
            <a
              href="#contact"
              onClick={() => setCurPage('Contact')}
              className={curPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
 </>
      );
    }
    
export default Navbar;