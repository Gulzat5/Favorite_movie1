import React, { forwardRef } from "react";
import styled from "styled-components";

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 530px;
`;
const Input = styled.input`
  border-radius: 20px;
  padding: 6px;
  outline-color: blue;
  font-size: 16px;
  margin: 0.5rem;
`;
const FormInput = forwardRef((props, ref) => {
  return (
    <FormInputContainer>
      <label htmlFor={props.id}>{props.labelName}</label>
      <Input type={props.inputType} id={props.id} ref={ref} />
    </FormInputContainer>
  );
});

export default FormInput;
