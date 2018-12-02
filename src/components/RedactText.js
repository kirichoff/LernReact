import React, {Component} from 'react';
import InputType from './InputType'

class RedactText extends Component {
    constructor(props) {
        super(props);
        this.state = {colors: [{backgroundColor: 'red'}, {backgroundColor: 'black'},{backgroundColor:'orange'},{backgroundColor:'green'}]}
    }

        chang(){
        console.log('eqe')
        }
    paint(item,i){
        var sil = {display: 'inline-block', width: 25, height: 25,borderRadius: 50,margin: 10};
        let buf=sil;
           buf.backgroundColor = item.backgroundColor;
           return <div key = {i} onClick={()=>{} }style={buf}></div>;
       }



    render() {

        return (

            <div>
                <InputType  idel = {this.props.idel}>Helllow</InputType>
                <div>color</div>

                {this.state.colors.map(this.paint)}

                {this.state.colors.map( item =>{
                    var sil = {display: 'inline-block', width: 25, height: 25,borderRadius: 50,margin: 10};
                    let buf=sil;
                    buf.backgroundColor = item.backgroundColor;
                    return <div onClick={this.chang} style={buf}></div>;}
                )}
            </div>
        );
    }
}

export default RedactText;