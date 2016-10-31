import React, { Component } from 'react';
import {Checkbox, CheckboxGroup} from './../component/checkbox/'

export default class CheckboxPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let mr = {marginRight: '50px'};
    return (
      <div className="checkbox-box">
        <CheckboxGroup max={3} name="bbs">
          <Checkbox title="全选" data-all style={mr} />
          <Checkbox title="中文" change={()=>console.log(11111)} style={mr} />
          <Checkbox title="德文" style={mr} />
          <Checkbox title="法文" style={mr} />
          <Checkbox title="日文" style={mr} />
          <Checkbox title="英文" disabled="disabled" style={mr} />
          <Checkbox title="其它" checked={true} />
        </CheckboxGroup>
      </div>
    )
  }
}