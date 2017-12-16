import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AceEditor } from './index.js';
import bowser from 'bowser'

export default class Iframe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "https://philarios.ml"
        };
    }
    componentDidMount = () => {
        var { match } = this.props;
        var url = "https://philarios.ml";
        var github = "https://github.com/radovandelic";
        switch (match.params.project) {
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
                url = "httos://merchantjs.herokuapp.com";
                github = "https://github.com/radovandelic/merchantjs";
                break;
            case "battleship":
                url = "https://battleships.gq";
                github = "https://github.com/radovandelic/apocryphon";
                break;
            default:
                break;
        }
        this.setState({ url: url, github: github });

    }

    changeElement = (tab) => {
        var { match } = this.props;
        document.getElementsByClassName("is-active")[0].classList.remove("is-active");
        document.getElementById(tab).classList.add("is-active");
        switch (tab) {
            case "description":
                ReactDOM.render(<iframe title={match.params.project} src={this.state.url}></iframe>, document.getElementById("frame"));
                break;
            case "demo":
                ReactDOM.render(<iframe title={match.params.project} src={this.state.url}></iframe>, document.getElementById("frame"));
                break;
            case "code":
                ReactDOM.render((<div id="editor"> <AceEditor /> </div>), document.getElementById("frame"));
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

    render() {
        var { match } = this.props;
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
        var url = "https://philarios.ml";
        switch (match.params.project) {
            case "philarios":
                url = "https://philarios.ml";
                break;
            case "holmichapp":
                url = "https://holmichapp.herokuapp.com";
                break;
            case "rankerjs":
                url = "https://rankerjs.herokuapp.com";
                break;
            case "merchantjs":
                url = "httos://merchantjs.herokuapp.com";
                break;
            case "battleship":
                url = "https://battleships.gq"
                break;
            default:
                break;
        }
        return (
            <div className="container" id="iframe">
                <div className="tabs is-small is-toggle">
                    <ul>
                        <li className="is-active" id="description" onClick={e => { this.changeElement("description"); }}>
                            <a>
                                <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                                <span>Description</span>
                            </a>
                        </li>
                        <li id="demo" onClick={e => { this.changeElement("demo"); }}>
                            <a>
                                <span className={"icon is-small"}><i className={browserIcon}></i></span>
                                <span>Demo</span>
                            </a>
                        </li>
                        <li id="code" onClick={e => { this.changeElement("code"); }}>
                            <a>
                                <span className="icon is-small"><i className="fa fa-code"></i></span>
                                <span>Code</span>
                            </a>
                        </li>
                        <li id="github" onClick={e => { this.changeElement("github"); }}>
                            <a>
                                <span className="icon is-small"><i className="fa fa-github"></i></span>
                                <span>Github</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="frame">
                    <iframe title={match.params.project} src={url}></iframe>
                </div>
            </div >
        )

    }
}
