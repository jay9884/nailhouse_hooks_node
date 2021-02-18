import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: 400;
  color: #424242;
  cursor: pointer;

  :hover {
    background-color: #F7F8FA;
  }

  ::placeholder {
    color: #3F4150;
  }

  :disabled {
    cursor: default;
  }
`