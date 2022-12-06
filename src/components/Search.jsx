import { Component } from "react";
import { LoaderSpiner } from "./Loader";

export default class Search extends Component {
  state = {
    search: "ip man",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };
  handleFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovie(this.state.search, this.state.type ? this.state.type : <LoaderSpiner />)
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="search"
                id="autocomplete-input"
                placeholder="Search..."
                className="autocomplete"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
              <button
                className="btn search-btn"
                onClick={() => this.props.searchMovie(this.state.search, this.state.type ? this.state.type : <LoaderSpiner />)}
              >
                Search
              </button>
              <div>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="all"
                    onChange={this.handleFilter}
                    checked={this.state.type === "all"}
                  />
                  <span>All</span>
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="movie"
                    onChange={this.handleFilter}
                    checked={this.state.type === "movie"}
                  />
                  <span>Movies only</span>
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="series"
                    onChange={this.handleFilter}
                    checked={this.state.type === "series"}
                  />
                  <span>Series only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
