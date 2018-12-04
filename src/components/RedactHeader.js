 import React, {Component} from 'react';
import InputType from './InputType'
import RedactText from './RedactText'
import {store} from '../Store'
 import {changeTemp} from "../actions";
class RedactHeader extends Component {
        Submite = (style, value, id)=>
        {
            console.log(style,value,id);
            this.props.TempUp(style, value, id);
        }
    render() {
        return (
            <div>
                {/* TX1-5*/}
                <div>Rename Intro</div>
                <RedactText onsubmit={this.Submite} idel={'TX1'} />
                <RedactText onsubmit={this.Submite} idel={'TX2'} />
                <RedactText onsubmit={this.Submite} idel={'TX3'} />
                <RedactText onsubmit={this.Submite} idel={'TX5'} />
                <div>Rename second</div>
                <InputType idel={'qwr3'} ></InputType>
                <div>chacng Title</div>
                <InputType idel={'title'} />
                <div>change Icon</div>
                {/*...*/}
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