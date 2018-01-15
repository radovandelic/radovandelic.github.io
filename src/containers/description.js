import React from 'react';
import descriptions from '../data/descriptions';

export default function Description(props) {
    var project = props.project;
    var url = descriptions[project].url; var github = descriptions[project].github;
    var text = descriptions[project].text;
    var contributors = descriptions[project].contributors ? descriptions[project].contributors.map((contributor, index) => {
        return <li key={index}>
            <a href={contributor.linkedin} rel="noopener noreferrer nofollow" target="_blank">
                {contributor.name}
            </a>
            <a href={contributor.linkedin} rel="noopener noreferrer nofollow" target="_blank">
                <span className="icon is-small"><i className="fa fa-linkedin-square"></i></span>
            </a>
            <a href={contributor.github} rel="noopener noreferrer nofollow" target="_blank">
                <span className="icon is-small"><i className="fa fa-github-square"></i></span>
            </a> {contributor.role}
        </li>;
    }) : null;

    var tech = descriptions[project].tech.map((t, index) => {
        return <li key={index}>
            <a href={t.url} rel="noopener noreferrer nofollow" target="_blank">{t.name}</a>
        </li>;
    });

    return (
        <div className="box is-centered">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong><a href={url} rel="noopener noreferrer nofollow" target="_blank">{project} </a></strong>
                            <br />{text}</p>

                        <ul> {contributors} </ul>

                        <strong>Tech Stack:</strong>
                        <ul className="tech-tags"> {tech} </ul>
                        <br />
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" href={url} rel="noopener noreferrer nofollow" target="_blank">
                                <span className="icon is-small"><i className="fa fa-external-link"></i></span>
                            </a>
                            <a className="level-item" href={github} rel="noopener noreferrer nofollow" target="_blank">
                                <span className="icon is-small"><i className="fa fa-github"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article >
        </div >
    )
}
