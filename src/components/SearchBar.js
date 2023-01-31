import '../css/searchBar.css';
import InputField from './InputField';
import styled from 'styled-components'

const SearchBar = ({icon, handleChange, handleKeyDown}) => {
  return (
      <InputField autofocus icon={icon} id="start-input" placeholder="Enter a starting location" onChange={handleChange} onKeyDown={handleKeyDown}/>
  )
}

export default SearchBar;
