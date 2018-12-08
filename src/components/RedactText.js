import React, {Component} from 'react';
import InputType from './InputType'
import { SketchPicker } from 'react-color';
import SizeChange from "./SizeChange";
import ColorPiker from './ColorPiker'
import {changeTemp} from '../actions/index'


class RedactText extends Component {
    constructor(props) {
        super(props);
        this.state = {backgroundColor: '3133',el:0}
        this.ret = this.ret.bind(this)
        this.updat =this.updat.bind(this)
    }

    handleChangeComplete = (color) => {
        this.setState({background: color.hex});
        this.state.backgroundColor = color.hex
    }

    ret = (val)=> {
        this.state.el.style.fontSize =val;
    }

    updat = (style, value, id)=> {
        console.log(this.state.backgroundColor)
        console.log(changeTemp(style, value, id))
        console.log(this.state.el);

        this.setState({el: changeTemp(style, value, id) });
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
                    <div>
                        <ColorPiker  onChangeComplete={this.handleChangeComplete}/>
                    </div>
                    <div>text size</div>

                    <SizeChange ret={this.ret} idel={this.props.idel}/>
                    { this.props.isUpdate === true ?(<form>
                        <button onClick={this.updat}>Подтвердить</button>
                    </form>) : (
                        <button onClick={this.updat}>Подтвердить</button>
                    ) }
                </div>
            </div>
        );
    }
}


export default RedactText;