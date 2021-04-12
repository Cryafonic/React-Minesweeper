import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

// resetting the game to the point of resetting the difficutly.
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