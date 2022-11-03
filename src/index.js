import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GLobalStyle } from "./styles/global.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <GLobalStyle />
        <App />
    </>
);
