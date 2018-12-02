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


class AdminMenu extends Component {
    constructor(props){
        super(props);
       this.state = {isrend: 1};
        this.updateData = this.updateData.bind(this);
    }
    updateData = (value) => {
        this.setState({ isrend: value });
    }
    render() {
        if (this.state.isread == null) {
            var style = {position:"absolute" , margin:200, width: 150, height: 150, backgroundColor: 'powderblue'};
            return (
                <div>
                    <div style={style}>yesss </div>
                    <MenuView>
                        { this.state.isrend == 1 ?(
                            <div id = "contentIN">
                            <li className="leftpropeties" id="view">View Site</li>
                            <li className="leftpropeties">Stats</li>
                            <li className="leftpropeties" id="cust">Customize</li>
                            <li className="leftpropeties">Plugins</li>
                            <li className="leftpropeties">Pages</li>
                            <MenuPoints tag={<InputType  colort={'green'} id = {'a2'} idel = {"inta"}/>} updateData={this.updateData}> View Site</MenuPoints>
                                <MenuPoints  tag={<InputType  colort={'green'} id = {'a2'} idel = {"inta"}/>} updateData={this.updateData}> View Site</MenuPoints>
                            <RedactText idel={'inta'} />
                            </div>
                            )
                            :  (this.state.isrend)
                    }
                    </MenuView>
                    <InputType id="a123" idel="ver"/>
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