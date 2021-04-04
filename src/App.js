import React from 'react';
import './App.css';
import Board from './component/Board';
import Reset from './component/Reset'

// set dimentions to be passed through to the board components.
class App extends React.Component {
  state = {
    height: 8,
    width: 8,
    mines: 10
  };

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="game">
        <Reset />
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}

export default App;
