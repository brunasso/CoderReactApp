import React, {Component} from 'react'
import Button from '../Button/Button'

class ButtonCL extends Component{
    render(){
        return(
            <Button text={this.props.name}/>
        )
    }
}

export default ButtonCL;