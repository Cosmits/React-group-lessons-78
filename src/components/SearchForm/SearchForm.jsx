import { useState } from "react";
import { StyledButtonLarge } from "../App/App.styled";
import { StyledForm, StyledInput, StyledLabel } from "./SearchForm.styled";

export const SearchForm = ({ setSearchTerm }) => {

  const [inputValue, setInputValue] = useState('');

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(inputValue)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput id="search" type="text" onChange={handleInput} value={inputValue} />
      <StyledButtonLarge type="submit"  >Submit</StyledButtonLarge>
    </StyledForm>
  );
};
