import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: 20px;
  margin: 5px;
  padding: 5px 10px;
  border: ${(props) => (props.border ? props.border : "1px solid black")};
`;
export { Button };