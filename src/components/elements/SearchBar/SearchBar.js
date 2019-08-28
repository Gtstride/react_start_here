import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';
class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null;

  doSearch = (event) => {
    // ES6 Destructing
    const { callback } = this.props;
    
    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => {
      callback(this.state.value);
    }, 500);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmbd-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={value}
          />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar;
