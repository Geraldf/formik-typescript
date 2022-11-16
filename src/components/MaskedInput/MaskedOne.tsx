import { TextField } from "@mui/material";
import React, { ChangeEventHandler, FocusEventHandler } from "react";
import InputMask from "react-input-mask";
import { CustomTextfield } from "../utils/CustomTextfield";

type Props = {
  helperText: string | false | undefined;
  error: boolean | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  label: string;
  id: string;
};

export const MaskedOne = (props: Props) => {
  return (
    <InputMask {...props} mask="99/99/9999">
      {() => {
        return <CustomTextfield {...props} variant="standard" />;
      }}
    </InputMask>
  );
};
