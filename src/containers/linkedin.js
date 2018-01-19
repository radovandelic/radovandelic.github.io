import React from 'react';


export default function LinkedIn() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    document.getElementsByTagName("head")[0].appendChild(script);
    return (
        <div className="linkedin">
            <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="radovan-delic">
                <a className="LI-simple-link" href='https://be.linkedin.com/in/radovan-delic?trk=profile-badge'>loading...</a>
            </div>
        </div >
    )
}
