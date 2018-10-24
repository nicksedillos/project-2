import React, { Component } from 'react';
import gameboardImage from './imgs/boardstates/board.png'; //image path placeholder
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  // componentDidMount() {
  //   fetch('/api/chat')
  //     .then((chatInfo) => {
  //       this.setState({ chatInfo });
  //     })
  // }
  render() {
    //const { chatInfo } = this.state;
    //const chatMessages = chatInfo.map((message, i) => <p key={i}>{message}</p>);
    
    return (
<<<<<<< HEAD
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
=======
    <Container fluid className="App">
      <Navbar light expand="md" className="App-header">Hide-and-Seek</Navbar> 
      <Row>
        <Col xs="6" sm="4" className="Players"><h2 className="Sub-heading">Players:</h2></Col>
        <Col className="Game-board">
          <div id="game-container">
            {/* Creating the grid below so the players can play on, don't expand below lel ;) */}
            <div id="grid-container">
                <div className="block" id="1,1"></div>
                <div className="block" id="1,2"></div>
                <div className="block" id="1,3"></div>
                <div className="block" id="1,4"></div>
                <div className="block" id="1,5"></div>
                <div className="block" id="1,6"></div>
                <div className="block" id="1,7"></div>
                <div className="block" id="1,8"></div>
                <div className="block" id="1,9"></div>
                <div className="block" id="1,10"></div>
                <div className="block" id="1,11"></div>
                <div className="block" id="1,12"></div>
                <div className="block" id="1,13"></div>
                <div className="block" id="1,14"></div>
                <div className="block" id="1,15"></div>
                <div className="block" id="1,16"></div>
                <div className="block" id="1,17"></div>
                <div className="block" id="2,1"></div>
                <div className="block" id="2,2"></div>
                <div className="block" id="2,3"></div>
                <div className="block" id="2,4"></div>
                <div className="block" id="2,5"></div>
                <div className="block" id="2,6"></div>
                <div className="block" id="2,7"></div>
                <div className="block" id="2,8"></div>
                <div className="block" id="2,9"></div>
                <div className="block" id="2,10"></div>
                <div className="block" id="2,11"></div>
                <div className="block" id="2,12"></div>
                <div className="block" id="2,13"></div>
                <div className="block" id="2,14"></div>
                <div className="block" id="2,15"></div>
                <div className="block" id="2,16"></div>
                <div className="block" id="2,17"></div>
                <div className="block" id="3,1"></div>
                <div className="block" id="3,2"></div>
                <div className="block" id="3,3"></div>
                <div className="block" id="3,4"></div>
                <div className="block" id="3,5"></div>
                <div className="block" id="3,6"></div>
                <div className="block" id="3,7"></div>
                <div className="block" id="3,8"></div>
                <div className="block" id="3,9"></div>
                <div className="block" id="3,10"></div>
                <div className="block" id="3,11"></div>
                <div className="block" id="3,12"></div>
                <div className="block" id="3,13"></div>
                <div className="block" id="3,14"></div>
                <div className="block" id="3,15"></div>
                <div className="block" id="3,16"></div>
                <div className="block" id="3,17"></div>
                <div className="block" id="4,1"></div>
                <div className="block" id="4,2"></div>
                <div className="block" id="4,3"></div>
                <div className="block" id="4,4"></div>
                <div className="block" id="4,5"></div>
                <div className="block" id="4,6"></div>
                <div className="block" id="4,7"></div>
                <div className="block" id="4,8"></div>
                <div className="block" id="4,9"></div>
                <div className="block" id="4,10"></div>
                <div className="block" id="4,11"></div>
                <div className="block" id="4,12"></div>
                <div className="block" id="4,13"></div>
                <div className="block" id="4,14"></div>
                <div className="block" id="4,15"></div>
                <div className="block" id="4,16"></div>
                <div className="block" id="4,17"></div>
                <div className="block" id="5,1"></div>
                <div className="block" id="5,2"></div>
                <div className="block" id="5,3"></div>
                <div className="block" id="5,4"></div>
                <div className="block" id="5,5"></div>
                <div className="block" id="5,6"></div>
                <div className="block" id="5,7"></div>
                <div className="block" id="5,8"></div>
                <div className="block" id="5,9"></div>
                <div className="block" id="5,10"></div>
                <div className="block" id="5,11"></div>
                <div className="block" id="5,12"></div>
                <div className="block" id="5,13"></div>
                <div className="block" id="5,14"></div>
                <div className="block" id="5,15"></div>
                <div className="block" id="5,16"></div>
                <div className="block" id="5,17"></div>
                <div className="block" id="6,1"></div>
                <div className="block" id="6,2"></div>
                <div className="block" id="6,3"></div>
                <div className="block" id="6,4"></div>
                <div className="block" id="6,5"></div>
                <div className="block" id="6,6"></div>
                <div className="block" id="6,7"></div>
                <div className="block" id="6,8"></div>
                <div className="block" id="6,9"></div>
                <div className="block" id="6,10"></div>
                <div className="block" id="6,11"></div>
                <div className="block" id="6,12"></div>
                <div className="block" id="6,13"></div>
                <div className="block" id="6,14"></div>
                <div className="block" id="6,15"></div>
                <div className="block" id="6,16"></div>
                <div className="block" id="6,17"></div>
                <div className="block" id="7,1"></div>
                <div className="block" id="7,2"></div>
                <div className="block" id="7,3"></div>
                <div className="block" id="7,4"></div>
                <div className="block" id="7,5"></div>
                <div className="block" id="7,6"></div>
                <div className="block" id="7,7"></div>
                <div className="block" id="7,8"></div>
                <div className="block" id="7,9"></div>
                <div className="block" id="7,10"></div>
                <div className="block" id="7,11"></div>
                <div className="block" id="7,12"></div>
                <div className="block" id="7,13"></div>
                <div className="block" id="7,14"></div>
                <div className="block" id="7,15"></div>
                <div className="block" id="7,16"></div>
                <div className="block" id="7,17"></div>
                <div className="block" id="8,1"></div>
                <div className="block" id="8,2"></div>
                <div className="block" id="8,3"></div>
                <div className="block" id="8,4"></div>
                <div className="block" id="8,5"></div>
                <div className="block" id="8,6"></div>
                <div className="block" id="8,7"></div>
                <div className="block" id="8,8"></div>
                <div className="block" id="8,9"></div>
                <div className="block" id="8,10"></div>
                <div className="block" id="8,11"></div>
                <div className="block" id="8,12"></div>
                <div className="block" id="8,13"></div>
                <div className="block" id="8,14"></div>
                <div className="block" id="8,15"></div>
                <div className="block" id="8,16"></div>
                <div className="block" id="8,17"></div>
                <div className="block" id="9,1"></div>
                <div className="block" id="9,2"></div>
                <div className="block" id="9,3"></div>
                <div className="block" id="9,4"></div>
                <div className="block" id="9,5"></div>
                <div className="block" id="9,6"></div>
                <div className="block" id="9,7"></div>
                <div className="block" id="9,8"></div>
                <div className="block" id="9,9"></div>
                <div className="block" id="9,10"></div>
                <div className="block" id="9,11"></div>
                <div className="block" id="9,12"></div>
                <div className="block" id="9,13"></div>
                <div className="block" id="9,14"></div>
                <div className="block" id="9,15"></div>
                <div className="block" id="9,16"></div>
                <div className="block" id="9,17"></div>
                <div className="block" id="10,1"></div>
                <div className="block" id="10,2"></div>
                <div className="block" id="10,3"></div>
                <div className="block" id="10,4"></div>
                <div className="block" id="10,5"></div>
                <div className="block" id="10,6"></div>
                <div className="block" id="10,7"></div>
                <div className="block" id="10,8"></div>
                <div className="block" id="10,9"></div>
                <div className="block" id="10,10"></div>
                <div className="block" id="10,11"></div>
                <div className="block" id="10,12"></div>
                <div className="block" id="10,13"></div>
                <div className="block" id="10,14"></div>
                <div className="block" id="10,15"></div>
                <div className="block" id="10,16"></div>
                <div className="block" id="10,17"></div>
                <div className="block" id="11,1"></div>
                <div className="block" id="11,2"></div>
                <div className="block" id="11,3"></div>
                <div className="block" id="11,4"></div>
                <div className="block" id="11,5"></div>
                <div className="block" id="11,6"></div>
                <div className="block" id="11,7"></div>
                <div className="block" id="11,8"></div>
                <div className="block" id="11,9"></div>
                <div className="block" id="11,10"></div>
                <div className="block" id="11,11"></div>
                <div className="block" id="11,12"></div>
                <div className="block" id="11,13"></div>
                <div className="block" id="11,14"></div>
                <div className="block" id="11,15"></div>
                <div className="block" id="11,16"></div>
                <div className="block" id="11,17"></div>
                <div className="block" id="12,1"></div>
                <div className="block" id="12,2"></div>
                <div className="block" id="12,3"></div>
                <div className="block" id="12,4"></div>
                <div className="block" id="12,5"></div>
                <div className="block" id="12,6"></div>
                <div className="block" id="12,7"></div>
                <div className="block" id="12,8"></div>
                <div className="block" id="12,9"></div>
                <div className="block" id="12,10"></div>
                <div className="block" id="12,11"></div>
                <div className="block" id="12,12"></div>
                <div className="block" id="12,13"></div>
                <div className="block" id="12,14"></div>
                <div className="block" id="12,15"></div>
                <div className="block" id="12,16"></div>
                <div className="block" id="12,17"></div>
            </div>
            <div id="game-image-container">
              { <img src={gameboardImage} className="img-fluid" alt="gameboard" /> }
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="Chat-box">
          <h2 className="Sub-heading">Game Chat:</h2>
          <div>
            {/* {chatMessages} */}
          </div>
        </Col>
        <Col xs="6" sm="4" className="Controls"><h2 className="Sub-heading">Controls:</h2></Col>
      </Row>
      <Navbar light expand="md" className="App-footer">
        <NavbarBrand>        
          <a
          className="Repo-link"
          href="https://github.com/nicksedillos/project-2"
          target="_blank"
          rel="noopener noreferrer"
          >
          View the code on Github</a>
        </NavbarBrand>
      </Navbar>
>>>>>>> 0bac558ad0011a12e8daf98858622a9338e8e26d
    </Container>
    );
  }
}

export default App;