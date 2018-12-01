import React, {Component} from 'react';



class MenuView extends Component{
    render(){
        return(
            <div id="leftmenu">
                <div><img id="avatar" src="mountain.jpg"/></div>
                <div id="websiteName">Your website</div>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}


export default MenuView;