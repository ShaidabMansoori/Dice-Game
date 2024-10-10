import styled from "styled-components"

export const Button = styled.button`
  width: 220px;
  padding: 10px 18px;
  gap: 10px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

   &:hover{
    background-color: white;
    color: black;
    transition: 0.3s background ease-in;
    cursor: pointer;
    border: 1px solid black;
  }
`;