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
                            <a href="/" className="navbar-item" id="home">
                                Home
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" id="projects">
                                    Projects
                                </a>
                                <div className="navbar-dropdown">
                                    <a href="/projects/philarios" id="philarios" className="navbar-item">
                                        philarios
                                    </a>
                                    <a href="/projects/holmichapp" id="holmichapp" className="navbar-item">
                                        holmichapp
                                    </a>
                                    <a href="/projects/rankerjs" id="rankerjs" className="navbar-item">
                                        ranker.js
                                    </a>
                                    <a href="/projects/merchantjs" id="merchantjs" className="navbar-item">
                                        merchant.js
                                    </a>
                                    <a href="/projects/battleship" id="battleship" className="navbar-item">
                                        battleship
                                    </a>
                                    <a href="/projects/starbook" id="starbook" className="navbar-item">
                                        starbook
                                    </a>
                                    <a href="/projects/cleancalc" id="cleancalc" className="navbar-item">
                                        MVC calculator
                                    </a>
                                </div>
                            </div>
                            <a href="/contact" className="navbar-item" id="contact">
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