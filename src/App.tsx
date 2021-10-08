import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./component/Header";
import {HomePage} from "./page/Home";
import {LoginPage} from "./page/Login";
import {RegisterPage} from "./page/Register";

const App = ()=>{

  return <div className="App">
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route path = "/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
    </BrowserRouter>
  </div>
}

export default App;
