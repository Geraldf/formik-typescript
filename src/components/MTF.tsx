import { FC } from "react";
import { Formik, Form as FormikForm, Field, FieldProps } from "formik";
import { Button, TextField } from "@mui/material";

interface CustomInputComponent {
  type?: string;
}

// function MuiTextField({
//   field,
//   form,
//   ...props
// }): ReactElement & FormikProps<Values> {
//   return <TextField {...field} {...props} />;
// }

const MTF: FC<CustomInputComponent & FieldProps> = (field, props) => (
  <TextField {...field} {...props} />
);
const MyComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "test",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <FormikForm>
          <Field component={MTF} name="name" label="Name" fullWidth></Field>

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
  );
};

export default MyComponent;
