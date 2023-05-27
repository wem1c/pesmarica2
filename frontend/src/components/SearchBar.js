import React, { useState } from "react";
import "../styles/SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ placeholder}) {
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
   
  }
  const clearInput = () => {
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          ) : (
            <FontAwesomeIcon icon={faXmark}  id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;