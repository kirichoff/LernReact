 import React, {Component} from 'react';
import InputType from './InputType'
import RedactText from './RedactText'
import {store} from '../Store'
 import {changeTemp} from "../actions";
class RedactHeader extends Component {
    constructor(props) {
        super(props);
        this.Submite = this.Submite.bind(this)
    }

    Submite = (style, value, id)=>
        {
            console.log('submite  ',style,value,id)
            console.log(style,value,id);
            this.props.onsubmit(style, value, id);
        }
    render() {
        return (
            <div>
                {/* TX1-5*/}
                <div>Rename Intro</div>
                <RedactText isUpdate ={true} onsubmit={this.Submite} idel={'TX1'} />
                <RedactText isUpdate ={true}  onsubmit={this.Submite} idel={'TX2'} />
                <RedactText isUpdate ={true} onsubmit={this.Submite} idel={'TX3'} />
                <RedactText isUpdate ={true} onsubmit={this.Submite} idel={'TX5'} />
                <div>chacng Title</div>
                <InputType up={this.Submite} idel={'title'} />
                <div>change Icon</div>
                {/*...code heare*/}
                <div></div>
                <div>change Fotter</div>
                <RedactText onsubmit={this.Submite} idel={'footer'} />
                <div>change baground</div>
                <div>Menu text</div>
                <RedactText onsubmit={this.Submite} idel={'inta'} />
            </div>
        );
    }
}



export default RedactHeader;