import React from 'react';
import recordVisit from './recordVisit';

export default function LinkedIn() {/* 
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    document.getElementsByTagName("head")[0].appendChild(script); */
    recordVisit('contact');

    return (
        <div className="linkedin">
            <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="radovan-delic" data-rendered="true" data-uid="379205">
                <a className="LI-simple-link" href="https://be.linkedin.com/in/radovan-delic?trk=profile-badge" rel="noopener noreferrer nofollow" target="_blank">loading...</a>
                <div>
                    <link rel="stylesheet" href="https://static.licdn.com/sc/h/2e1b81dfmyti45t4strx6bmw9" />
                    <div id="linkedin-container" dir="ltr" className="LI-badge-container-vertical-dark LI-badge-container vertical dark large" style={{ display: 'none' }} >
                        <div className="LI-profile-badge-header LI-name-container"><div className="LI-col">
                            <div className="LI-profile-pic-container" style={{ backgroundImage: 'url(https://static.licdn.com/sc/h/856xpihrituhwdjrua9z5u5na)' }}>
                                <img src="./static/16472916_10211820442857230_5804988685818547532_n.jpg" className="LI-profile-pic" alt="Radovan Delić" />
                            </div>
                        </div>
                            <div className="LI-col LI-header">
                                <div className="LI-name">
                                    <a href="https://be.linkedin.com/in/radovan-delic?trk=profile-badge-name" rel="noopener noreferrer nofollow" target="_blank">
                                        Radovan Delić
                                    </a>
                                </div>
                                <div className="LI-title">Full Stack Web Developer</div>
                            </div>
                        </div>
                        <br />
                        <ul className="more-info">
                            <li className="LI-field">
                                <a href="https://www.linkedin.com/edu/elium-academy-of-software-%26-entrepreneurship-3155094?trk=profile-badge-school" rel="noopener noreferrer nofollow" target="_blank">
                                    Elium Academy of Software &amp; Entrepreneurship
                                </a>
                            </li>
                        </ul>
                        <div className="LI-profile-badge-footer">
                            <a href="https://be.linkedin.com/in/radovan-delic?trk=profile-badge-cta" className="LI-view-profile" rel="noopener noreferrer nofollow" target="_blank">
                                View profile
                            </a>
                            <span className="LI-logo">
                                <img src="https://static.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_flat_white_93x21.png" alt="LinkedIn" className="LI-icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
