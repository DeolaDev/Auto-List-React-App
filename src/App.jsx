import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { listSalvageAutos } from "./graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";



function App() {

  const [salvageAutos, setSalvageAutos] = useState([]);

    const fetchSalvageAutos = async () => {
      try {
        const salvageAutoData = await API.graphql(
          graphqlOperation(listSalvageAutos)
        );
        const salvageAutoList = salvageAutoData.data.listSalvageAutos.items;
        console.log("song list", salvageAutoList);
        setSalvageAutos(salvageAutoList);
      } catch (error) {
        console.log("error on fetching songs", error);
      }
    };

  
  /* return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
   
    </div> 
  );*/
  
}

export default App;




/** function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} export default App; **/
