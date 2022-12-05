import { Component } from "react";

export default class Search extends Component{
    state ={
        search: ""
    }
    handleKey = (e) => {
        if(e.key === 'Enter'){
            this.props.searchMovie(this.state.search)
        }
    }
    render(){
        return(
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
                    onChange={(e => this.setState({search: e.target.value}))}
                    onKeyDown={this.handleKey} 
                  />
                  <button className="btn search-btn" onClick={() => this.props.searchMovie(this.state.search)}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}