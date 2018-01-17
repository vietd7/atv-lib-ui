import React from "react";
import ReactDOM from "react-dom";
import Application from "./app";

import {Provider} from 'react-redux';
import store from './store'
ReactDOM.render(
    <Provider store={store}>
    <Application/>
</Provider>, document.querySelector("#application-container"));
