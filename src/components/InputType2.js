import React, {Component} from 'react';
import '../PanelStyle.css'


class InputType2 extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.Replace = this.Replace.bind(this);
        this.Rep = this.Rep.bind(this);
    }
    Replace(event){
        this.setState({value: event.target.value});
        this.state.value =  event.target.value
        var el = document.getElementById(this.props.idel);


        console.log(this.state.value)
        console.log(event.target.value)
        console.log(el.innerText)


        el.innerText = this.state.value;
        let style = {color:this.props.colort}
        el.style.color = this.props.colort;
        this.props.up(style,this.state.value,this.props.idel);
    }

    Rep(){
        var el = document.getElementById(this.props.idel);
        el.innerHTML = this.state.value;
        let style = {color:this.props.colort/*,fontSize: this.props.txtSize*/}
        el.style.color = this.props.colort;
        el.style.fontSize = this.props.txtSize
        this.props.up(style,this.state.value,this.props.idel);
    }

    render(){
        return(
            <div>

                <div>{this.props.children}</div>
                <input className={'InputType'}
                       value={this.state.value}
                       id={this.props.id}
                       onChange={this.Replace}
                       type="text"
                    // onInput={this.Replace}
                />
            </div>
        ) ;
    }
}

export default InputType2;