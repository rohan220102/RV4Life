import '../css/searchBar.css';

const SearchBar = ({icon, handleChange, handleKeyDown}) => {
  return (
    <div className="text-input" tabIndex={-1}>
      <img src={icon} tabIndex={-1} id="icon"/>
      <input 
        tabIndex={0} autoFocus className="input" id="start-input" placeholder="Enter a starting location" onChange={handleChange} onKeyDown={handleKeyDown}>
      </input>
    </div>
  )
}

export default SearchBar;