import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { listSalvageAutos } from "./graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
import * as subscriptions from "./graphql/subscriptions";
import { Paper, IconButton } from "@material-ui/core";

function App() {
  const [salvageAutos, setSalvageAutos] = useState([]);

  useEffect(() => {
    fetchSalvageAutos();
  }, []);

  const fetchSalvageAutos = async () => {
    try {
      const salvageAutoData = await API.graphql(
        graphqlOperation(listSalvageAutos)
      );
      const salvageAutoList = salvageAutoData.data.listSalvageAutos.items;
      console.log("Current Salvage Vehicle List", salvageAutoList);
      setSalvageAutos(salvageAutoList);
    } catch (error) {
      console.log("error on fetching vehicless", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="vehicleList">
        {salvageAutos.map((SalvageAuto, idx) => {
          return (
            <div className="SalvageAutoEntry" key={`SalvageAuto${idx}`}>
              <div className="carMake">{SalvageAuto.make}</div>
              <div className="carYear">{SalvageAuto.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

/** function App() {
  

  const hello = "hi";
  const allsalvageAutos1 = "hello5";
  const fetchSalvageAutos = async () => {
    const allsalvageAutos = await API.graphql({
     query: queries.listSalvageAutos,
   });

  console.log(allsalvageAutos);

  return (
    <div className="App">
      <p>{hello}</p>
    </div>
  );

  /**return (
      <div className="App">
        // <table>{fetchSalvageAutos}</table>
      </div>
    ); 
}
} **/

/*function App() {
  const [salvageAutos, setSalvageAutos] = useState([]);

  const fetchSalvageAutos = async () => {
   
    try {
      const allsalvageAutos = await API.graphql({ query: queries.listSalvageAutos });
      
      //console.log(allsalvageAutos);
    } catch (error) {
      console.log("error on fetching songs", error);
    }

    return (
      {fetchSalvageAutos}
      );
  };
}*/
