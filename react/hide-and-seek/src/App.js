import React, { Component } from 'react';
import gameboardImage from './imgs/boardstates/board.png'; //image path placeholder
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
    <Container className="App">
    <Navbar light expand="md" className="App-header"><NavbarBrand>Hide-and-Seek</NavbarBrand></Navbar> 
    <Row>
      <Col xs="6" sm="4" className="Scoreboard"><h2>Scoreboard:</h2></Col>
      <Col className="Game-board">
        <div>
          { <img src={gameboardImage} className="Game-image img-fluid" alt="gameboard" /> }
        </div>
      </Col>
    </Row>
    <Row>
      <Col className="Chat-box"><h2>Game Chat:</h2></Col>
      <Col xs="6" sm="4" className="Controls">
        {/* <input type="image" src="./imgs/arrows/leftArrow.png" alt=""/>
        <button><img src="./imgs/arrows/upArrow.png" alt=""/></button>
        <button><img src="./imgs/arrows/downArrow.png" alt=""/></button>
        <button><img src="./imgs/arrows/rightArrow.png" alt=""/></button> */}
      <button>"left"</button>
      <button>"up"</button>
      <button>"down"</button>
      <button>"right"</button>

      </Col>
    </Row>
    <Navbar color="light" light expand="md" className="App-footer"><NavbarBrand>        
      <a
        className="Repo-link"
        href="https://github.com/nicksedillos/project-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the code on Github</a>
    </NavbarBrand></Navbar>
    </Container>
    );
  }
}

export default App;