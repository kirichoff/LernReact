 import React, {Component} from 'react';
import InputType from './InputType'
import RedactText from './RedactText'
import {store} from '../Store'
class RedactHeader extends Component {
    render() {
        return (
            <div>
                {/* TX1-5*/}
                <div>Rename Intro</div>
                <RedactText  idel={'TX1'} />
                <RedactText idel={'TX2'} />
                <RedactText idel={'TX3'} />
                <RedactText idel={'TX5'} />
                <div>Rename second</div>
                <InputType idel={'qwr3'} ></InputType>
                <div>chacng Title</div>
                <InputType idel={'title'} />
                <div>change Icon</div>
                {/*...*/}
                <div></div>
                <div>change Fotter</div>
                <RedactText idel={'footer'} />
                <div>change baground</div>
                <div>Menu text</div>
                <RedactText idel={'inta'} />
            </div>
        );
    }
}



export default RedactHeader;