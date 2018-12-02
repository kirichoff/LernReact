import React, {Component} from 'react';
import InputType from './InputType'
class RedactHeader extends Component {
    render() {
        return (
            <div>
                <div>Rename Intro</div>
                <InputType idel={'qwr3'} ></InputType>
                <InputType idel={'qwr3'} ></InputType>
                <InputType idel={'qwr3'} ></InputType>
                <InputType idel={'qwr3'} ></InputType>
                <div>Rename second</div>
                <InputType idel={'qwr3'} ></InputType>
                <div>chacng Title</div>
                <InputType idel={'qwr3'} ></InputType>
                <div>change Icon</div>
                {/*...*/}
                <div></div>
                <div>change Fotter</div>
                <InputType idel={'qwr3'} ></InputType>
                <div>change baground</div>
                
            </div>
        );
    }
}



export default RedactHeader;