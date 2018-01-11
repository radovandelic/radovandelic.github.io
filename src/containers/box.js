import React from 'react';


export default function Box() {
    return (
        <div className="box is-centered">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
                    </figure>
                </div>
                <div class="media-content">
                    <div className="content">
                        <p>
                            <strong>philarios.ml</strong>
                            <br />
                            Language learning/practice application developed during my time at Elium Academy in collaboration with:
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/thefrontendguy/">Cahit Kaya</a>
                                    <a href="https://www.linkedin.com/in/thefrontendguy/"> <span className="icon is-small"><i class="fa fa-linkedin-square"></i></span> </a>
                                    <a href="https://github.com/thefrontendguy/"> <span className="icon is-small"><i class="fa fa-github-square"></i></span> </a>,
                            </li> <li>
                                    <a href="https://www.linkedin.com/in/george-ingram-67647732/">George Ingram</a>
                                    <a href="https://www.linkedin.com/in/george-ingram-67647732/"> <span className="icon is-small"><i class="fa fa-linkedin-square"></i></span> </a>
                                    <a href="https://github.com/ivoryblakk/"> <span className="icon is-small"><i className="fa fa-github-square"></i></span> </a>,
                                </li> <li>
                                    <a href="https://www.linkedin.com/in/syouboty/">Sanni Youboty</a>
                                    <a href="https://www.linkedin.com/in/syouboty/"> <span className="icon is-small"><i className="fa fa-linkedin-square"></i></span> </a>
                                    <a href="https://github.com/theutmost/"> <span className="icon is-small"><i className="fa fa-github-square"></i></span> </a>,
                            </li>
                            </ul>
                            <br />
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" href="https://philarios.ml">
                                <span className="icon is-small"><i className="fa fa-external-link"></i></span>
                            </a>
                            <a className="level-item" href="https://github.com/radovandelic/apocryphon">
                                <span className="icon is-small"><i className="fa fa-github"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article >
        </div >
    )
}
