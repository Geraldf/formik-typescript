import { Field } from "formik";
import React from "react";
import { FormSelect } from "./StyledFields";

const DepartmentSelect = () => {
  return (
    <>
      <Field component={FormSelect} name="department.name">
        <option>Marketing</option>
        <option>HR</option>
        <option>Finance</option>
        <option>Customer Service</option>
      </Field>
    </>
  );
};

export default DepartmentSelect;
