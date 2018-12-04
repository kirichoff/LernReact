import React, { Component } from 'react'
import '../adminpanel.css'
import './mountain.jpg'
import MenuPoints from './MenuPoints'
import Redact from './Redact'
import InputType from './InputType'
import MenuView from "./MenuView"
import  {connect} from 'react-redux'
import RedactHeader from './RedactHeader'
import RedactText from './RedactText'
import SizeChange from './SizeChange'
import {addImg} from '../actions/index'
import {deleteImg} from "../actions/index"
import {changeTemp} from '../actions/index'
import {store} from '../Store'

class AdminMenu extends Component {
    constructor(props){
        super(props);
        var ds = {display:'block'}
        var st1 = {position:"absolute",zIndex: 10000,marginLeft: '123px'}
       this.state = {isrend: 1,st: ds,styl: st1 };
        this.updateData = this.updateData.bind(this);
        this.AddIM=  this.AddIM.bind(this);
        this.delIm=  this.delIm.bind(this);
        this.show = this.show.bind(this)
        this.TempUp =this.TempUp.bind(this)
    }
    updateData = (value) => {
        this.setState({ isrend: value });
    }
    AddIM = () =>{
        var obj = {img_src:'./img/icon.png', main_text: 'Mobile devices', button_text: 'Graphics / Ads'}
        this.props.dispatch(addImg(obj.img_src,obj.main_text,obj.button_text))
    }
    delIm= () =>{
        this.props.dispatch(deleteImg(0));
    }
    show = ()=>{
        if(this.state.st.display == 'block'){
            this.setState({ st: {display:'none'} });
            this.state.st ={display:'none'}
        }
        else
        { this.setState({ st: {display:'block'} });
            this.state.st ={display:'block'}
        }
    }

        TempUp = (styl,value,id) =>{
                console.log("TempUp  "+styl,value,id)
            this.props.dispatch(changeTemp(styl,value,id,3))
        }

    render() {
        if (this.state.isread == null) {
            var style = {position:"absolute" , margin:200, width: 150, height: 150, backgroundColor: 'powderblue'};
                var st1 = {position:"absolute",zIndex: 10000,margin: '200px',}
            return (
                <div>
                    <div style={this.state.styl} onClick={this.show}>Admin</div>
                    <MenuView style={this.state.st} >
                        { this.state.isrend == 1 ?(
                            <div id = "contentIN">
                                <MenuPoints updateData={this.updateData} text = {'Some'} > <RedactHeader onsubmit={this.TempUp} /> </MenuPoints>
                                <MenuPoints updateData={this.updateData} text = {'IMG'}>
                                    <div onClick={this.AddIM}>
                                        ADD
                                    </div>
                                    <div onClick={this.delIm}>
                                        Del
                                    </div>
                                </MenuPoints>
                                <RedactText onsubmit={this.TempUp}  idel = {'inta'}></RedactText>
                            </div>
                            )
                            :  (this.state.isrend)
                    }
                    </MenuView>

                    </div>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}


AdminMenu.propTypes = {}
export default connect(mapStateToProps) (AdminMenu);