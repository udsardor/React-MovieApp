import { Component } from "react";
import {LoaderSpiner} from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading: true

  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=5744e32&s=ip man`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false}));
  }

  searchMovies = (str, type) => {
    this.setState({loading: true})
      fetch(`http://www.omdbapi.com/?apikey=5744e32&s=${str}${type !== "all" ? `&type=${type}`: ""}`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  render(){
    return (
        <div className="container content">
          <Search searchMovie={this.searchMovies}/>
            {this.state.loading ? (
                <LoaderSpiner />
            ) :  <Movies movies={this.state.movies}/>}
        </div>
    )
  }
}
