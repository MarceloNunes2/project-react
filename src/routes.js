import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Users  from "./pages/Users"

function Rota(){
    return(
        <Router>
            <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/usuarios" component={Users} />
            </Switch>
        </Router>
    )
}

export default Rota