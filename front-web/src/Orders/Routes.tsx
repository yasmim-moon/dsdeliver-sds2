import { BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react';
import Orders from ".";
import Home from "../Home";
import Navbar from "../Navbar";

function Routes(){
    return(
        <BrowserRouter>
          <Navbar />
          <Switch>
              <Route path="/orders">
                  <Orders />
              </Route>
              <Route path="/">
                  <Home />
              </Route>

          </Switch>
        </BrowserRouter>
    )

}

export default Routes;
