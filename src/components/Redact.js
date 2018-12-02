import React, {Component} from 'react';
import InputType from './InputType'
class Redact extends Component {
    render(){
        return(
            <div>
                {this.props.tag}
                <div onClick={this.props.close}>close</div>
            </div>
        );
    }

}

export default Redact;