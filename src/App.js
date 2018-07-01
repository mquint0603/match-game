import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import GameArea from './components/GameArea'

class App extends Component {

  imageArray = [
    {url: "build/images/dwightYell.jpg", alt: "Dwight Yell"},
    {url: "build/images/michaelShrug.jpg", alt: "Michael Shrug"},
    {url: "/images/jim.jpg", alt: "Jim"},
    {url: "/images/andy.jpg", alt: "Andy"},
    {url: "/images/angela.jpg", alt: "Angela"},
    {url: "/images/meredith.jpg", alt: "Meredith"},
    {url: "/images/pam.jpg", alt: "Pam"},
    {url: "/images/phyllis.jpg", alt: "Phyllis"},
    {url: "/images/stanley.jpg", alt: "Stanley"},
    {url: "/images/creed.jpg", alt: "Creed"},
    {url: "/images/dwight.jpg", alt: "Dwight"},
    {url: "/images/erin2.jpg", alt: "Erin 2"},
    {url: "/images/jan.jpg", alt: "jan"},
    {url: "/images/kelly.jpg", alt: "Kelly"},
    {url: "/images/kevin.jpg", alt: "Kevin"},
    {url: "/images/michael.jpg", alt: "Michael"},
    {url: "/images/ryan.jpg", alt: "Ryan"},
    {url: "/images/toby.jpg", alt: "Toby"},
    {url: "/images/erin.jpg", alt: "Erin"}
  ]

  state = {
    images: this.imageArray,
    alreadyClicked: ["Stanley"],
    score: 0,
    topScore: 0,
    headerMessage: "Click an image to begin",
    imgHolderClass: ""
  }

  shuffle = (array) => {
    let i = array.length, temp, x;

    while (i) {
        x = Math.floor(Math.random() * i--);
        temp = array[i];
        array[i] = array[x];
        array[x] = temp;
    }
    // return array;
    this.setState({images: array})
  }

  checkImg = (alt) => {
    console.log(alt)
    if (this.state.alreadyClicked.includes(alt)){
      console.log("You clicked this already")
      this.setState({score: 0, alreadyClicked: [], headerMessage: "Whoops!", imgHolderClass: "shake"})

      // update score and headerMessage based on result
    } else {
      this.state.alreadyClicked.push(alt)
      console.log("added to clicked array")
      const newState = { ...this.state };
      newState.score += 1

      if(newState.score > this.state.topScore){
        this.setState({score: newState.score, headerMessage: "Nice!", topScore: newState.score, imgHolderClass: "na"})
      } else {
        this.setState({score: newState.score, headerMessage: "Nice!", imgHolderClass: "na"})
      }
    }
  }


  handleClick = (alt) => {
      this.checkImg(alt)
      this.shuffle(this.state.images)

  }


  render() {
    return (
      <div className="App">
        <Header
           message= {this.state.headerMessage}
           score= {this.state.score}
           topScore= {this.state.topScore}
        />
        <Jumbotron/>

        <div className="container">
            <div className="row">
                {this.state.images.slice(0,12).map(image => (
                    
                  <GameArea
                    key = {image.alt}
                    alt = {image.alt}
                    url = {image.url}
                    checkImg = {this.handleClick}
                    shake= {this.state.imgHolderClass}
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