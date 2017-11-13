import React from 'react';
import logo from '../logo.svg';

export default function Navbar(props) {
    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="../">
                            <img src={logo} className="App-logo" alt="Logo" />
                        </a>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item" id="home" onClick={props.navigation}>
                                Home
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" id="examples">
                                    Examples
                                </a>
                                <div className="navbar-dropdown">
                                    <a id="rankerjs" className="navbar-item" onClick={props.navigation}>
                                        ranker.js
                                    </a>
                                    <a id="merchantjs" className="navbar-item" onClick={props.navigation}>
                                        merchant.js
                                    </a>
                                    <a id="starbook" className="navbar-item" onClick={props.navigation}>
                                        starbook
                                    </a>
                                    <a id="battleship" className="navbar-item" onClick={props.navigation}>
                                        battleship
                                    </a>
                                    <a id="cleancalc" className="navbar-item" onClick={props.navigation}>
                                        MVC calculator
                                    </a>
                                </div>
                            </div>
                            <a className="navbar-item" id="contact" onClick={props.navigation}>
                                Contact
                            </a>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined is-small" href="https://github.com/radovandelic/radovandelic.github.io/tree/source">
                                    <span className="icon">
                                        <i className="fa fa-github"></i>
                                    </span>
                                    <span>View Source</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}