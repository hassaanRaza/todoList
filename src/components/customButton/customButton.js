import React, {Component} from 'react';

class CustomButton extends Component{
    render(){
        return(
            <button>{this.props.text}</button>
        )
    }
}

export default CustomButton;