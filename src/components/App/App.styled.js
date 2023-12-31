import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 768px;
padding: 20px;

background: #83a4d4;
background: linear-gradient(to left, #b6fbff, #83a4d4);

color: #171212;`

export const StyledTitle = styled.h1`
font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
`


const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #171212;
  cursor: pointer;

  transition: all 0.1s ease-in;

  &:hover {
    background: #171212;
    color: #ffffff;
  }
`

export const StyledButtonSmall = styled(StyledButton)`
  padding: 5px;

`

export const StyledButtonLarge = styled(StyledButton)`
  padding: 10px;
`
