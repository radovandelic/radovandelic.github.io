import React, { Component } from 'react';
import { Description, TreeView } from './index.js';
import bowser from 'bowser';
import dirTree from '../data/directorytree.json';

var browserIcon = "fa fa-chrome";
if (bowser.msie && bowser.version <= 6) {
    browserIcon = "fa fa-internet-explorer";
} else if (bowser.firefox) {
    browserIcon = "fa fa-firefox";
} else if (bowser.safari) {
    browserIcon = "fa fa-safari";
} else if (bowser.opera) {
    browserIcon = "fa fa-opera";
}

export default class Iframe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "description",
            project: "philarios",
            url: "https://philarios.ml"
        };
    }
    componentDidMount = () => {
        var script = document.createElement("script");
        script.id = "acescript";
        script.type = "text/javascript";
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js';
        script.integrity = "sha256-U//RSeH3TR3773Rk+1lAufJnRjEaG5LcdbvGV72kHEM=";
        script.crossOrigin = "anonymous";
        document.getElementsByTagName("head")[0].appendChild(script);

        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ext-language_tools.js';
        script.integrity = "sha256-lWjFoKJOA8E3lXU/1gCNhbDX6rCwzfwd0BJpy620TZ4=";
        script.crossOrigin = "anonymous";
        document.getElementsByTagName("head")[0].appendChild(script);

    }

    changeActive = (tab) => {
        if (tab !== 'github' && document.getElementsByClassName("is-active")) {
            document.getElementsByClassName("is-active")[0].classList.remove("is-active");
            document.getElementById(tab).classList.add("is-active");
        }
        switch (tab) {
            case "description":
                this.setState({ active: 'description' });
                break;

            case "demo":
                this.setState({ active: 'demo' });
                break;

            case "code":
                this.setState({ active: 'code' });
                break;

            case "github":
                window.open(this.state.github, '_blank');
                if (this.state.github === "https://github.com/radovandelic/apocryphon") {
                    window.open("https://github.com/radovandelic/philarios", '_blank');
                }
                break;

            default:
                break;
        }
    }
    changeProject = (newProject) => {
        var url = "https://philarios.ml";
        var github = "https://github.com/radovandelic";
        switch (newProject) {
            case "philarios":
                url = "https://philarios.ml";
                github = "https://github.com/radovandelic/apocryphon";
                break;
            case "holmichapp":
                url = "https://holmichapp.herokuapp.com";
                github = "https://github.com/radovandelic/holmichapp";
                break;
            case "rankerjs":
                url = "https://rankerjs.herokuapp.com";
                github = "https://github.com/radovandelic/rankerjs";
                break;
            case "merchantjs":
                url = "https://merchantjs.herokuapp.com";
                github = "https://github.com/radovandelic/merchantjs";
                break;
            case "battleship":
                url = "https://battleships.gq";
                github = "https://github.com/radovandelic/apocryphon";
                break;
            case "starbook":
                url = "https://starbook.bitballoon.com";
                github = "https://github.com/radovandelic/starbook";
                break;
            case "cleancalc":
                url = "https://cleancalc.bitballoon.com";
                github = "https://github.com/radovandelic/cleancalc";
                break;
            default:
                break;
        }
        this.changeActive('description');
        this.setState({ url: url, github: github, project: newProject });

    }

    render() {
        var { match } = this.props;
        var frame = null;
        if (this.state.project !== match.params.project) {
            this.changeProject(match.params.project)
        }

        switch (this.state.active) {
            case 'description':
                frame = <Description project={this.state.project} />;
                break;
            case 'demo':
                frame = <iframe className="column is-9 is-centered" title={match.params.project} src={this.state.url}></iframe>;
                break;
            case 'code':
                frame = <TreeView data={dirTree[match.params.project]} />;
                break;
            default:
                frame = <Description project={match.params.project} />;
                break;
        }

        return (
            <div className="container has-addons-centered" id="iframe">
                <div className="tabs is-small is-toggle is-centered">
                    <ul>
                        <li className="is-active" id="description" onClick={e => { this.changeActive("description"); }}>
                            <a>
                                <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                                <span>Description</span>
                            </a>
                        </li>
                        <li id="demo" onClick={e => { this.changeActive("demo"); }}>
                            <a>
                                <span className={"icon is-small"}><i className={browserIcon}></i></span>
                                <span>Demo</span>
                            </a>
                        </li>
                        <li id="code" onClick={e => { this.changeActive("code"); }}>
                            <a>
                                <span className="icon is-small"><i className="fa fa-code"></i></span>
                                <span>Code</span>
                            </a>
                        </li>
                        <li id="github" onClick={e => { this.changeActive("github"); }}>
                            <a>
                                <span className="icon is-small"><i className="fa fa-github"></i></span>
                                <span>Github</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="columns is-centered" id="frame">
                    {frame}
                </div>
            </div >
        )

    }
}
