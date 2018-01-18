import React from 'react';
import { StyleRoot } from 'radium';
import { Treebeard, decorators } from 'react-treebeard';

import styles from '../treeview_styles';
import * as filters from '../filter';
import AceEditor from './aceeditor';

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

    onToggle(node, toggled) {
        var ace = window.ace;
        const editor = ace.edit("editor");
        const { cursor } = this.state;

        if (cursor) {
            cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        } else {
            fetch(node.path)
                .then(res => { return res.text(); })
                .then(res => { editor.setValue(res); editor.gotoLine(1); })
                .catch(err => { console.log(err); })
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
                                placeholder="Search project..."
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