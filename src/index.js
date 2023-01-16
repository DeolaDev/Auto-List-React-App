import React from "react";
import ReactDOM from "react-dom/client";
//import ReactDOM from "react-dom"; // added
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
//import awsmobile from "./aws-exports";

import awsExports from "./aws-exports";

// STARTS HERE
//import * as AWS from "aws-sdk";
//import { ConfigurationOptions } from "aws-sdk";



Amplify.configure(awsExports);
//Amplify.configure(awsmobile);
// AWS.config.update(configuration);
// ENDS HERE

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
document.getElementById("root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
