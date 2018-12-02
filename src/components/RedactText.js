import React, {Component} from 'react';
import InputType from './InputType'
import { SketchPicker } from 'react-color';
import  {connect} from 'react-redux'
import SizeChange from "./SizeChange";
import ColorPiker from './ColorPiker'

class RedactText extends Component {
    constructor(props) {
        super(props);
        this.state = {colors: [{backgroundColor: 'red'}, {backgroundColor: 'black'},{backgroundColor:'orange'},{backgroundColor:'green'}],backgroundColor: '3133'}
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
       this.state.backgroundColor = color.hex
        console.log(color)
    };

    render() {

        return (
            <div>
                <InputType colort = {this.state.backgroundColor} idel = {this.props.idel}>Helllow</InputType>
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

                <SizeChange idel ={this.props.idel}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todos: state
    }
}

export default RedactText;