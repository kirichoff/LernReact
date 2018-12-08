import React, {Component} from 'react';
import {connect} from 'react-redux'

class CommponentsRend extends Component {


    obj = ()=>{
    this.props.ls.htmlid.map(buf=>{
        var el = document.getElementById(buf.id);
            el.style.color = buf.style.color
            el.style.fontSize = buf.style.fontSize
            el.innerHTML = buf.value
            }
        )
    }

    render() {

        this.obj()
        return (
            <div>
            </div>
        );
    }
}


function  MapStateToProps  (state){
    return( {
        ls: state
    })
}


export default connect(MapStateToProps)(CommponentsRend);