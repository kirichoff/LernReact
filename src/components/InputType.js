import React, {Component} from 'react';



class InputType extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.Replace = this.Replace.bind(this);
        this.Rep = this.Rep.bind(this);
    }
    Replace(event){
        this.setState({value: event.target.value});
    }

    Rep(){
        var el = document.getElementById(this.props.idel);
        el.innerHTML = this.state.value;

         let style = {color:this.props.colort,fontSize: this.props.txtSize}
        el.style.color = this.props.colort;
        el.style.fontSize = this.props.txtSize

        this.props.up(style,this.state.value,this.props.idel);
    }

    render(){
        return(
            <div>
                <form>
                    <div>{this.props.children}</div>
                <input className={InputType} id={this.props.id} value={this.state.value} onChange={this.Replace} type="text"/>
                    <button onClick={this.Rep} ></button>
                </form>
            </div>
        ) ;
    }
}

export default InputType;