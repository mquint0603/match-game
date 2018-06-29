import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import GameArea from './components/GameArea'

class App extends Component {

  imageArray = [
    {url: "/dwightYell.jpg", alt: "Dwight"},
    {url: "/michaelShrug.jpg", alt: "Michael"},
    {url: "/jim.jpg", alt: "Jim"},
    {url: "/andy.jpg", alt: "Andy"},
    {url: "/angela.jpg", alt: "Angela"},
    {url: "/meredith.jpg", alt: "Meredith"},
    {url: "/pam.jpg", alt: "Pam"},
    {url: "/phyllis.jpg", alt: "Phyllis"},
    {url: "/stanley.jpg", alt: "Stanley"},
  ]

  state = {
    images: this.imageArray,
    alreadyClicked: ["Stanley"],
    score: 0,
    headerMessage: "Click an image to begin"
  }

  // shuffle = () => {
  //   randomize and then set state/rerender  
  // ** set state.images to only first 12 indices of imageArray
  // }

  checkImg = (alt) => {
    console.log(alt)
    if (this.state.alreadyClicked.includes(alt)){
      console.log("You clicked this already")
      this.setState({score: 0, alreadyClicked: []})
      // update score and headerMessage based on result
    } else {
      this.state.alreadyClicked.push(alt)
      console.log("added to clicked array")
      const newState = { ...this.state };
      newState.score += 1
      this.setState({score: newState.score})
    }
  }


  // handleClick = (alt) => {
      // checkImg(alt)
      // shuffle... after like 2 seconds?

  // }


  render() {
    return (
      <div className="App">
        <Header
           message= {this.state.headerMessage}
           score= {this.state.score}
        />
        <Jumbotron/>

        <div className="container">
            <div className="row">
                {this.state.images.map(image => (
                    
                  <GameArea
                    key = {image.alt}
                    alt = {image.alt}
                    url = {image.url}
                    checkImg = {this.checkImg}
                  />

                ))}
            </div>
        </div>
        {/*<Footer/> */}
      </div>
    );
  }
}



export default App;