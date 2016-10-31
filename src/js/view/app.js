import React, {Component} from 'react';
import {Link} from 'react-router';
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app-box">
        <h4>首页</h4>
        <ul>
          <li><Link to="/checkbox">checkbox</Link></li>
        </ul>
      </div>
    )
  }
}