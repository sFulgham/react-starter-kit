import React, {Component} from 'react';
import {debounceInput} from '../../assets/jsLibs/utils';
import {setTimeout} from 'timers';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchVal: ''
    };
  }

  getCurrentVal() {
    return this.state.searchVal;
  }

  success() {
    this.props.store.commitSearch(this.state.searchVal);
  }

  handleSearch(evt) {
    this.setState({
      searchVal: evt.target.value
    });

    setTimeout(() => {
      debounceInput(this.state.searchVal, this.getCurrentVal.bind(this), this.success.bind(this));
    }, 200);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.searchVal}
        placeholder="Search postings"
        onChange={this.handleSearch.bind(this)}
      />
    );
  }

}

export default Search;