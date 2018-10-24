import React, { Component } from 'react';
import gameboardImage from './boardstates/board.png'; //image path placeholder
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
    <Container fluid className="App">
      <Navbar light expand="md" className="App-header">Hide-and-Seek</Navbar> 
      <Row>
        <Col xs="6" sm="4" className="Players"><h2 className="Sub-heading">Players:</h2></Col>
        <Col className="Game-board">
          <div>
            { <img src={gameboardImage} className="Game-image img-fluid" alt="gameboard" /> }
            {/* Creating the grid below so the players can play on, don't expand below lel ;) */}
            <div className="grid-container">
            <div className="item1">1,1</div>
            <div className="item2">1,2</div>
            <div className="item3">1,3</div>  
            <div className="item4">1,4</div>
            <div className="item5">1,5</div>
            <div className="item6">1,6</div>
            <div className="item7">1,7</div>
            <div className="item8">1,8</div>
            <div className="item1">1,9</div>
            <div className="item2">1,10</div>
            <div className="item3">1,11</div>  
            <div className="item4">1,12</div>
            <div className="item5">1,13</div>
            <div className="item6">1,14</div>
            <div className="item7">1,15</div>
            <div className="item8">1,16</div>
            <div className="item1">2,1</div>
            <div className="item2">2,2</div>
            <div className="item3">2,3</div>  
            <div className="item4">2,4</div>
            <div className="item5">2,5</div>
            <div className="item6">2,6</div>
            <div className="item7">2,7</div>
            <div className="item8">2,8</div>
            <div className="item1">2,9</div>
            <div className="item2">2,10</div>
            <div className="item3">2,11</div>  
            <div className="item4">2,12</div>
            <div className="item5">2,13</div>
            <div className="item6">2,14</div>
            <div className="item7">2,15</div>
            <div className="item8">2,16</div>
            <div className="item1">3,1</div>
            <div className="item2">3,2</div>
            <div className="item3">3,3</div>  
            <div className="item4">3,4</div>
            <div className="item5">3,5</div>
            <div className="item6">3,6</div>
            <div className="item7">3,7</div>
            <div className="item8">3,8</div>
            <div className="item1">3,9</div>
            <div className="item2">3,10</div>
            <div className="item3">3,11</div>  
            <div className="item4">3,12</div>
            <div className="item5">3,13</div>
            <div className="item6">3,14</div>
            <div className="item7">3,15</div>
            <div className="item8">3,16</div>
            <div className="item1">4,1</div>
            <div className="item2">4,2</div>
            <div className="item3">4,3</div>  
            <div className="item4">4,4</div>
            <div className="item5">4,5</div>
            <div className="item6">4,6</div>
            <div className="item7">4,7</div>
            <div className="item8">4,8</div>
            <div className="item1">4,9</div>
            <div className="item2">4,10</div>
            <div className="item3">4,11</div>  
            <div className="item4">4,12</div>
            <div className="item5">4,13</div>
            <div className="item6">4,14</div>
            <div className="item7">4,15</div>
            <div className="item8">4,16</div>
            <div className="item1">4,1</div>
            <div className="item2">4,2</div>
            <div className="item3">4,3</div>  
            <div className="item4">4,4</div>
            <div className="item5">4,5</div>
            <div className="item6">4,6</div>
            <div className="item7">4,7</div>
            <div className="item8">4,8</div>
            <div className="item1">4,9</div>
            <div className="item2">4,10</div>
            <div className="item3">4,11</div>  
            <div className="item4">4,12</div>
            <div className="item5">4,13</div>
            <div className="item6">4,14</div>
            <div className="item7">4,15</div>
            <div className="item8">4,16</div>
            <div className="item1">5,1</div>
            <div className="item2">5,2</div>
            <div className="item3">5,3</div>  
            <div className="item4">5,4</div>
            <div className="item5">5,5</div>
            <div className="item6">5,6</div>
            <div className="item7">5,7</div>
            <div className="item8">5,8</div>
            <div className="item1">5,9</div>
            <div className="item2">5,10</div>
            <div className="item3">5,11</div>  
            <div className="item4">5,12</div>
            <div className="item5">5,13</div>
            <div className="item6">5,14</div>
            <div className="item7">5,15</div>
            <div className="item8">5,16</div>
            <div className="item1">6,1</div>
            <div className="item2">6,2</div>
            <div className="item3">6,3</div>  
            <div className="item4">6,4</div>
            <div className="item5">6,5</div>
            <div className="item6">6,6</div>
            <div className="item7">6,7</div>
            <div className="item8">6,8</div>
            <div className="item1">6,9</div>
            <div className="item2">6,10</div>
            <div className="item3">6,11</div>  
            <div className="item4">6,12</div>
            <div className="item5">6,13</div>
            <div className="item6">6,14</div>
            <div className="item7">6,15</div>
            <div className="item8">6,16</div>
            <div className="item1">7,1</div>
            <div className="item2">7,2</div>
            <div className="item3">7,3</div>  
            <div className="item4">7,4</div>
            <div className="item5">7,5</div>
            <div className="item6">7,6</div>
            <div className="item7">7,7</div>
            <div className="item8">7,8</div>
            <div className="item1">7,9</div>
            <div className="item2">7,10</div>
            <div className="item3">7,11</div>  
            <div className="item4">7,12</div>
            <div className="item5">7,13</div>
            <div className="item6">7,14</div>
            <div className="item7">7,15</div>
            <div className="item8">7,16</div>
            <div className="item1">8,1</div>
            <div className="item2">8,2</div>
            <div className="item3">8,3</div>  
            <div className="item4">8,4</div>
            <div className="item5">8,5</div>
            <div className="item6">8,6</div>
            <div className="item7">8,7</div>
            <div className="item8">8,8</div>
            <div className="item1">8,9</div>
            <div className="item2">8,10</div>
            <div className="item3">8,11</div>  
            <div className="item4">8,12</div>
            <div className="item5">8,13</div>
            <div className="item6">8,14</div>
            <div className="item7">8,15</div>
            <div className="item8">8,16</div>
            <div className="item1">9,1</div>
            <div className="item2">9,2</div>
            <div className="item3">9,3</div>  
            <div className="item4">9,4</div>
            <div className="item5">9,5</div>
            <div className="item6">9,6</div>
            <div className="item7">9,7</div>
            <div className="item8">9,8</div>
            <div className="item1">9,9</div>
            <div className="item2">9,10</div>
            <div className="item3">9,11</div>  
            <div className="item4">9,12</div>
            <div className="item5">9,13</div>
            <div className="item6">9,14</div>
            <div className="item7">9,15</div>
            <div className="item8">9,16</div>
            <div className="item1">10,1</div>
            <div className="item2">10,2</div>
            <div className="item3">10,3</div>  
            <div className="item4">10,4</div>
            <div className="item5">10,5</div>
            <div className="item6">10,6</div>
            <div className="item7">10,7</div>
            <div className="item8">10,8</div>
            <div className="item1">10,9</div>
            <div className="item2">10,10</div>
            <div className="item3">10,11</div>  
            <div className="item4">10,12</div>
            <div className="item5">10,13</div>
            <div className="item6">10,14</div>
            <div className="item7">10,15</div>
            <div className="item8">10,16</div>
            <div className="item1">11,1</div>
            <div className="item2">11,2</div>
            <div className="item3">11,3</div>  
            <div className="item4">11,4</div>
            <div className="item5">11,5</div>
            <div className="item6">11,6</div>
            <div className="item7">11,7</div>
            <div className="item8">11,8</div>
            <div className="item1">11,9</div>
            <div className="item2">11,10</div>
            <div className="item3">11,11</div>  
            <div className="item4">11,12</div>
            <div className="item5">11,13</div>
            <div className="item6">11,14</div>
            <div className="item7">11,15</div>
            <div className="item8">11,16</div>
            <div className="item1">12,1</div>
            <div className="item2">12,2</div>
            <div className="item3">12,3</div>  
            <div className="item4">12,4</div>
            <div className="item5">12,5</div>
            <div className="item6">12,6</div>
            <div className="item7">12,7</div>
            <div className="item8">12,8</div>
            <div className="item1">12,9</div>
            <div className="item2">12,10</div>
            <div className="item3">12,11</div>  
            <div className="item4">12,12</div>
            <div className="item5">12,13</div>
            <div className="item6">12,14</div>
            <div className="item7">12,15</div>
            <div className="item8">12,16</div>
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
    </Container>
    );
  }
}

export default App;