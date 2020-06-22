import React, { Component } from 'react';


class Interest extends Component {
    render() {
        return(
        <li style = {{fontSize : "20px"}} >{this.props.interest}</li>
        )
    }
}

export default Interest;