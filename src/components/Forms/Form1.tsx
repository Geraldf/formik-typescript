import { Field, Formik } from "formik";
import { FormEvent } from "react";
import {
  StyledFieldContainer,
  StyledForm,
  StyledLabel,
  StyledLegend
} from "./styles";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
};

const initialValues: Values = {
  firstName: "",
  lastName: "",
  email: ""
};

const Form1: React.FC = () => {
  const handleSubmit = (values: Values) => console.log("Form1::submit", values);

  const handleOnChange = (event: FormEvent) => {
    console.log("Form1::onChange", event);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm onChange={handleOnChange}>
        <StyledLegend>Form 1</StyledLegend>

        <StyledFieldContainer>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <Field id="firstName" name="firstName" placeholder="John" />
        </StyledFieldContainer>

        <StyledFieldContainer>
          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <Field id="lastName" name="lastName" placeholder="Doe" />
        </StyledFieldContainer>

        <StyledFieldContainer>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
        </StyledFieldContainer>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};

export default Form1;
