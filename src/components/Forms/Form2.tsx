import { Field, Formik, useFormikContext } from "formik";
import { useEffect } from "react";
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

const FormObserver: React.FC = () => {
  const { values } = useFormikContext();

  useEffect(() => {
    console.log("FormObserver::values", values);
  }, [values]);

  return null;
};

const initialValues: Values = {
  firstName: "",
  lastName: "",
  email: ""
};

const Form2: React.FC = () => {
  const handleSubmit = (values: Values) => console.log("Form2::submit", values);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm>
        <FormObserver />

        <StyledLegend>Form 2</StyledLegend>

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

export default Form2;
