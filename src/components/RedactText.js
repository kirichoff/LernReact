import React, {Component} from 'react';
import InputType from './InputType'
import { SketchPicker } from 'react-color';
import  {connect} from 'react-redux'
import SizeChange from "./SizeChange";
import ColorPiker from './ColorPiker'
import {changeTemp} from '../actions/index'
import  {connect} from 'react-redux'

class RedactText extends Component {
    constructor(props) {
        super(props);
        this.state = {backgroundColor: '3133'}
        this.updateStore = this.updateStore.bind(this)
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
       this.state.backgroundColor = color.hex
                        }
        ret = (val) =>{
            this.state.el.style.fontSize = {val}
            this.setState( {el:el})
        }
        updat(style,value,id)
            {
                this.setState( {el: changeTemp(style,value,id)})
                this.state.el = changeTemp(style,value,id)};
            }
    updateStore (){
        this.props.dispatch(changeTemp(this.state.el.style,this.state.el.value,this.state.el.id));
    }
    render(){
        return (
            <div>
                <div>
                <InputType colort = {this.state.backgroundColor} up={this.updat} idel = {this.props.idel}>Helllow</InputType>
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
                    <ColorPiker onChangeComplete={this.handleChangeComplete} />
                </div>
                <div>text size</div>

                <SizeChange  ret={this.ret} idel ={this.props.idel}/>
                <button onClick={this.updateStore} >Подтвердить</button>
                </div>
            </div>
        );
    }
function mapStateToProps(state) {
    return {
        elements: state
    }
}

export default connect(mapStateToProps)(RedactText);