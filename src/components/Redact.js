import React, {Component} from 'react';
import InputType from './InputType'
class Redact extends Component {
    render(){
        return(
            <div>
                <div className={'Close'} onClick={this.props.close}>close</div>
                {this.props.tag}
            </div>
        );
    }

}

export default Redact;