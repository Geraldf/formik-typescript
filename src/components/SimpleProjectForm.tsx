import format from "date-fns/format";
import { Formik, Form, Field, FormikState, FormikHelpers } from "formik";
import React, { ReactElement } from "react";
import { GrayStatus, GreenStatus } from "./Styles";

type FormValues = {
  projectName: string;
  dueDate: string;
};

const SimpleProjectForm = (): ReactElement => {
  const initialValues: FormValues = {
    projectName: "",
    dueDate: format(new Date(), "yyyy-MM-dd"),
  };

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    console.log({ values, helpers });
    setTimeout(() => helpers.setSubmitting(false), 2000);
  };

  return (
    <div>
      <h1>Project Dashboard</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }: FormikState<FormValues>) => (
          <Form>
            {isSubmitting ? (
              <GreenStatus>Status: Submitting</GreenStatus>
            ) : (
              <GrayStatus>Status: Editing</GrayStatus>
            )}
            <Field
              id="projectName"
              name="projectName"
              placeholder="Project Name"
            />
            <br />
            <Field id="dueDate" name="dueDate" type="date" />
            <br />
            <button type="submit">Submit Project</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SimpleProjectForm;
