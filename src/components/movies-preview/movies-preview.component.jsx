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
        this.setState({ dataView: data.data.movies });
        console.log(this.state.dataView);
      })
      .catch((error) => {
        alert("something");
      });
  }

  handleSubmit = (e) => {
    let searchboxValue = e.target.value;
    if (searchboxValue === "") {
      let url = `https://yts.mx/api/v2/list_movies.json?query_term=${null}&sort_by=rating`;
      this.searchFunction(url);
      
    } else {
      let url = `https://yts.mx/api/v2/list_movies.json?query_term=${searchboxValue}&sort_by=rating`;
      this.searchFunction(url);
      console.log(this.state.dataView);
     
    }

    this.setState({ searchfield: e.target.value }, () => {});
  };

  render() {
    const { dataView } = this.state;

    return (
      <div>
        <SearchBox
          placeholder="Search Movie"
          handleSubmit={this.handleSubmit}
        />
        {dataView ? <CardList movies={dataView} /> : null}
      </div>
    );
  }
}

export default MoviesPreview;
