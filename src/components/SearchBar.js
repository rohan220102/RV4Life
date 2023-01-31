import '../css/searchBar.css';
import InputField from './InputField';
import styled from 'styled-components'

const SearchBar = ({icon, handleChange, handleKeyDown}) => {
  return (
    <ContentWrapper>
      <InputField />
    </ContentWrapper>
    // <div className="text-input" tabIndex={-1}>
    //   <img src={icon} tabIndex={-1} id="icon"/>
    //   <input 
    //     tabIndex={0} autoFocus className="input" id="start-input" placeholder="Enter a starting location" onChange={handleChange} onKeyDown={handleKeyDown}>
    //   </input>
    // </div>
  )
}

export default SearchBar;

const ContentWrapper = styled.div`
  padding: 150px 0;
  display: grid;
  justify-content: center;
  align-items: center;
`;