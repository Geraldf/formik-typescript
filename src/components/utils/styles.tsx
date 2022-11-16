import styled from "styled-components";
import { Form } from "formik";

export const StyledApp = styled.div`
  font-family: sans-serif;
  display: flex;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const StyledFieldContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledLabel = styled.label`
  width: 100px;
  text-align: right;
`;

export const StyledLegend = styled.legend`
  width: 100%;
  text-align: center;
`;
