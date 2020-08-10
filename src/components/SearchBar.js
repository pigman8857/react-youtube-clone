import React, {Component} from 'react';


class SearchBar extends Component{
    state = {
        searchTerm : '',
    }
    
    render(){
        return (
            <h1>This is the search bar component</h1>
        )
    }
}

export default SearchBar;