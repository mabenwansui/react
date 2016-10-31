import React, {Component} from 'react';
import Checkbox from './Checkbox';

class CheckboxGroup extends Component {
  constructor(props){
    super(props);
    this.checkedLength = 1;
    this.subCheckbox = [];
  }
  subCheckboxInit(that){
    this.subCheckbox.push({
      initialProps: that.props,
      target: that
    });
    if(that.state.checked) this.checkedLength++;
    this.disabledCheckbox(that.checkbox);
  }
  disabledCheckbox(element){
    if(this.checkedLength > this.props.max){
      this.subCheckbox.forEach((v)=>{
        if(v.target.checkbox !== element && !v.target.state.checked) v.target.setState({disabled: true});
      });
    }else{
      this.subCheckbox.forEach((v)=>{
        !v.initialProps.disabled && v.target.setState({disabled: false});
      });
    }
  }
  change(func, event, that){
    let element = event.target;
    element.checked ? this.checkedLength++ : this.checkedLength--;
    this.disabledCheckbox(element);
    func && func.call(that, element);
    if(that.props['data-all']){
      this.subCheckbox.forEach( v => {
        if(v.target.state.disabled) return;
        v.target.setState({checked: element.checked})
      });
    }
  }
  render(){
    let props = this.props;
    return(
      <div className="checkbox-group">
      {
        React.Children.map(props.children, (child, index) => {
          if (child.type === Checkbox){
            let obj = {
              change: this.change.bind(this, child.props.change),
              init: this.subCheckboxInit.bind(this)
            };
            if(!child.props.name) obj.name = this.props.name;
            return React.cloneElement(child, obj);
          }else{
            return child;
          }
        })
      }
      </div>
    )
  }
}
export default CheckboxGroup;