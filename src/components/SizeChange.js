import React, {Component} from 'react';

class InputType extends Component{
    constructor(props){
        super(props);
        this.state = {value: '',el: 0};
        this.Replace = this.Replace.bind(this);
        this.Rep = this.Rep.bind(this);
        this.valider = this.valider.bind(this)
    }
    Replace(event){
        this.setState({value: event.target.value});
        this.state.value = event.target.value
        console.log('!!!!!!!!!!'+this.state.value)
        var el = document.getElementById(this.props.idel);
        el.style.fontSize  = this.state.value+'px';
        console.log('!!!!!!!!!!'+this.state.value)
        this.props.ret(event.target.value);
    }

    Rep(){
        var el = document.getElementById(this.props.idel);
        el.style.fontSize  = this.state.value+'px';
        console.log('!!!!!!!!!!'+this.state.value)
        this.props.ret(this.state.value);
    }
    valider (evt) {

        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();

        }
    }
    render(){
        return(
            <div>
                <form>
                    <div>{this.props.children}</div>
                    <input className={'InputType'} id={this.props.id} value={this.state.value} onChange={this.Replace} onKeyPress={this.valider} type="text"/>
                </form>
            </div>
        ) ;
    }
}

export default InputType;