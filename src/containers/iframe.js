import React, { Component } from 'react';

export default class Iframe extends Component {

    render() {
        return (
            <div className="container" id="iframe">
                <div className="tabs is-toggle">
                    <ul>
                        <li id="demo" onClick={this.props.navigation}>
                            <a>
                                <span className="icon is-small"><i className="fa fa-chrome"></i></span>
                                <span>Demo</span>
                            </a>
                        </li>
                        <li>
                            <a id="code" onClick={this.props.navigation}>
                                <span className="icon is-small"><i className="fa fa-code"></i></span>
                                <span>Code</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                                <span>Description</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <iframe title="rankerjs" src={this.props.url}></iframe>
            </div >
        )

    }
}
