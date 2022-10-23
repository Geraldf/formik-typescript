import { FC, useState } from "react";
import { styled } from "@mui/system";
import {
  Formik,
  Form as FormikForm,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { initialFormState, validationSchema, Values } from "./Meta";

interface CustomInputComponent {
  type?: string;
  label?: string;
  name?: string;
  id?: string;
  value?: any;
}
const onSubmit = (values: Values, props: any) => {
  console.log(values);
  console.log(props);
  setTimeout(() => {
    props.resetForm();
    props.setSubmitting(false);
  }, 2000);
};

const MTF: FC<CustomInputComponent & FieldProps> = (form, props) => {
  return <TextField {...form} {...props} />;
};

const MyComponent = styled(MTF)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});
const TestForm = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleChange, errors, touched }) => (
            <FormikForm>
              {Object.keys(values).map((key, index, all) => {
                return (
                  <Field
                    component={MyComponent}
                    placeholder={key}
                    id={index}
                    value={values[key as keyof typeof values]}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    key={index}
                    testProp="sdfs"
                    name={key}
                    label={key}
                    fullWidth
                  ></Field>
                );
              })}
              {/* <Field component={MTF} name="name" label="Name" fullWidth></Field> */}

              <Button
                color="success"
                variant="contained"
                type="submit"
                onClick={() => {
                  console.log(values);
                }}
              >
                Erstellen
              </Button>
            </FormikForm>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default TestForm;
