import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'

class App extends Component {

  state = {
    photos: [],
    score: 0,
    headerMessage: "Click an image to begin"
  }

  // shuffle = () => {
  //   randomize and then set state/rerender
  // }

  // checkImg = (imgId) => {

  // }

  // handleClick = (imgId) => {

  // }


  render() {
    return (
      <div className="App">
        <Header
           message= {this.state.headerMessage}
           score= {this.state.score}
        />
        {/* <Jumbotron/>
        <GameArea/>
        <Footer/> */}
      </div>
    );
  }
}

export default App;