import React, {Component} from 'react';
import InputType from './InputType'
class Redact extends Component {
    render(){
        return(
            <div>
                <InputType  id = {this.props.id} idel = {this.props.idel} />
                <div onClick={this.props.close}>close</div>
            </div>
        );
    }

}

export default Redact;