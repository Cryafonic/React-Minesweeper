import React from 'react';
import PropTypes from 'prop-types';
import './Cell.scss';

// Cells being generated to be to be displayed on the board. 
class Cell extends React.Component {
    getValue() {
      const {value} = this.props;
      
      if (!value.isRevealed) {
        return this.props.value.isFlagged ? "🚩" : null;
      }
      if (value.isMine) {
        return "💣";
      }
      if (value.neighbour === 0) {
        return null;
      }
      return value.neighbour;
    }
  
    render() {
      const {value, onClick, cMenu} = this.props;
      let className =
        "cell" +
        (value.isRevealed ? "" : " hidden") +
        (value.isMine ? " is-mine" : "") +
        (value.isFlagged ? " is-flag" : "");
  
      return (
        <div
          onClick={onClick}
          className={className}
          onContextMenu={cMenu}
        >
          {this.getValue()}
        </div>
      );
    }
  }
  
// Type checking to catch the bugs and errors that may appear. Not used when the app is build.
  Cell.propTypes = {
    value: PropTypes.func
  }

  export default Cell;