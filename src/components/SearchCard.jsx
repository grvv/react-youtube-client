import React, { Component } from "react";

class SearchCard extends Component {
  state = {
    searchField: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.searchField);
  };

  handleOnChange = ({ target: input }) => {
    this.setState(() => ({ searchField: input.value }));
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Something..."
                value={this.state.searchField}
                onChange={this.handleOnChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchCard;
