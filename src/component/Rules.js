import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalTitle from 'react-bootstrap/ModalTitle';




function Rules() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    // adding button on the minesweeper game that acts like modal.
    return (
      <>
        <Button variant="primary" className="m-1" onClick={handleShow}>
          Rules
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <ModalHeader>
            <ModalTitle>How to play Minesweeper</ModalTitle>
          </ModalHeader>
          <br/>
          <ModalBody>
              <p>1) The goal of the game is to NOT click any bombs.</p>
              <p>2) Each number tells you how many bombs are adjacent to the "clicked" cell.</p>
              <p>3) The numbers reange from 0 to 8. Each cell has 8 neigbors. Count them.</p>
              <p>4) Use process of elimination to choose where to click next.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
 
  export default Rules;
  