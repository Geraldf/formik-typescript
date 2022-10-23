import { Formik, Form, Field, FormikProps, FormikHelpers } from "formik";
import React, { ReactElement } from "react";
import DepartmentSelect from "./DepartmentSelect";
import { FormButton, FormField } from "./StyledFields";
import { GrayStatus, GreenStatus, State } from "./Styles";
import { format } from "date-fns";
import IndependentAuditorSelect from "./IndependentAuditorSelect";

type Department = {
  name: string;
};

type FormValues = {
  projectName: string;
  dueDate: string;
  department: Department;
  auditor: string;
};

const NestedProjectForm = (): ReactElement => {
  const initialValues: FormValues = {
    projectName: "Yearly Summit",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    department: { name: "HR" },
    auditor: "Fred Hunger",
  };

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    setTimeout(() => helpers.setSubmitting(false), 2000);
  };

  return (
    <div>
      <h1>Project Dashboard</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, values, setFieldValue }: FormikProps<FormValues>) => (
          <Form>
            {isSubmitting ? (
              <GreenStatus>Status: Submitting</GreenStatus>
            ) : (
              <GrayStatus>Status: Editing</GrayStatus>
            )}
            <State>State: {JSON.stringify(values, null, 2)}</State>
            <Field
              name="projectName"
              placeholder="Project Name"
              component={FormField}
            />
            <br />
            <Field name="dueDate" type="date" component={FormField} />
            <br />
            <DepartmentSelect />
            <br />
            <IndependentAuditorSelect
              value={values.auditor}
              onChange={(v) => setFieldValue("auditor", v)}
            />
            <br />
            <FormButton type="submit">Submit Project</FormButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NestedProjectForm;
