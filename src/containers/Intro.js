import React from 'react';
import recordVisit from './recordVisit';

var techstack = [
    {
        name: "Node.js",
        url: "https://nodejs.or/"
    },
    {
        name: "Express.js",
        url: "https://expressjs.com/"
    },
    {
        name: "React",
        url: "https://reactjs.org/"
    },
    {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/"
    },
    {
        name: "MongoDB",
        url: "https://www.mongodb.com/"
    },
    {
        name: "Python",
        url: "https://www.python.org/"
    },
    {
        name: "C#",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework"
    },
    {
        name: "PHP",
        url: "http://www.php.net/"
    }
]

export default function Intro() {
    recordVisit('intro');
    var tech = techstack.map((t, index) => {
        return <li key={index}>
            <a href={t.url} rel="noopener noreferrer nofollow" target="_blank">{t.name}</a>
        </li>;
    });

    return (
        <div className="container has-addons-centered" id="frame">
            <div className="box column is-9 is-centered" id="intro">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-96x96">
                            <a href="https://www.linkedin.com/in/radovan-delic/" rel="noopener noreferrer nofollow" target="_blank">
                                <img src="./static/16472916_10211820442857230_5804988685818547532_n.jpg" alt="placeholder" />
                            </a>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong><a href="https://www.linkedin.com/in/radovan-delic/" rel="noopener noreferrer nofollow" target="_blank">Intro </a></strong>
                                <br />
                                Hi, my name is Radovan Delić and this is my portfolio.
                            <br />
                                <br />
                                I am a Full Stack Developer currently based in Brussels, Belgium.
                            I am relatively new to web development but so far I have built
                            many small to medium sized projects in multiple languages and frameworks
                            and I am open to learning many more.
                            Also, in 2017 I competed in the&nbsp;
                            <strong><a href="https://www.hackerrank.com/results/projecteuler/r_delic"
                                    rel="noopener noreferrer nofollow" target="_blank">Project Euler</a></strong>&nbsp;
                            challenge on <a href="https://www.hackerrank.com" rel="noopener noreferrer nofollow" target="_blank">HackerRank</a> and scored in the top 2% out of ~70k participants
                            with <strong><a href="https://www.hackerrank.com/results/projecteuler/r_delic"
                                    rel="noopener noreferrer nofollow" target="_blank">32/32</a></strong> perfect solutions.
                            <br />
                                <br />
                                Feel free to check out some of my demo projects in the navbar.
                            <br />
                                <br />
                                Q: What is my favorite language/framework?
                            <br />A: Whatever gets the job done. (and has decent documentation and community support ofc)
                            </p>


                            <ul className="tech-tags is-centered"> {tech} </ul>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item" href="https://www.linkedin.com/in/radovan-delic/" rel="noopener noreferrer nofollow" target="_blank">
                                    <span className="icon is-small"><i className="fa fa-linkedin"></i></span>
                                </a>
                                <a className="level-item" href="https://github.com/radovandelic" rel="noopener noreferrer nofollow" target="_blank">
                                    <span className="icon is-small"><i className="fa fa-github"></i></span>
                                </a>
                                <a className="level-item" href="mailto:r.delic@net.hr">
                                    <span className="icon is-small"><i className="fa fa-envelope"></i></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article >
            </div >
        </div>
    )
}
