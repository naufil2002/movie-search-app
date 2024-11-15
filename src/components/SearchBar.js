import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <div className="input-group w-100 w-md-75">
        <input
          type="text"
          className="form-control rounded-start"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleInputChange} 
          onKeyDown={handleKeyPress} 
          aria-label="Movie Search"  
        />
        <button
          className="btn btn-primary rounded-end"
          onClick={onSearch}
          aria-label="Search Button"  
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
