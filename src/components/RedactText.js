import React, {Component} from 'react'
import InputType from './InputType'
import { SketchPicker } from 'react-color';
import SizeChange from "./SizeChange"
import ColorPiker from './ColorPiker'
import {changeTemp} from '../actions/index'
import InputType2 from './InputType2'


class RedactText extends Component {
    constructor(props) {
        super(props);
        this.state = {backgroundColor: '3133',el:{style:{fontSize:12
        }
        }
        }
        this.ret = this.ret.bind(this)
        this.updat =this.updat.bind(this)
    }

    handleChangeComplete = (color) => {
        this.setState({backgroundColor: color.hex});
        this.state.backgroundColor = color.hex
        this.props.onsubmit(this.state.el.style, this.state.el.value, this.state.el.id);
    }

    ret = (val)=> {
        this.state.el.style.fontSize =val;
    }

    updat = (style, value = document.getElementById(this.props.idel).innerText, id = this.props.idel)=> {
        this.setState({el: changeTemp(style, value, id) });
        this.state.el = changeTemp(style, value, id);
        this.props.onsubmit(this.state.el.style, this.state.el.value, this.state.el.id);
    }

    render() {
        return (
            <div className={"RedactText"}>
                <div>
                    <InputType colort={this.state.backgroundColor} up={this.updat}
                               idel={this.props.idel}>{document.getElementById(this.props.idel).innerText}</InputType>
                    <div>color</div>
                    <div>
                        <ColorPiker updat ={this.updat} onChangeComplete={this.handleChangeComplete}/>
                    </div>
                    <div>text size</div>
                    <SizeChange ret={this.ret} idel={this.props.idel}/>

                    <InputType2 up={this.updat}
                               idel={this.props.idel}>
                        Margin left</InputType2>
                    <InputType2 up={this.updat}
                               idel={this.props.idel} >Margin right</InputType2>
                    <InputType2 up={this.updat}
                               idel={this.props.idel}
                    >Margin top</InputType2>
                    <InputType2
                        up={this.updat}
                        idel={this.props.idel}
                    >Margin bottom</InputType2>

                </div>
            </div>
        );
    }
}


export default RedactText;