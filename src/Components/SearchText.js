import React, { Component } from 'react';
import '../Style/SearchText.css';

class SearchText extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
        <div className="searchDiv">
        <input type="text" ref="searchButton" id="SearchID" className="search form-control" placeholder="Search" aria-label="Search" onChange={this.props.searchHandler}/>
        </div>
        );
    }
}

export default SearchText;