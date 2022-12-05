import { Component } from "react";
import Movies from "../components/Movies";

export default class Main extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=5744e32&s=Avengers")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render(){
    return (
        <div className="container content">
            {this.state.movies.length ? (
                <Movies movies={this.state.movies}/>
            ) : <h3>Loading...</h3>}
        </div>
    )
  }
}
