import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PREFIX} from './../config';
import './css/index.less';

class Checkbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabled: this.props.disabled,
      checked: this.props.checked
    }
    this.checkbox;
  }
  change(event){
    this.setState({'checked': event.target.checked});
    this.props.change && this.props.change(event, this);
  }
  componentWillReceiveProps(){
    console.log('okok');
  }
  componentDidMount(){
    //ReactDOM.findDOMNode(this) 返回<label>...</label>
    this.checkbox.checked = this.props.checked;
    this.props.init && this.props.init(this);
  }
  filterProps(...arr){
    let obj = {};
    for(let v of arr) obj[v] = this.props[v];
    return obj;
  }
  render(){
    let {style, value, title} = this.props;
    let {disabled, checked} = this.state;
    let labelClass = [
      PREFIX + '-checkboxui' ,
      disabled ? 'disabled' : '',
      checked ? 'active' : '' 
    ].join(' ');
    return(
      <label className={labelClass} style = {style}>
        <i></i>
        <input type = "checkbox" 
          value = {value}
          disabled = {disabled}
          ref = {child => this.checkbox = child}
          onChange = {this.change.bind(this)}
          {...this.filterProps('name', 'data-value')}
        />
        {title}
      </label>
    )
  }
}
export default Checkbox;