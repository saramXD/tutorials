import React from 'react'
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="searchBar mb-3">
            <input 
                type="text"
                className="form-control"
                placeholder="Search by title"
                // value
                onChange
            />
            <button className="btn btn-outline-secondary">Search</button>
        </div>
    )
}

export default SearchBar
