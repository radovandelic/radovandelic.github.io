import React from 'react';
import { StyleRoot } from 'radium';
import { Treebeard, decorators } from 'react-treebeard';

import styles from '../css/treeview_styles';
import * as filters from './filter';
import AceEditor from './AceEditor';

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({ style, node }) => {
    const iconType = node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = { marginRight: '5px' };

    return (
        <div style={style.base}>
            <div style={style.title}>
                <i className={iconClass} style={iconStyle} />

                {node.name}
            </div>
        </div>
    );
};

export default class TreeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: this.props.data };
        this.onToggle = this.onToggle.bind(this);
    }
    componentDidMount = () => {
        this.getCode(this.state.data.entry);
    }

    getCode = (path) => {
        const ace = window.ace;
        const editor = ace.edit("editor");
        var extension = path.split('.')[path.split('.').length - 1];
        switch (extension) {
            case 'js':
                editor.getSession().setMode("ace/mode/javascript");
                break;
            case 'html':
                editor.getSession().setMode("ace/mode/html");
                break;
            case 'ejs':
                editor.getSession().setMode("ace/mode/ejs");
                break;
            case 'css':
                editor.getSession().setMode("ace/mode/css");
                break;
            case 'json':
                editor.getSession().setMode("ace/mode/json");
                break;
            case 'md':
                editor.getSession().setMode("ace/mode/markdown");
                break;
            case 'scss':
                editor.getSession().setMode("ace/mode/scss");
                break;
            case 'sql':
                editor.getSession().setMode("ace/mode/sql");
                break;
            case 'cs':
                editor.getSession().setMode("ace/mode/csharp");
                break;
            case 'php':
                editor.getSession().setMode("ace/mode/php");
                break;
            case 'svg':
                editor.getSession().setMode("ace/mode/svg");
                break;
            default:
                editor.getSession().setMode("ace/mode/sh");
                break;
        }
        fetch(path)
            .then(res => { return res.text(); })
            .then(res => {
                editor.setValue(res);
                editor.gotoLine(1);
                if (extension === 'js' && res.includes('react')) {
                    editor.getSession().setMode("ace/mode/jsx");
                } else if (extension === 'js') {
                    editor.getSession().setMode("ace/mode/javascript");
                }
            })
            .catch(err => { console.log(err); })

    }
    onToggle(node, toggled) {
        const { cursor } = this.state;

        if (cursor) {
            cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        } else {

            if (!node.path.includes(".gitignore") && !node.path.includes(".htaccess")) {
                this.getCode(node.path);
            }
        }

        this.setState({ cursor: node });
    }

    onFilterMouseUp(e) {
        var data = this.props.data;
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({ data });
        }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({ data: filtered });
    }

    render() {
        const { data: stateData } = this.state;

        return (
            <div className="columns column is-12 is-centered">
                <StyleRoot className="column is-one-third">
                    <div style={styles.searchBox}>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-search" />
                            </span>
                            <input className="form-control"
                                onKeyUp={this.onFilterMouseUp.bind(this)}
                                placeholder="Find..."
                                type="text" />
                        </div>
                    </div>
                    <div style={styles.component}>
                        <Treebeard data={stateData}
                            decorators={decorators}
                            onToggle={this.onToggle} />
                    </div>
                </StyleRoot>
                <div id="editor" className="column is-two-thirds">
                    <AceEditor />
                </div>
            </div>

        );
    }
}