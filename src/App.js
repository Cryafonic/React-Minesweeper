import React from 'react';
import Board from './component/Board';
import Reset from './component/Reset'
import Rules from './component/Rules';
import Button from 'react-bootstrap/Button';
import './component/General.css'


// set dimentions to be passed through to the board components.
class App extends React.Component {
  state = {
    height: 8,
    width: 8,
    mines: 10,
    loadChoice: false
  };

  // set's the loadChoice to true so that the next component can be render.
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loadChoice: true,
    });
  }

  // sets this.state.mines to determin on what difficutly the Board component should render with.
  handleValueChange = (e) => {
      if (e.target.value === "medium" ) {
          this.setState({
              mines: 15
          });
      }else if (e.target.value === "hard") {
          this.setState({
              mines: 20
          });
      }else {
        this.setState({
          mines: 10
        });
      }
  }

  // check's the this.state.loadChoice to determin which componenet to load.
  render() {
    if (this.state.loadChoice === false) {
      return (
        <div >
          <form className="setForm" onSubmit={this.handleSubmit}  inline>
              <lable className="lableText" >Set game difficutly: </lable>
              <select className="dropdown" onChange={this.handleValueChange} >
                  <option className='option' value='easy'>Easy</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
              </select>
              <Button variant="primary m-1" type="submit" >OK</Button>
          </form>
          <h2 className="h2Align indieFlowerFont" >Minesweeper</h2>
          <img className="image" src="https://cdn-0.emojis.wiki/emoji-pics/facebook/bomb-facebook.png" alt="Minesweeper mine"/>
        </div>
      );}else if (this.state.loadChoice === true) {
          return(
              <div className="game">
                  <Reset />
                  <Rules />
                  <Board height={this.state.height} width={this.state.width} mines={this.state.mines} />
              </div>
          );
      }

  }
}

export default App;
