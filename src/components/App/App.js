import React, {Fragment} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaterialAppBar from "../MaterialAppBar/MaterialAppBar";
import NoMatch from "../NoMatch/NoMatch";
import Home from "../Home/Home";
import NavigationMap from "../NavigationMap/NavigationMap";

function App() {
    return (
        <Fragment>
            <CssBaseline/>
            <div className="App">
                <MaterialAppBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/map" component={NavigationMap}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Fragment>
    );
}

export default App;
