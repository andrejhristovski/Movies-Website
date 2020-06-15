import React from "react";
import MoviesPreview from "./components/movies-preview/movies-preview.component";
import Header from "./components/header/header.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MoviesPreview />
      </div>
    );
  }
}

export default App;
