import React, { Component } from 'react';

export default class Reset extends Component {
    
    handleReset (){
        window.location.reload();
    }

    render(){
        return (
            <button onClick={this.handleReset}>Reset</button>
        );
    }
}