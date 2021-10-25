import React, { useEffect } from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import mgnlogo from '../mgnlogo.svg';
import logo from '../logo.svg';
import Main from "./Main";



function Header() {
  
const activeNav = () => {
  var header = document.getElementById("side-nav");
  var items = header.getElementsByClassName("side-nav__item");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("side-nav__item--active");
    current[0].className = current[0].className.replace(" side-nav__item--active", "");
    this.className += " side-nav__item--active";
    });
  }
};

useEffect(activeNav);

  return (
    <Router>
                <nav class="sidebar">
                    <img src={mgnlogo} alt="mgn logo" class="logo"/>

                    <ul class="side-nav" id="side-nav">
                        <li class="side-nav__item side-nav__item--active">
                        <Link to="/" class="side-nav__link" aria-current="page">Coffee Chain Profitability</Link>
                      </li>
                        <li class="side-nav__item">
                        <Link to="/policereport" class="side-nav__link"  aria-current="page">Hartford Police Incidents</Link>
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