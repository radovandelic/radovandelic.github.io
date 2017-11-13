import React from 'react';


export default function Box() {
    return (
        <div className="box">
            <div className="field is-grouped">

                <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Enter your email" />
                </p>

                <p className="control">
                    <a className="button is-info"> Notify Me </a>
                </p>
            </div>
        </div>
    )
}
