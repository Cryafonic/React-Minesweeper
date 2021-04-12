import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Reset extends Component {
    
    handleReset (){
        window.location.reload();
    }

    render(){
        return (
            <Button variant="primary" onClick={this.handleReset}>Reset</Button>
        );
    }
}