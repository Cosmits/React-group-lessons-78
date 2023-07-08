import { StyledButtonLarge } from "../App/App.styled";

export const DisplayFilter = ({ searchTerm, reset }) => (
  <>
    <p> Filter: {searchTerm}</p>
    <StyledButtonLarge onClick={reset}>Reset</StyledButtonLarge>
  </>
);
