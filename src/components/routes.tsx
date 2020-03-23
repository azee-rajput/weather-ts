import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import Search from "./pages/search";


function Routes(){
    return(
        <Switch>
            <Route exact path={"/"} component={Landing}/>
            <Route path={"/search/:lat/:long"} component={Search}/>
        </Switch>
    );
}

export default Routes;