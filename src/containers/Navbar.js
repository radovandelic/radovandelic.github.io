import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="hero-head">
            <nav className="navbar is-dark is-fixed-top">
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
                            <Link to="/" className="navbar-item" id="home" onClick={e => { document.getElementById('projects').innerHTML = 'Projects'; }}>
                                Home
                            </Link>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" id="projects">
                                    Projects
                                </a>
                                <div className="navbar-dropdown">
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > philarios'; }}
                                        to="/projects/philarios" id="philarios" className="navbar-item">
                                        philarios
                                    </Link>
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > holmichapp'; }}
                                        to="/projects/holmichapp" id="holmichapp" className="navbar-item">
                                        holmichapp
                                    </Link>
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > viljuskari'; }}
                                        to="/projects/viljuskari" id="viljuskari" className="navbar-item">
                                        viljuskari
                                    </Link>
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > battleships'; }}
                                        to="/projects/battleships" id="battleships" className="navbar-item">
                                        battleships
                                    </Link>
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > merchantjs'; }}
                                        to="/projects/merchantjs" id="merchantjs" className="navbar-item">
                                        merchant.js
                                    </Link>
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > rankerjs'; }}
                                        to="/projects/rankerjs" id="rankerjs" className="navbar-item">
                                        ranker.js
                                    </Link>
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > starbook'; }}
                                        to="/projects/starbook" id="starbook" className="navbar-item">
                                        starbook
                                    </Link>
                                    <Link onClick={e => { document.getElementById('projects').innerHTML = 'Projects > cleancalc'; }}
                                        to="/projects/cleancalc" id="cleancalc" className="navbar-item">
                                        MVC calculator
                                    </Link>
                                </div>
                            </div>
                            <Link to="/contact" className="navbar-item" id="contact" onClick={e => { document.getElementById('projects').innerHTML = 'Projects'; }}>
                                Contact
                            </Link>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined is-small" href="https://github.com/radovandelic/radovandelic.github.io/tree/source" rel="noopener noreferrer nofollow" target="_blank">
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