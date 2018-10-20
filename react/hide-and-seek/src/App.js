import React, { Component } from 'react';
import gameboardImage from '#'; //image path placeholder

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hide-and-Seek
          </h1>
        </header>

        <div className="Game-image">
          <img src={gameboardImage} className="gameboard" alt="gameboard" />
        </div>

        <div className="scoreboard"></div>

        <div className="chatbox"></div>

        <div className="controls"></div>

        <div className="App-footer">
        <a
            className="Repo-link"
            href="https://github.com/nicksedillos/project-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code on Github
          </a>
        </div>

      </div>
    );
  }
}

export default App;
