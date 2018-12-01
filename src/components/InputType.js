import React, {Component} from 'react';

class InputType extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.Replace = this.Replace.bind(this);
    }
    Replace(event){
        this.setState({value: event.target.value});
        var el = document.getElementById(this.props.idel);
        el.innerHTML = this.state.value;
    }
    render(){
        return(
            <div>
                <input className={InputType} id={this.props.id} value={this.state.value} onChange={this.Replace} type="text"/>
            </div>
        ) ;
    }
}

export default InputType;