import React, {Component} from 'react';
import Redact from "./Redact";

class MenuPoints extends Component{
    constructor(props){
        super(props);
        this.state ={isrend: 1};
        this.close = this.close.bind(this);
        this.Clik = this.Clik.bind(this);
    }
    close (){
        this.state.isrend = 1;
        this.props.updateData(this.state.isrend);
    }
    Clik(){
        this.props.updateData(this.state.isrend);
        this.state.isrend = (<div><Redact id="q3" tag={this.props.children} close = {this.close}/></div>);
        this.props.updateData(this.state.isrend);
    }
    render(){
        return(
            <div>
                <li className="leftpropeties" id={this.props.id} onClick={this.Clik}>{this.props.text}</li>
            </div>
        ) ;
    }
}
export default MenuPoints;