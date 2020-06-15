import React from "react";
import CardList from "../card-list/card-list-component";
import SearchBox from "../searchbox/search-box.component";

class MoviesPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataView: [],
      searchfield: "Lord of the rings",
    };
  }

  searchFunction(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dataView: data.results });
        console.log(this.state.dataView);
      })
      .catch((error) => {
        alert("something");
      });
  }

  handleSubmit = (e) => {
    let searchboxValue = e.target.value;
    if (searchboxValue === "") {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=ca3c9a1e3873692c541a9930318e0100&language=en-US&query=${null}&page=1&include_adult=false`;
      this.searchFunction(url);
    } else {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=ca3c9a1e3873692c541a9930318e0100&language=en-US&query=${searchboxValue}&page=1&include_adult=false`;
      this.searchFunction(url);
    }

    this.setState({ searchfield: e.target.value }, () => {});
  };

  render() {
    const { dataView } = this.state;
    const filteredMovies = dataView.filter(
      (rating) => rating.popularity > 5 && rating.poster_path !== null
    );
    return (
      <div>
        <SearchBox
          placeholder="Search Movie"
          handleSubmit={this.handleSubmit}
        />
        <CardList movies={filteredMovies} />
      </div>
    );
  }
}

export default MoviesPreview;
