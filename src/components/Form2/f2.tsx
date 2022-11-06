import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import * as fld from "./Meta";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Checkbox } from "@mui/material";

// export const validationSchema = yup.object({
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });

const CustomTextfield = styled(TextField)({
  // your custom styles go here
  padding: "5px",
}) as typeof TextField;

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: fld.initialFormState,
    // initialValues: {
    //   email: "foobar@example.com",
    //   password: "foobar",
    // },
    validationSchema: fld.validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(fld.initialFormState).map((key, index, allKeys) => {
            if (
              typeof formik.values[key as keyof typeof formik.values] ===
              "string"
            ) {
              return (
                <Grid
                  item
                  xs={fld.formdef[key as keyof typeof fld.formdef].width}
                >
                  <CustomTextfield
                    fullWidth
                    id={key}
                    name={key}
                    label={key}
                    value={formik.values[key as keyof typeof formik.values]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched[key as keyof typeof formik.values] &&
                      Boolean(formik.errors[key as keyof typeof formik.values])
                    }
                    helperText={
                      formik.touched[key as keyof typeof formik.values] &&
                      formik.errors[key as keyof typeof formik.values]
                    }
                  />
                </Grid>
              );
            } else if (
              typeof formik.values[key as keyof typeof formik.values] ===
              "boolean"
            ) {
              const b: boolean = Boolean(
                formik.values[key as keyof typeof formik.values]
              );
              return (
                <FormGroup>
                  <FormControlLabel
                    name={key}
                    control={
                      <Switch checked={b} onChange={formik.handleChange} />
                    }
                    label={key}
                  />
                </FormGroup>
              );
            }
          })}
        </Grid>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <pre
        style={{
          fontSize: ".65rem",
          padding: ".25rem .5rem",
          overflowX: "scroll",
        }}
      >
        {JSON.stringify(formik, null, 2)}
      </pre>
    </div>
  );
};
export default WithMaterialUI;
