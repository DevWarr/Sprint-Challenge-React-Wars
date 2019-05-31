import React, { Component } from "react";
import AllChars from "./components/AllChars";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }


  previous = () => {
    window.scrollTo(0, 0);
    (this.state.previous) && 
    setTimeout(this.getCharacters(this.state.previous), 500);
  }

  next = () => {
    window.scrollTo(0, 0);
    (this.state.next) && 
    setTimeout(this.getCharacters(this.state.next), 500);
  }


  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
        console.log(data);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h2 className="Header">The characters from Star Wars:</h2>
        <AllChars charsList={this.state.starwarsChars} />
        <div className="pages">
          <button className={this.state.previous ? null : 'invisible'} onClick={this.previous}>
            Previous
          </button>
          <button className={this.state.next ? null : 'invisible'} onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
