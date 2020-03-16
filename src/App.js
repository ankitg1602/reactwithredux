import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login/Login';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Dashboard from './containers/dashboard/Dashboard';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
export class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route exact from="/" to="/login" /> */}
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </BrowserRouter>
      
    );

  }
  
}

export default App;
