import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <MyButton style={{ background: `${props.color}` }} onClick={props.onClick}>
      {props.children}
    </MyButton>
  );
};

export default Button;

const MyButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid blue;
  background: blue;
  color: white;
  border-radius: 6px;
  margin: 0 0.5rem;
`;
