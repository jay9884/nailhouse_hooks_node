import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => {
    if (props.big) return '55px';
    else return '40px';
  }};
  padding: 0 8px;
  border: ${props => {
    if (props.reverse) return '1px solid #35c5f0';
    else return 'none';
  }};
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: 700;
  color: ${props => {
    if (props.reverse) return '#35c5f0';
    else return '#ffffff';
  }};
  background-color: ${props => {
    if (props.reverse) return '#ffffff';
    else return '#35c5f0';
  }};
  cursor: pointer;

  /* :hover {
    background-color: #F7F8FA;
  }

  ::placeholder {
    color: #dbdbdb;
  }

  :disabled {
    background-color: #E0E2E7;
    color: #1B1C32;
    cursor: default;
  } */
`