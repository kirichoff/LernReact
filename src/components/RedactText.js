import React, {Component} from 'react';
import InputType from './InputType'
import { SketchPicker } from 'react-color';
import SizeChange from "./SizeChange";
import ColorPiker from './ColorPiker'
import {changeTemp} from '../actions/index'


class RedactText extends Component {
    constructor(props) {
        super(props);
        this.state = {backgroundColor: '3133'}
    }

    handleChangeComplete = (color) => {
        this.setState({background: color.hex});
        this.state.backgroundColor = color.hex
    }

    ret(val) {
        this.state.el.style.fontSize = val;
        this.setState({el: this.state.el})
    }

    updat(style, value, id) {
        this.setState({el: changeTemp(style, value, id)});
        this.state.el = changeTemp(style, value, id);
        this.props.onsubmit(this.state.el.style, this.state.el.value, this.state.el.id);
    }

    render() {
        return (
            <div>
                <div>
                    <InputType colort={this.state.backgroundColor} up={this.updat}
                               idel={this.props.idel}>Helllow</InputType>
                    <div>color</div>
                    {/*   {this.state.colors.map( item =>{
                    var sil = {display: 'inline-block', width: 25, height: 25,borderRadius: 50,margin: 10};
                    let buf=sil;
                    buf.backgroundColor = item.backgroundColor;
                    return <div onClick={this.chang} style={buf}></div>;}
                )}*/}
                    <div>
                        {/*<SketchPicker
                    color={ this.state.background }
                    onChangeComplete={ this.handleChangeComplete }
                />*/}
                        <ColorPiker onChangeComplete={this.handleChangeComplete}/>
                    </div>
                    <div>text size</div>

                    <SizeChange ret={this.ret} idel={this.props.idel}/>
                    <button onClick={this.updat}>Подтвердить</button>
                </div>
            </div>
        );
    }
}


export default RedactText;