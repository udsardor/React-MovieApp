import { Component } from "react";
import {LoaderSpiner} from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=5744e32&s=Panda`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
      fetch(`http://www.omdbapi.com/?apikey=5744e32&s=${str}`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search }));
  }

  render(){
    return (

        <div className="container content">
          <Search searchMovie={this.searchMovies}/>
            {this.state.movies.length ? (
                <Movies movies={this.state.movies}/>
            ) : <LoaderSpiner />}
        </div>
    )
  }
}
