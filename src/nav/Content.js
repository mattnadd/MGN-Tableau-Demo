import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import mgnlogo from '../mgnlogo.svg';
import logo from '../logo.svg';
import Main from "./Main";


function Header() {
  return (
    <Router>
                <nav class="sidebar">
                    <img src={mgnlogo} alt="mgn logo" class="logo"/>

                    <ul class="side-nav">
                        <li class="side-nav__item side-nav__item--active">
                        <NavLink to="/coffeedashboard" class="side-nav__link" activeClassName="side-nav__link" aria-current="page">Coffee Chain Profitbility</NavLink>
                      </li>
                        <li class="side-nav__item ">
                        <div>
                        <NavLink to="/policereport" class="side-nav__link" activeClassName="side-nav__link" aria-current="page">Hartford Police Incidents</NavLink>
                        </div>
                        </li>
                    </ul>

                    <div class="footer">
                    <div> Buit in</div>
                    <img src={logo} alt="react logo" class=" footer-logo"/>
                        &copy;{new Date().getFullYear()}  by MGN.
                    </div>
                </nav>
            <Main/>
    </Router>
  );
}

export default Header;