import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state={
      list: window.cs142models.statesModel().sort(),
      searchValue: '',
    }
    this.handleSearchBound = event => this.handleSearch(event);
  
  }
  handleSearch(event) {
    this.setState({ searchValue: event.target.value });
  }
  filterStates(searchValue) {
    const resultList = [];
    for(let i = 0; i < this.state.list.length; i++) {
      const state = this.state.list[i];
        if(!searchValue || state.toUpperCase().search(searchValue.toUpperCase()) >= 0) {
        resultList.push( 
          (<div className="resultlistitem"> {state} </div>)
        );
      }
    }

    if(resultList.length === 0) {
      resultList.push(
        (<div className="error"> There are no matching states! </div>)
      );
    }

    return resultList;
  }
  render() {
    return (
      <div className="container">
        <div className="search">
          <label htmlFor="search"> Search for State: </label>
          <input
            id="search"
            type="text"
            defaultValue={this.state.searchValue}
            onChange={this.handleSearchBound}
          />
        </div>
        <div className="searchVal">
          {this.state.searchValue}
        </div>
        <div className="list">
            {this.filterStates(this.state.searchValue)}
        </div>
      </div>
    );
  }
}

export default States;
