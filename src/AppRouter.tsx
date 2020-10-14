import React, { useState, MouseEvent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/bootstrap.min.css';
import './assets/css/stylish-portfolio.css';
import App from "./App";
import TwitterApp from './TwitterApp';

function AppRouter() {
        return (
         <Router>
          
             <Route path="/" exact component={App} />
             <Route path="/endsars" exact component={TwitterApp} />
             <Route path="/endsars/success" exact>
               <div className="container">
                <div className="alert alert-success center"> Successfully activated your #EndSars bot </div>
               </div>
              
            </Route>
            <Route path="/endsars/failure" exact>
               <div className="container">
                <div className="alert alert-danger center"> There was a problem activating your #Endsars bot </div>
               </div>
              
            </Route>
         </Router>
       );
     }
  
  export default AppRouter;
  