import React, { useEffect } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm";

import { fetchSmurfs } from '../actions'
import { Divider } from "@material-ui/core";

const App = (props) => {

    useEffect(() => {
      fetchSmurfs();
    });

    return (
      <div className="App">
        <SmurfsForm />
        <Divider />
        <SmurfsList />
      </div>
    );
}

export default App;
