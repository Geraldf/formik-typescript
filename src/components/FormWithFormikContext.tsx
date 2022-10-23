import {
  Formik,
  Form,
  Field,
  FormikProps,
  FormikHelpers,
  useFormikContext,
} from "formik";
import React, { ReactElement } from "react";
import DepartmentSelect from "./DepartmentSelect";
import { BetterInput, FormButton, FormField } from "./StyledFields";
import {
  GrayStatus,
  GreenStatus,
  State,
  Tag,
  TagCloud,
  TagRemove,
} from "./Styles";
import { format } from "date-fns";
import IndependentAuditorSelect from "./IndependentAuditorSelect";

type Department = {
  name: string;
};

type FormValues = {
  [key: string]: any;
  projectName: string;
  dueDate: string;
  department: Department;
  auditor: string;
  tags: string[];
};

const TagEditor = ({ formKey }: { formKey: string }): ReactElement => {
  const { values, setFieldValue } = useFormikContext<FormValues>();

  const removeTag = (tag: string) => {
    const tags = values[formKey].filter((t: string) => t !== tag);
    setFieldValue(formKey, tags);
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter" || e.currentTarget.value === "") {
      return;
    }
    setFieldValue(formKey, [...values.tags, e.currentTarget.value]);
    e.currentTarget.value = "";
  };

  return (
    <TagCloud>
      {values[formKey] &&
        values[formKey].map((t: string) => (
          <Tag key={t}>
            {t}
            <TagRemove onClick={() => removeTag(t)}>x</TagRemove>
          </Tag>
        ))}
      <BetterInput onKeyUp={addTag} />
    </TagCloud>
  );
};

const FormWithFormikContext = (): ReactElement => {
  const initialValues: FormValues = {
    projectName: "Yearly Summit",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    department: { name: "HR" },
    auditor: "Fred Hunger",
    tags: ["this", "is", "a", "test"],
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
            <TagEditor formKey={"tags"} />
            <br />
            <FormButton type="submit">Submit Project</FormButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormWithFormikContext;
