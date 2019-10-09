import React from 'react';
import './App.scss';
import Home from "../Home/Home";
import CertificateMain from "../CertificateMain/CertificateMain";
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import CertificatePortfolioLab from "../CertificatePortfolioLab/CertificatePortfolioLabb";
import Supplement from "../Supplement/Supplement";

function App() {
  return (


<div className={"app"}>

        <HashRouter>

            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/main"} component={CertificateMain}/>
                <Route path={"/portfolio"} component={CertificatePortfolioLab}/>
                <Route path={"/supplement"} component={Supplement}/>

            </Switch>

        </HashRouter>

</div>

  );
}

export default App;
