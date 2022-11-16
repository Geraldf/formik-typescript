import {
  InputBaseComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { forwardRef } from "react";
import { MaskField } from "react-mask-field";
import { CustomTextfield } from "../utils/CustomTextfield";

const MaskedInput_helper = forwardRef<
  HTMLInputElement,
  InputBaseComponentProps
>((props, ref) => {
  return (
    <MaskField ref={ref} showMask={true} replacement={{ _: /\d/ }} {...props} />
  );
});

type Props = TextFieldProps & {
  mask: string;
  replacement: string | object;
  showMask?: boolean;
};

export const MaskedInput = (props: Props) => {
  const { mask, replacement, showMask, helperText } = props;

  return (
    <CustomTextfield
      {...props}
      //inputProps={CardNumberInput}
      InputProps={{
        inputComponent: MaskedInput_helper,
        inputProps: {
          mask: mask,
          replacement: replacement,
          showMask: showMask,
        },
      }}
    />
  );
};
