import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './view/app.js';
import CheckboxPage from './view/CheckboxPage.js';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/checkbox" component={CheckboxPage}/>
  </Router>, 
  document.getElementById('box')
);