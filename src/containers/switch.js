import React from 'react';
import Iframe from './iframe';
import Text from './text';
import AceEditor from './aceeditor';

export default function Switch(props) {
    console.log(props.navigation);
    switch (props.section) {
        case "home" || "contact":
            return (<Text />);
        case "code":
            return (<div id="editor" style={{ margin: "auto", width: "90vw", height: "100vh" }}>
                <AceEditor />
            </div>)
        case "rankerjs":
            return (<Iframe navigation={props.navigation} url="https://rankerjs.herokuapp.com/" />)
        case "merchantjs":
            return (<Iframe url="#" />)
        case "starbook":
            return (<Iframe url="https://radovandelic.github.io/starbook/" />)
        case "battleship":
            return (<Iframe url="https://battleships.gq/" />)
        case "cleancalc":
            return (<Iframe url="https://radovandelic.github.io/cleancalc/" />)
        default:
            return (<div></div>);
    }
}