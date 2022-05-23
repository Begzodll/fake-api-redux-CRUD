import React,{lazy} from 'react';
import {Provider} from "react-redux";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import './assets/main.scss';

const App = lazy(()=>import("./App"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)