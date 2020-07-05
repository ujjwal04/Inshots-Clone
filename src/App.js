import React from 'react';
import Feed from "./components/Feed";
import Admin from "./components/Admin";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Route} from "react-router-dom";

function App() {

  return (
    <HashRouter>
      <Route path='/' exact component = {Feed}/>
      <Route path='/admin' component = {Admin}/>
    </HashRouter>
  );
}

export default App;
