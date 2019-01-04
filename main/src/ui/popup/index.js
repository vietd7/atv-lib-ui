import React from 'react'

const DEFAULT_INSTANCE = "__default__"
let instances = {};
let popupIdSeed = 0;

class PopupManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popups: []
        }
        var name = props.name || DEFAULT_INSTANCE;
        if (instances[name]) {
            throw "Cannot create popup manager instance with existing name ''" + name + "''";
        }
        instances[name] = this;
    }

    static open(popup, popupManagerName = DEFAULT_INSTANCE) {
        popupManagerName = popupManagerName || DEFAULT_INSTANCE;
        var popupManager = instances[popupManagerName];

        if (!popupManager) {
            throw "Cannot open popup on non-existing manager named '" + popupManagerName + "'";
        }

        var popups = [...popupManager.state.popups];
        popups.push(popup);

        popupManager.setState({popups})
    }

    render() {
        return (<div>{this.state.popups.map((popupConfig) => popupConfig.component)}</div>)
    }
}

export default PopupManager;
