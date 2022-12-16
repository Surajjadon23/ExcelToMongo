import React from 'react'
import {Link,useLocation} from "react-router-dom";
const Navbar=(props)=> {

  let location = useLocation();
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <Link
                        className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                        }`}
                       aria-current="page"
                        to="/"
                       >Home</Link>
                      </li>
                      
                      <li className="nav-item">
                      <Link
                                className={`nav-link ${
                                  location.pathname === "/upload" ? "active" : ""
                                }`}
                                aria-current="page"
                                to="upload">UploadData</Link>
                      </li>

                      <li className="nav-item">
                      <Link
                                className={`nav-link ${
                                  location.pathname === "/view" ? "active" : ""
                                }`}
                                aria-current="page"
                                to="view">ViewData</Link>
                      </li>
                    </ul>
                    </div>
                </div>
            </nav>
          </div>
        )
    }

export default Navbar
