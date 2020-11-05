import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";


import { ThemeProvider } from "styled-components"
import theme from './style/theme/index'

ReactDOM.render(
    <ThemeProvider theme = {theme}>
<App />
</ThemeProvider>, 
document.getElementById("root")
);
