import React from 'react';
import Board from './component/Board';
import Reset from './component/Reset'
import Rules from './component/Rules';


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
          <form onSubmit={this.handleSubmit} >
            <lable>Set game mines : </lable>
            <select onChange={this.handleValueChange} >
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            <input type="submit" value="OK" />
          </form>
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
