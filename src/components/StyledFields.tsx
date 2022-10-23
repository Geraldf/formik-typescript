import { FieldInputProps, FormikState } from "formik";
import React from "react";
import styled from "styled-components";

export const BetterInput = styled.input`
  height: 1.7em;
  padding: 0.5em;
  margin: 0.5em 0;
  font-family: Arial;
  width: 80%;
  border: 1px solid #aaaaaa;
`;

export const BetterSelect = styled.select`
  height: 2.7em;
  padding: 0.5em;
  margin: 0.5em 0;
  font-family: Arial;
  width: 50%;
  border: 1px solid #aaaaaa;
`;

export const FormField = ({
  field,
  form,
  ...props
}: {
  field: FieldInputProps<any>;
  form: FormikState<any>;
}) => {
  return <BetterInput {...field} {...props} />;
};

export const FormSelect = ({
  field,
  form,
  ...props
}: {
  field: FieldInputProps<any>;
  form: FormikState<any>;
}) => {
  return <BetterSelect {...field} {...props} />;
};

export const FormButton = styled.button`
  height: 3em;
  padding: 0em 1em;
  margin: 0.5em 0;
  font-family: Arial;
  background: #0c6d4d;
  color: white;
  border: 0px;
  border-radius: 3px;
`;
