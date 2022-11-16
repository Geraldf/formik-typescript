import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as fld from "./Meta";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { CustomTextfield } from "../utils/CustomTextfield";
import { MaskedOne } from "../MaskedInput/MaskedOne";

const WithMaterialUI = (props: any) => {
  const formik = useFormik({
    initialValues: fld.initialFormState,

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
            switch (fld.formdef[key as keyof typeof fld.formdef].muiComponent) {
              case "TextField":
                return (
                  <Grid
                    item
                    xs={fld.formdef[key as keyof typeof fld.formdef].width}
                  >
                    <CustomTextfield
                      fullWidth
                      variant="standard"
                      id={key}
                      name={key}
                      label={key}
                      value={formik.values[key as keyof typeof formik.values]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched[key as keyof typeof formik.values] &&
                        Boolean(
                          formik.errors[key as keyof typeof formik.values]
                        )
                      }
                      helperText={
                        formik.touched[key as keyof typeof formik.values] &&
                        formik.errors[key as keyof typeof formik.values]
                      }
                    />
                  </Grid>
                );

              case "Switch":
                return (
                  <Grid
                    item
                    xs={fld.formdef[key as keyof typeof fld.formdef].width}
                  >
                    <FormGroup>
                      <FormControlLabel
                        name={key}
                        control={
                          <Switch
                            checked={Boolean(
                              formik.values[key as keyof typeof formik.values]
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        label={key}
                      />
                    </FormGroup>
                  </Grid>
                );
              case "Masked":
                return (
                  <Grid
                    item
                    xs={fld.formdef[key as keyof typeof fld.formdef].width}
                  >
                    <MaskedOne
                      label={key}
                      value={
                        formik.values[
                          key as keyof typeof formik.values
                        ] as string
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched[key as keyof typeof formik.values] &&
                        Boolean(
                          formik.errors[key as keyof typeof formik.values]
                        )
                      }
                      id={key}
                      helperText={
                        formik.touched[key as keyof typeof formik.values] &&
                        formik.errors[key as keyof typeof formik.values]
                      }
                    ></MaskedOne>
                    {/* <MaskedInput
                      variant="standard"
                      mask="___"
                      showMask={true}
                      replacement={{ _: /\d/ }}
                      label={key}
                      value={
                        formik.values[
                          key as keyof typeof formik.values
                        ] as string
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched[key as keyof typeof formik.values] &&
                        Boolean(
                          formik.errors[key as keyof typeof formik.values]
                        )
                      }
                      id={key}
                      helperText={
                        formik.touched[key as keyof typeof formik.values] &&
                        formik.errors[key as keyof typeof formik.values]
                      }
                    /> */}
                  </Grid>
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
